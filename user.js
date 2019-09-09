
var address ="0x714a3Ba4A7f704357df73a5CeFe6869FF4E5b537";
var signal = 0;
$(document).ready(function(){
  $("#loginBtn").click(function(){
      $("#loginBtn").addClass("focusMenuBtn");
      $("#balanceBtn").removeClass("focusMenuBtn");
      $("#replyBtn").removeClass("focusMenuBtn");
      $("#aidBtn").removeClass("focusMenuBtn");
      $("#verifyBtn").removeClass("focusMenuBtn");
      $("#resultBtn").removeClass("focusMenuBtn");
      $("#aidResultBtn").removeClass("focusMenuBtn");
      $("#recordBtn").removeClass("focusMenuBtn");
      $("#aidRecordBtn").removeClass("focusMenuBtn");
      $("#loginForm").removeClass("none");
      $("#balanceForm").addClass("none");
      $("#replyForm").addClass("none");
      $("#aidForm").addClass("none");
      $("#verifyForm").addClass("none");
      $("#resultForm").addClass("none");
      $("#aidResultForm").addClass("none");
      $("#recordsForm").addClass("none");
      $("#aidRecordsForm").addClass("none");
      $("#nothingForm").addClass("none");
  });
  $("#balanceBtn").click(function(){
      $("#balanceBtn").addClass("focusMenuBtn");
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#replyBtn").removeClass("focusMenuBtn");
      $("#aidBtn").removeClass("focusMenuBtn");
      $("#verifyBtn").removeClass("focusMenuBtn");
      $("#resultBtn").removeClass("focusMenuBtn");
      $("#aidResultBtn").removeClass("focusMenuBtn");
      $("#recordBtn").removeClass("focusMenuBtn");
      $("#aidRecordBtn").removeClass("focusMenuBtn");
      $("#balanceForm").removeClass("none");
      $("#loginForm").addClass("none");
      $("#replyForm").addClass("none");
      $("#aidForm").addClass("none");
      $("#verifyForm").addClass("none");
      $("#resultForm").addClass("none");
      $("#aidResultForm").addClass("none");
      $("#recordsForm").addClass("none");
      $("#aidRecordsForm").addClass("none");
      $("#nothingForm").addClass("none");
  });
  $("#closeResult").click(function(){
      $("#balanceBtn").addClass("focusMenuBtn");
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#replyBtn").removeClass("focusMenuBtn");
      $("#aidBtn").removeClass("focusMenuBtn");
      $("#verifyBtn").removeClass("focusMenuBtn");
      $("#resultBtn").removeClass("focusMenuBtn");
      $("#aidResultBtn").removeClass("focusMenuBtn");
      $("#recordBtn").removeClass("focusMenuBtn");
      $("#aidRecordBtn").removeClass("focusMenuBtn");
      $("#balanceForm").removeClass("none");
      $("#loginForm").addClass("none");
      $("#replyForm").addClass("none");
      $("#aidForm").addClass("none");
      $("#verifyForm").addClass("none");
      $("#resultForm").addClass("none");
      $("#aidResultForm").addClass("none");
      $("#recordsForm").addClass("none");
      $("#aidRecordsForm").addClass("none");
      $("#nothingForm").addClass("none");
  });
  $("#closeAidResult").click(function(){
      $("#balanceBtn").addClass("focusMenuBtn");
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#replyBtn").removeClass("focusMenuBtn");
      $("#aidBtn").removeClass("focusMenuBtn");
      $("#verifyBtn").removeClass("focusMenuBtn");
      $("#resultBtn").removeClass("focusMenuBtn");
      $("#aidResultBtn").removeClass("focusMenuBtn");
      $("#recordBtn").removeClass("focusMenuBtn");
      $("#aidRecordBtn").removeClass("focusMenuBtn");
      $("#balanceForm").removeClass("none");
      $("#loginForm").addClass("none");
      $("#replyForm").addClass("none");
      $("#aidForm").addClass("none");
      $("#verifyForm").addClass("none");
      $("#resultForm").addClass("none");
      $("#aidResultForm").addClass("none");
      $("#recordsForm").addClass("none");
      $("#aidRecordsForm").addClass("none");
      $("#nothingForm").addClass("none");
  });



  $("#replyBtn").click(function(){
      $("#replyBtn").addClass("focusMenuBtn");
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#balanceBtn").removeClass("focusMenuBtn");
      $("#aidBtn").removeClass("focusMenuBtn");
      $("#verifyBtn").removeClass("focusMenuBtn");
      $("#resultBtn").removeClass("focusMenuBtn");
      $("#aidResultBtn").removeClass("focusMenuBtn");
      $("#recordBtn").removeClass("focusMenuBtn");
      $("#aidRecordBtn").removeClass("focusMenuBtn");
      if(signal == 1){//收到验证申请
            $("#replyForm").removeClass("none");
            $("#nothingForm").addClass("none");
      }
      else{
            $("#nothingForm").removeClass("none");
            $("#replyForm").addClass("none");
            
      }

      $("#loginForm").addClass("none");
      $("#verifyForm").addClass("none");
      $("#aidForm").addClass("none");
      $("#balanceForm").addClass("none");
      $("#resultForm").addClass("none");
      $("#aidResultForm").addClass("none");
      $("#recordsForm").addClass("none");
      $("#aidRecordsForm").addClass("none");
  });
  $("#aidBtn").click(function(){
      $("#aidBtn").addClass("focusMenuBtn");
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#balanceBtn").removeClass("focusMenuBtn");
      $("#replyBtn").removeClass("focusMenuBtn");
      $("#verifyBtn").removeClass("focusMenuBtn");
      $("#resultBtn").removeClass("focusMenuBtn");
      $("#aidResultBtn").removeClass("focusMenuBtn");
      $("#recordBtn").removeClass("focusMenuBtn");
      $("#aidRecordBtn").removeClass("focusMenuBtn");
      if(signal == 2){//收到协助请求
            $("#aidForm").removeClass("none");
            $("#nothingForm").addClass("none");
      }
      else{
            $("#nothingForm").removeClass("none");
            $("#aidForm").addClass("none");
            
      }
      $("#loginForm").addClass("none");
      $("#replyForm").addClass("none");
      $("#verifyForm").addClass("none");
      $("#balanceForm").addClass("none");
      $("#resultForm").addClass("none");
      $("#aidResultForm").addClass("none");
      $("#recordsForm").addClass("none");
      $("#aidRecordsForm").addClass("none");
  });
  $("#verifyBtn").click(function(){
      $("#verifyBtn").addClass("focusMenuBtn");
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#balanceBtn").removeClass("focusMenuBtn");
      $("#replyBtn").removeClass("focusMenuBtn");
      $("#aidBtn").removeClass("focusMenuBtn");
      $("#resultBtn").removeClass("focusMenuBtn");
      $("#aidResultBtn").removeClass("focusMenuBtn");
      $("#recordBtn").removeClass("focusMenuBtn");
      $("#aidRecordBtn").removeClass("focusMenuBtn");
       if(signal == 3){//执行验证
            $("#verifyForm").removeClass("none");
            $("#nothingForm").addClass("none");
      }
      else{
            $("#nothingForm").removeClass("none");
            $("#verifyForm").addClass("none");
       }

      $("#loginForm").addClass("none");
      $("#replyForm").addClass("none");
      $("#aidForm").addClass("none");
      $("#balanceForm").addClass("none");
      $("#resultForm").addClass("none");
      $("#aidResultForm").addClass("none");
      $("#recordsForm").addClass("none");
      $("#aidRecordsForm").addClass("none");
  });
  $("#resultBtn").click(function(){
      $("#resultBtn").addClass("focusMenuBtn");
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#balanceBtn").removeClass("focusMenuBtn");
      $("#replyBtn").removeClass("focusMenuBtn");
      $("#aidBtn").removeClass("focusMenuBtn");
      $("#verifyBtn").removeClass("focusMenuBtn");
      $("#aidResultBtn").removeClass("focusMenuBtn");
      $("#recordBtn").removeClass("focusMenuBtn");
      $("#aidRecordBtn").removeClass("focusMenuBtn");
      if(signal == 5){//验证结果
            $("#resultForm").removeClass("none");
            $("#nothingForm").addClass("none");
      }
      else{
            
            $("#nothingForm").removeClass("none");
            $("#resultForm").addClass("none");
            
      }
 
      $("#loginForm").addClass("none");
      $("#replyForm").addClass("none");
      $("#aidForm").addClass("none");
      $("#balanceForm").addClass("none");
      $("#verifyForm").addClass("none");
      $("#aidResultForm").addClass("none");
      $("#recordsForm").addClass("none");
      $("#aidRecordsForm").addClass("none");
  });
  $("#aidResultBtn").click(function(){
      $("#aidResultBtn").addClass("focusMenuBtn");
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#balanceBtn").removeClass("focusMenuBtn");
      $("#replyBtn").removeClass("focusMenuBtn");
      $("#aidBtn").removeClass("focusMenuBtn");
      $("#verifyBtn").removeClass("focusMenuBtn");
      $("#resultBtn").removeClass("focusMenuBtn");
      $("#recordBtn").removeClass("focusMenuBtn");
      $("#aidRecordBtn").removeClass("focusMenuBtn");
       if(signal == 4){
            $("#aidResultForm").removeClass("none");
            $("#nothingForm").addClass("none");
      }
      else{
            $("#nothingForm").removeClass("none");
            $("#aidResultForm").addClass("none");
            
      }
      
      $("#loginForm").addClass("none");
      $("#replyForm").addClass("none");
      $("#aidForm").addClass("none");
      $("#balanceForm").addClass("none");
      $("#verifyForm").addClass("none");
      $("#resultForm").addClass("none");
      $("#recordsForm").addClass("none");
      $("#aidRecordsForm").addClass("none");
  });
    $("#recordBtn").click(function(){
      $("#recordBtn").addClass("focusMenuBtn");
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#balanceBtn").removeClass("focusMenuBtn");
      $("#replyBtn").removeClass("focusMenuBtn");
      $("#verifyBtn").removeClass("focusMenuBtn");
      $("#resultBtn").removeClass("focusMenuBtn");
      $("#aidResultBtn").removeClass("focusMenuBtn");
      $("#aidBtn").removeClass("focusMenuBtn");
      $("#aidRecordBtn").removeClass("focusMenuBtn");
      if(confirm("主动读取以太坊平台数据将会收费，您确定读取记录？")){

            $("#recordsForm").removeClass("none");
            $("#loginForm").addClass("none");
            $("#replyForm").addClass("none");
            $("#aidForm").addClass("none");
            $("#verifyForm").addClass("none");
            $("#balanceForm").addClass("none");
            $("#resultForm").addClass("none");
            $("#aidResultForm").addClass("none");
            $("#aidRecordsForm").addClass("none");
            $("#nothingForm").addClass("none");
      }
      
  });
    $("#aidRecordBtn").click(function(){
      $("#aidRecordBtn").addClass("focusMenuBtn");
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#balanceBtn").removeClass("focusMenuBtn");
      $("#replyBtn").removeClass("focusMenuBtn");
      $("#verifyBtn").removeClass("focusMenuBtn");
      $("#resultBtn").removeClass("focusMenuBtn");
      $("#aidResultBtn").removeClass("focusMenuBtn");
      $("#aidBtn").removeClass("focusMenuBtn");
      $("#recordBtn").removeClass("focusMenuBtn");
      if(confirm("主动读取以太坊平台数据将会收费，您确定读取记录？")){
            $("#aidRecordsForm").removeClass("none");
            $("#loginForm").addClass("none");
            $("#replyForm").addClass("none");
            $("#aidForm").addClass("none");
            $("#verifyForm").addClass("none");
            $("#balanceForm").addClass("none");
            $("#resultForm").addClass("none");
            $("#aidResultForm").addClass("none");
            $("#recordsForm").addClass("none");
            $("#nothingForm").addClass("none");
      }
      
  });

});


