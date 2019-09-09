pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;
contract Verifier{
    
    struct RECORD1{//因为结构体初始化时需要全部赋值，但却会遇到虚拟机栈太栈深的问题，所以将一条记录拆分为两个RECORD
        uint id;//具体验证记录的编号
        uint createTime;//记录验证记录创建时间
        uint8 operationStep;//标识合约当前运行状态，
        address payable  server;//服务器账号
        address payable  dataOwner;//数据拥有者账号
        address payable  dataUser;//数据访问者账号
        string  keyWord;//搜索关键字
        uint   fee1;//数据拥有者为服务器支付的验证报酬
        uint   fee2;//数据拥有者为数据拥有者支付的验证报酬
        uint  payAmount;//服务器给数据拥有者支付的服务费
        bool agreeed;
        
    }
    /*用6个数表示当前合约状态，限制操作
    1: 数据访问者可以回复申请
    2: 服务器可以开始验证
    3: 数据拥有者可以上传索引
    4: 数据访问者可以执行验证
    5: 验证过程结束
    6: 数据使用者不同意验证协议，验证截止
    */
    
    struct RECORD2{
        uint id;//具体验证记录的编号
        uint accuracy;//验证结果
        //bool passed;//验证结果是否达标，给服务器和数据拥有者返回的
        uint []  ansList;//服务器返回的文件列表
        uint []  fileList;//数据拥有者返回的文件列表
        int []  ansHash;//服务器返回的文件摘要
        int []  fileHash;//数据拥有者返回的文件摘要
        
    }
    
    struct SERVER_RECORD{
        uint id;
        address dataUser;
        address dataOwner;
        string keyWord;
        uint fee1;
        uint fee2;
        uint payAmount;
        bool agreeed;//
        uint accuracy;//
        uint time;//验证交易创建至今多久
        uint8 operationStep;
    }
    
    struct USER_RECORD{
        uint id;
        address server;
        address dataOwner;
        string keyWord;
        uint fee1;
        uint fee2;
        bool agreeed;
        uint accuracy;
        uint[] ansList;
        uint time;//验证交易创建至今多久
        uint8 operationStep;
    }
    
    struct OWNER_RECORD{
        uint id;
        address server;
        uint payAmount;
        bool agreeed;
        uint time;//验证交易创建至今多久
        uint8 operationStep;
    }

    RECORD1 [] private recordList1;
    RECORD2 [] private recordList2;
    
    constructor() public payable{
       // owner = msg.sender;

    }
    
     //事件：用于通知数据使用者是否同意该验证，主要是通知用户查看搜索关键词和支付金额
    event receivedApply(uint id,address indexed dataUser,address server,address dataOwner,string keyWord,uint fee1,uint fee2);
    //事件：用于提醒云服务器收到数据使用者关于验证费用的答复
     event receivedReply(uint id,address indexed server,address dataUser,bool agreeed);
    //事件：用于提醒数据拥有者收到验证申请和交易费用
    event receivedHelp(uint id,address indexed dataOwner,address server,string keyWord);
    //事件：用于提醒数据使用者可以开始进行验证了
    event stateOK(uint id,address indexed dataUser,address server,address dataOwner,string keyWord);
    //事件：用于提醒服务器和数据拥有者收到验证结果
    event verifyOver(uint id,address indexed server,address indexed dataOwner,address dataUser,uint accuracy);
    //事件：用于提醒数据使用者收到验证结果(结果正确，包含正确文件列表)
    event receivedResult1(uint id,address indexed dataUser,address server,address dataOwner,uint accuracy,string keyWord,uint[]ansList);
     //事件：用于提醒数据使用者收到验证结果(结果错误，不包含正确文件列表)
    event receivedResult2(uint id,address indexed dataUser,address server,address dataOwner,uint accuracy,string keyWord);
    
     modifier valueEnoughForServer(uint id){//函数修饰符
        require(
            msg.value >= recordList1[id].payAmount, //msg.value用于支付验证费用
            "您的余额不够，无法申请验证"
            );
        _;
    }
    
    modifier valueEnoughForUser(uint id){//函数修饰符
        require(
            msg.value >= recordList1[id].fee1+recordList1[id].fee2, //msg.value用于支付验证费用
            "您的余额不够，无法进行验证"
            );
        _;
    }
    
    modifier restrictStep(uint id,uint8 trueStep,address role){//限定了各个参与方的操作
        require(
            recordList1[id].operationStep == trueStep && role==msg.sender,
            "您当前尚无权限进行此操作"
            );
        _;
    }
    
    
    function applyVerify(address payable dataOwner1,address payable dataUser1, string memory keyword1,uint payAmount1,uint payAmount2,uint payAmount3)
    public payable  returns(uint){
        uint listLength = recordList1.length;//数组下标从零开始，所以当前数组元素数量就是下一条记录的编号
       // uint id = listLength;
        RECORD1 memory record1 = RECORD1({
            id : listLength,
            createTime : now,
            server : msg.sender,
            dataOwner: dataOwner1,
            dataUser : dataUser1,
            keyWord : keyword1,
            fee1 : payAmount1,
            fee2 : payAmount2,
            payAmount : payAmount3,
            operationStep : 1,
            agreeed : false
        });
        recordList1.push(record1);
        emit receivedApply(listLength,dataUser1,msg.sender,dataOwner1,keyword1,payAmount1,payAmount2);
        return listLength;
    }
    
    
    //函数：数据使用者回复是否同意验证费用
    function reply(uint id,bool agreeed)public restrictStep(id,1,recordList1[id].dataUser)  valueEnoughForUser(id) payable returns(bool){
         recordList1[id].agreeed = agreeed;
        if(agreeed){
            recordList1[id].operationStep = 2;
        }
        else{
            recordList1[id].operationStep = 6;
        }
       
        emit receivedReply(id,recordList1[id].server,msg.sender,agreeed);
        return agreeed;
    }
    
    
     //函数：服务器收到使用者同意后，开始验证过程
    function startVerify(uint id1,uint[]memory ansList1,int[]memory ansHash1) public restrictStep(id1,2,recordList1[id1].server) valueEnoughForServer(id1) payable returns(bool){
        uint [] memory fileList1;
        int []memory fileHash1;
        RECORD2 memory record2 = RECORD2({
            id : id1,
            ansList : ansList1,
            ansHash : ansHash1,
            fileList : fileList1,
            fileHash : fileHash1,
            accuracy : 0
         });
        recordList2.push(record2);
        recordList1[id1].operationStep = 3;
        recordList1[id1].dataOwner.transfer(recordList1[id1].payAmount);
        emit receivedHelp(id1,recordList1[id1].dataOwner,msg.sender,recordList1[id1].keyWord);
        return true;
    }
    
    
    //函数：数据拥有者上传索引文件和文件哈希值
    function offerIndex(uint id,uint[]memory fileList1,int[]memory fileHash1) public  restrictStep(id,3,recordList1[id].dataOwner) returns(bool){
        recordList2[id].fileList = fileList1;
        recordList2[id].fileHash = fileHash1;
        emit stateOK(id,recordList1[id].dataUser,recordList1[id].server,msg.sender,recordList1[id].keyWord);
        recordList1[id].operationStep = 4;
        return true;
    }
    
    
    //函数：数据使用者最终执行验证，如果结果达标则进行支付，否则拒绝支付
    function verify(uint id)public restrictStep(id,4,recordList1[id].dataUser) valueEnoughForUser(id) payable  returns(uint){
        uint accuracy = calculateAccuracy(id);
        if(accuracy== 10000){
           // recordList2[id].passed = true;
            recordList1[id].server.transfer(recordList1[id].fee1);
            if(recordList1[id].dataOwner!=msg.sender){
                recordList1[id].dataOwner.transfer(recordList1[id].fee2);
            }
            emit receivedResult1(id,msg.sender,recordList1[id].server,recordList1[id].dataOwner,recordList2[id].accuracy,recordList1[id].keyWord,recordList2[id].ansList);
        }
        else{
            
            emit receivedResult2(id,msg.sender,recordList1[id].server,recordList1[id].dataOwner,recordList2[id].accuracy,recordList1[id].keyWord);
        }
        emit verifyOver(id,recordList1[id].server,recordList1[id].dataOwner,recordList1[id].dataUser,accuracy);
        recordList1[id].operationStep = 5;
        return accuracy;
    }
    
    
    //函数：计算准确性
    function calculateAccuracy(uint id)public returns(uint){
        uint [] memory ansList = recordList2[id].ansList;
        int []memory ansHash = recordList2[id].ansHash;
        uint [] memory fileList = recordList2[id].fileList;
        int []memory fileHash = recordList2[id].fileHash;
        uint trueCount = fileList.length;
        uint ansCount = ansList.length;
        uint sum = 0;
        uint k=0;
        uint accuracy = 0;
        uint[]memory exists = new uint[](trueCount);
        uint[]memory noexists = new uint[](trueCount);
        for(uint i = 0; i < trueCount; i++){
            for (uint j = 0; j < ansCount; j++){
               if(fileList[i] == ansList[j] && fileHash[i]==ansHash[j]){//如果文件存在且完整，则记录下来
                   exists[sum] = fileList[i];
                   sum++;
                   break;
               }
               else if(j==ansCount-1){//记录缺少的文件，以备以后修改准确度计算方法
                   noexists[k] = fileList[i];
                    k++;
               }
            }
        }
        accuracy = (sum*10000) /trueCount;
        recordList2[id].accuracy = accuracy; //solidity浮点数现在无法使用，为了将准确度保留至小数点后两位，所以把数值扩大10000倍
        return accuracy;
        }

    
    
    function getServerRecord()public view returns(SERVER_RECORD[]memory,uint count){
        SERVER_RECORD[]memory serverRecordList = new SERVER_RECORD[](5);
        uint sum = 0;
        for(uint i=0; i< recordList1.length; i++){
            if(recordList1[i].server == msg.sender && sum <5){
                SERVER_RECORD memory serverRecord = SERVER_RECORD({
                    id : i,
                    dataUser : recordList1[i].dataUser,
                    dataOwner : recordList1[i].dataOwner,
                    keyWord : recordList1[i].keyWord,
                    fee1 : recordList1[i].fee1,
                    fee2 : recordList1[i].fee2,
                    payAmount : recordList1[i].payAmount,
                    agreeed : recordList1[i].agreeed,
                    accuracy :recordList2[i].accuracy,
                    time : (now-recordList1[i].createTime)/60,
                    operationStep : recordList1[i].operationStep
                });
                serverRecordList[sum] = serverRecord;
                sum++;
            }
        }
        return (serverRecordList,sum);
    }
    function getUserRecord()public view returns(USER_RECORD[]memory,uint count){
        USER_RECORD[]memory userRecordList = new USER_RECORD[](5);
        uint sum = 0;
        for(uint i=0; i< recordList1.length; i++){
            if(recordList1[i].dataUser == msg.sender){
                uint[]memory ansList1;
                if(recordList2[i].accuracy == 100){
                    ansList1 = recordList2[i].ansList;
                }
                USER_RECORD memory userRecord = USER_RECORD({
                    id : i,
                    server : recordList1[i].server,
                    dataOwner : recordList1[i].dataOwner,
                    keyWord : recordList1[i].keyWord,
                    fee1 : recordList1[i].fee1,
                    fee2 : recordList1[i].fee2,
                    agreeed : recordList1[i].agreeed,
                    accuracy :recordList2[i].accuracy,
                    ansList : ansList1,
                    time : (now-recordList1[i].createTime)/60,
                    operationStep : recordList1[i].operationStep
                });
                userRecordList[sum] = userRecord;
                sum++;
            }
        }
        return (userRecordList,sum);
    }
    function getOwnerRecord()public view returns(OWNER_RECORD[]memory,uint count){
        OWNER_RECORD[]memory ownerRecordList = new OWNER_RECORD[](5);
        uint sum = 0;
        for(uint i=0; i< recordList1.length ; i++){
            if(recordList1[i].dataOwner == msg.sender){
                OWNER_RECORD memory ownerRecord = OWNER_RECORD({
                    id : i,
                    server : recordList1[i].server,
                    payAmount : recordList1[i].payAmount,
                    agreeed : recordList1[i].agreeed,
                    time : (now-recordList1[i].createTime)/60,
                    operationStep : recordList1[i].operationStep
                });
                ownerRecordList[sum] = ownerRecord;
                sum++;
            }
        }
        return (ownerRecordList,sum);
    }

}