if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

var version = web3.version.api;
console.log(version);
var ABI=[
    {
      "inputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "dataUser",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "server",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "dataOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "keyWord",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "fee1",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "fee2",
          "type": "uint256"
        }
      ],
      "name": "receivedApply",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "server",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "dataUser",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "agreeed",
          "type": "bool"
        }
      ],
      "name": "receivedReply",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "dataOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "server",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "keyWord",
          "type": "string"
        }
      ],
      "name": "receivedHelp",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "dataUser",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "server",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "dataOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "keyWord",
          "type": "string"
        }
      ],
      "name": "stateOK",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "server",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "dataOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "dataUser",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "accuracy",
          "type": "uint256"
        }
      ],
      "name": "verifyOver",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "dataUser",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "server",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "dataOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "accuracy",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "keyWord",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "ansList",
          "type": "uint256[]"
        }
      ],
      "name": "receivedResult1",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "dataUser",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "server",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "dataOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "accuracy",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "keyWord",
          "type": "string"
        }
      ],
      "name": "receivedResult2",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "dataOwner1",
          "type": "address"
        },
        {
          "name": "dataUser1",
          "type": "address"
        },
        {
          "name": "keyword1",
          "type": "string"
        },
        {
          "name": "payAmount1",
          "type": "uint256"
        },
        {
          "name": "payAmount2",
          "type": "uint256"
        },
        {
          "name": "payAmount3",
          "type": "uint256"
        }
      ],
      "name": "applyVerify",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "id",
          "type": "uint256"
        },
        {
          "name": "agreeed",
          "type": "bool"
        }
      ],
      "name": "reply",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "id1",
          "type": "uint256"
        },
        {
          "name": "ansList1",
          "type": "uint256[]"
        },
        {
          "name": "ansHash1",
          "type": "int256[]"
        }
      ],
      "name": "startVerify",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "id",
          "type": "uint256"
        },
        {
          "name": "fileList1",
          "type": "uint256[]"
        },
        {
          "name": "fileHash1",
          "type": "int256[]"
        }
      ],
      "name": "offerIndex",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "verify",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "calculateAccuracy",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getServerRecord",
      "outputs": [
        {
          "components": [
            {
              "name": "id",
              "type": "uint256"
            },
            {
              "name": "dataUser",
              "type": "address"
            },
            {
              "name": "dataOwner",
              "type": "address"
            },
            {
              "name": "keyWord",
              "type": "string"
            },
            {
              "name": "fee1",
              "type": "uint256"
            },
            {
              "name": "fee2",
              "type": "uint256"
            },
            {
              "name": "payAmount",
              "type": "uint256"
            },
            {
              "name": "agreeed",
              "type": "bool"
            },
            {
              "name": "accuracy",
              "type": "uint256"
            },
            {
              "name": "time",
              "type": "uint256"
            },
            {
              "name": "operationStep",
              "type": "uint8"
            }
          ],
          "name": "",
          "type": "tuple[]"
        },
        {
          "name": "count",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getUserRecord",
      "outputs": [
        {
          "components": [
            {
              "name": "id",
              "type": "uint256"
            },
            {
              "name": "server",
              "type": "address"
            },
            {
              "name": "dataOwner",
              "type": "address"
            },
            {
              "name": "keyWord",
              "type": "string"
            },
            {
              "name": "fee1",
              "type": "uint256"
            },
            {
              "name": "fee2",
              "type": "uint256"
            },
            {
              "name": "agreeed",
              "type": "bool"
            },
            {
              "name": "accuracy",
              "type": "uint256"
            },
            {
              "name": "ansList",
              "type": "uint256[]"
            },
            {
              "name": "time",
              "type": "uint256"
            },
            {
              "name": "operationStep",
              "type": "uint8"
            }
          ],
          "name": "",
          "type": "tuple[]"
        },
        {
          "name": "count",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getOwnerRecord",
      "outputs": [
        {
          "components": [
            {
              "name": "id",
              "type": "uint256"
            },
            {
              "name": "server",
              "type": "address"
            },
            {
              "name": "payAmount",
              "type": "uint256"
            },
            {
              "name": "agreeed",
              "type": "bool"
            },
            {
              "name": "time",
              "type": "uint256"
            },
            {
              "name": "operationStep",
              "type": "uint8"
            }
          ],
          "name": "",
          "type": "tuple[]"
        },
        {
          "name": "count",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];
var account;

var Verifier = web3.eth.contract(ABI).at(address);


function login(){
  account = document.getElementById("account").value;
  var password = document.getElementById("password").value;
  if(password != "123456"){
      document.getElementById("tipForLogin").innerHTML="账号或密码不对，请重新输入！";  
  }
  else{
      web3.eth.defaultAccount = account;
      document.getElementById("balanceBtn").disabled = false;
      document.getElementById("replyBtn").disabled = false;
      document.getElementById("aidBtn").disabled = false;
      document.getElementById("verifyBtn").disabled = false;
      document.getElementById("resultBtn").disabled = false;
      document.getElementById("aidResultBtn").disabled = false;
      document.getElementById("recordBtn").disabled = false;
      document.getElementById("aidRecordBtn").disabled = false;
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#balanceBtn").addClass("focusMenuBtn");
      $("#loginForm").addClass("none");
      $("#balanceForm").removeClass("none");
      //开始监听直到页面关闭
      var receivedApply = Verifier.receivedApply({dataUser:account});
      var receivedHelp = Verifier.receivedHelp({dataOwner:account});
      var stateOK = Verifier.stateOK({dataUser:account});
      var verifyOver = Verifier.verifyOver({dataOwner:account});
      var receivedResult1 = Verifier.receivedResult1({dataUser:account});
      var receivedResult2 = Verifier.receivedResult2({dataUser:account});
      alert("正在监听！");
      //收到监听处理
      //数据使用者收到验证申请
      receivedApply.watch(function(error,result){
         alert("收到验证申请！");
         signal = 1;
         if(!error){
            console.log("申请："+result);
            document.getElementById("idReply").innerHTML = "验证记录编号:"+result.args.id.c[0];
            document.getElementById("serverReply").innerHTML="云服务器账号:"+ result.args.server;
            document.getElementById("dataOwnerReply").innerHTML = "数据拥有者账号:"+result.args.dataOwner;
            document.getElementById("keyWordReply").innerHTML = "搜索关键词:"+result.args.keyWord;
            document.getElementById("fee1").innerHTML= "您需要支付给云服务器的验证费用:"+result.args.fee1.c[0];
            document.getElementById("fee2").innerHTML = "您需要支付给数据拥有者的费用:"+result.args.fee2.c[0];
         }
         else{
            console.log("申请出错"+error);
         }
      });
      //数据拥有者收到协助验证请求
      receivedHelp.watch(function(error,result){
         alert("收到协助验证请求！");
         signal = 2;
         if(!error){
            console.log("帮助验证："+result);
            document.getElementById("idAid").innerHTML = "验证记录编号:"+result.args.id.c[0];
            document.getElementById("serverAid").innerHTML = "云服务器账号:"+result.args.server;
            document.getElementById("keyWordAid").innerHTML = "搜索关键词:"+result.args.keyWord;
         }
         else{
            console.log("帮助出错"+error);
         }
      });
      //数据使用者收到执行验证提示
      stateOK.watch(function(error,result){
          signal = 3;
          alert("收到执行验证提示！");
          if(!error){
            console.log("执行验证"+result);
            document.getElementById("idVerify").innerHTML = "验证记录编号:"+result.args.id.c[0];
            document.getElementById("serverVerify").innerHTML = "云服务器账号:"+result.args.server;
            document.getElementById("dataOwnerVerify").innerHTML = "数据拥有者账号:"+result.args.dataOwner;
            document.getElementById("keyWordVerify").innerHTML = "搜索关键词:"+result.args.keyWord;
         }
         else{
            console.log("执行出错"+error);
         }
      });
      //数据拥有者收到验证结果
      verifyOver.watch(function(error,result){
        signal = 4;
         alert("收到协助验证结果！");
         if(!error){
            console.log("协助结果："+result);
            document.getElementById("idAidResult").innerHTML = "验证记录编号"+result.args.id.c[0];
            document.getElementById("serverAidResult").innerHTML = "云服务器账号:"+result.args.server;
            var accuracy = result.args.accuracy.c[0]/100;
            document.getElementById("accuracyAidResult").innerHTML = "搜索结果准确度:"+accuracy+"%";
            
            if(accuracy==100){
               document.getElementById("tipAidResult").innerHTML="验证结果合格，数据使用者已支付验证费用，请检查余额";
            }
            else{
               document.getElementById("tipAidResult").innerHTML="验证结果不合格";
            }
         }
         else{
            console.log("协助出错"+error);
         }
      });
      //数据使用者收到结果（结果正确，包含正确文件列表）
      receivedResult1.watch(function(error,result){
        signal = 5;
         alert("收到验证结果！");
         if(!error){
            console.log("回复："+result);
            document.getElementById("idResult").innerHTML = "验证记录编号:"+result.args.id.c[0];
            document.getElementById("serverResult").innerHTML = "云服务器账号:"+result.args.server;
            document.getElementById("dataOwnerResult").innerHTML = "数据拥有者账号:"+result.args.dataOwner;
            document.getElementById("keyWordResult").innerHTML = "搜索关键词:"+result.args.keyWord;
            var accuracy = result.args.accuracy.c[0]/100;
            document.getElementById("accuracyResult").innerHTML = "搜索结果准确度:"+accuracy+"%";
            var ans = new Array();
            for (var i = 0; i<result.args.ansList.length; i++) {
                  ans.push(result.args.ansList[i]);
                  console.log("收到的anslist:"+result.args.ansList[i]);
               }

            document.getElementById("ansListResult").innerHTML = "正确文件编号列表是:"+ans;
            document.getElementById("tipResult").innerHTML = "验证结果合格，已自动支付费用";

         }
         else{
            console.log("结果１出错"+error);
         }
      });

      //数据使用者收到结果（结果不正确，不包含正确文件列表）
      receivedResult2.watch(function(error,result){
        signal = 5;
         alert("收到验证结果!");
         if(!error){
            console.log("回复："+result);
            document.getElementById("idResult").innerHTML = "验证记录编号:"+result.args.id.c[0];
            document.getElementById("serverResult").innerHTML = "云服务器账号:"+result.args.server;
            document.getElementById("dataOwnerResult").innerHTML = "数据拥有者账号:"+result.args.dataOwner;
            document.getElementById("keyWordResult").innerHTML = "搜索关键词:"+result.args.keyWord;
            var accuracy = result.args.accuracy.c[0]/100;
            document.getElementById("accuracyResult").innerHTML = "搜索结果准确度:"+accuracy+"%";
            document.getElementById("tipResult").innerHTML = "验证结果不合格";

         }
         else{
            console.log("结果２出错"+error);
         }
      });


  }
}


function getBalance(){

   var balance = web3.eth.getBalance(account).toString(10);
   document.getElementById("address").innerHTML = account;
   document.getElementById("balance").innerHTML = balance+"wei";

}

function reply(){
	var str = document.getElementById("idReply").innerHTML;
  var str1 = str.split(":");
  var id = parseInt(str1[1]);
	var obj = document.getElementsByName("agreeChoice");
 	for(var i = 0; i < obj.length; i ++) {
     if (obj[i].checked) {
         var choice = obj[i].value;
     	}	
 	}
  console.log(id,choice);
 	var ans = Verifier.reply.sendTransaction(id,choice,{value:100});
  signal = 0;
  $("#replyBtn").removeClass("focusMenuBtn");
  $("#balanceBtn").addClass("focusMenuBtn");
  $("#replyForm").addClass("none");
  $("#balanceForm").removeClass("none");
 	console.log("回复结果是"+ans);
 	alert("已提交答复!");
}


/*
function upload(){
  var str = document.getElementById("keyWordAid").innerHTML;
  var str1 = str.split(":");
  var keyWord = parseInt(str1[1]);
	var indexFile = document.getElementById("index").files[0];
	var hashFile = document.getElementById("hash").files[0];
    var indexReader = new FileReader();
    var hashReader = new FileReader();
    indexReader.readAsText(indexFile);
    hashReader.readAsText(hashFile);
    var reading = 1;
    indexReader.onload = function(){
    	var lines = indexReader.result.split("\n");//将读取结果以换行符切割，返回一个字符串数组
        console.log(lines);
        for(var i=0 ; i<lines.length; i++){
	        var str = lines[i];//单个子串，如"keyWord,1,2,3,4"
	        var line = str.split(",");//将单个子串切分为一维数组，返回如["keyWord“,”1“,”2“,”3“,”4“]
	        if(line[0] == keyWord){
	          	var indexLine = line.slice(1);
	          	fileList = indexLine.map(Number);//字符串数组转为数字数组
	            break;
	          }
        } 
        reading = 0;//读取结束
  	}

    while(reading){
    	//WAITING
    }

    hashReader.onload = function(){
    	var lines = hashReader.result.split("\n");//将文本按行分割，返回一个字符串数组
            console.log(lines);
            for (var i=0; i<fileList; i++){
                var rowNum = parseInt(indexLine[i]);//从fileList获取要搜查的文件行号（即编号,幸好提取摘要之后按文件编号把摘要排序了hhh）
                var str = lines[rowNum-1];//对应行号的哈希值，因为行号是从１开始的，而数组下标从０开始，所以减１
                var line = str.split(" ");//按一个空格分割,返回字符串数组
                var hash = parseInt(line[1]);//去掉文件编号，留下摘要
                fileHash[i] = hash;
    		}
	}
	document.getElementById("tipAid").innerHTML="文件上传成功！";
}
*/
var fileList=[];
var fileHash=[];
function upload(){
  var str = document.getElementById("keyWordAid").innerHTML;
  var str1 = str.split(":");
  var keyWord = str1[1];
  var indexFile = document.getElementById("index").files[0];
    var indexReader = new FileReader();
    indexReader.readAsText(indexFile);
    indexReader.onload = function(){
      var lines = indexReader.result.split("\n");//将读取结果以换行符切割，返回一个字符串数组
        console.log(lines);
        for(var i=0 ; i<lines.length; i++){
          var str = lines[i];//单个子串，如"keyWord,1,2,3,4"
          var line = str.split(",");//将单个子串切分为一维数组，返回如["keyWord“,”1“,”2“,”3“,”4“]
          if(line[0] == keyWord){
              var indexLine = line.slice(1);
              fileList = indexLine.map(Number);//字符串数组转为数字数组
              console.log(fileList);
              break;
            }
        } 
    }
document.getElementById("tipAid").innerHTML="文件上传成功！";
}

function offerIndex(){
  var hashFile = document.getElementById("hash").files[0];
  var hashReader = new FileReader();
  hashReader.readAsText(hashFile);
  hashReader.onload = function(){
      var lines = hashReader.result.split("\n");//将文本按行分割，返回一个字符串数组
            console.log(lines);
            for (var i=0; i<fileList.length; i++){
                var rowNum = parseInt(fileList[i]);//从fileList获取要搜查的文件行号（即编号,幸好提取摘要之后按文件编号把摘要排序了hhh）
                var factNum = rowNum-1;
                var factLine = lines[factNum];
                var line = factLine.split(" ");//对应行号的哈希值，因为行号是从１开始的，而数组下标从０开始，所以减１//按一个空格分割,返回字符串数组
                var hash = parseInt(line[1]);//去掉文件编号，留下摘要
                fileHash[i] = hash;
        }
      var str = document.getElementById("idAid").innerHTML;
      var str1 = str.split(":");
      var id = parseInt(str1[1]);
      console.log(id,fileList,fileHash);
      var ans = Verifier.offerIndex.sendTransaction(id,fileList,fileHash,{gas:4000000});
      console.log("协助验证结果是:"+ans);
      alert("成功发送验证所需数据");
      signal = 0;
      $("#aidBtn").removeClass("focusMenuBtn");
      $("#balanceBtn").addClass("focusMenuBtn");
      $("#aidForm").addClass("none");
      $("#balanceForm").removeClass("none");    
  }
  
}


function verify(){
  var str = document.getElementById("idVerify").innerHTML;
  var str1 = str.split(":");
  var id = parseInt(str1[1]);
  console.log(id);
	var ans = Verifier.verify.sendTransaction(id,{value:100,gas:4000000});
	console.log("执行验证结果是:"+ans);
  alert("已执行验证");
  signal = 0;
  $("#verifyBtn").removeClass("focusMenuBtn");
  $("#balanceBtn").addClass("focusMenuBtn");
  $("#verifyForm").addClass("none");
  $("#balanceForm").removeClass("none");
}
