var address ="0x714a3Ba4A7f704357df73a5CeFe6869FF4E5b537";
var signal = 0;
$(document).ready(function(){
  $("#loginBtn").click(function(){
      $("#loginBtn").addClass("focusMenuBtn");
      $("#balanceBtn").removeClass("focusMenuBtn");
      $("#applyBtn").removeClass("focusMenuBtn");
      $("#checkReplyBtn").removeClass("focusMenuBtn");
      $("#startBtn").removeClass("focusMenuBtn");
      $("#resultBtn").removeClass("focusMenuBtn");
      $("#recordBtn").removeClass("focusMenuBtn");

      
      $("#loginForm").removeClass("none");
      $("#balanceForm").addClass("none");
      $("#applyForm").addClass("none");
      $("#checkReplyForm").addClass("none");
      $("#startForm").addClass("none");
      $("#resultForm").addClass("none");
      $("#recordsForm").addClass("none");
      $("#nothingForm").addClass("none");
  });
    $("#balanceBtn").click(function(){
      $("#balanceBtn").addClass("focusMenuBtn");
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#applyBtn").removeClass("focusMenuBtn");
      $("#checkReplyBtn").removeClass("focusMenuBtn");
      $("#startBtn").removeClass("focusMenuBtn");
      $("#resultBtn").removeClass("focusMenuBtn");
      $("#recordBtn").removeClass("focusMenuBtn");
      $("#balanceForm").removeClass("none");
      $("#loginForm").addClass("none");
      $("#applyForm").addClass("none");
      $("#checkReplyForm").addClass("none");
      $("#startForm").addClass("none");
      $("#resultForm").addClass("none");
      $("#recordsForm").addClass("none");
      $("#nothingForm").addClass("none");
  });
   $("#applyBtn").click(function(){
      $("#applyBtn").addClass("focusMenuBtn");
      $("#balanceBtn").removeClass("focusMenuBtn");
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#checkReplyBtn").removeClass("focusMenuBtn");
      $("#startBtn").removeClass("focusMenuBtn");
      $("#resultBtn").removeClass("focusMenuBtn");
      $("#recordBtn").removeClass("focusMenuBtn");
      $("#applyForm").removeClass("none");
      $("#balanceForm").addClass("none");
      $("#loginForm").addClass("none");
      $("#checkReplyForm").addClass("none");
      $("#startForm").addClass("none");
      $("#resultForm").addClass("none");
      $("#recordsForm").addClass("none");
      $("#nothingForm").addClass("none");
  });

    $("#closeReply").click(function(){
      $("#applyBtn").addClass("focusMenuBtn");
      $("#balanceBtn").removeClass("focusMenuBtn");
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#checkReplyBtn").removeClass("focusMenuBtn");
      $("#startBtn").removeClass("focusMenuBtn");
      $("#resultBtn").removeClass("focusMenuBtn");
      $("#recordBtn").removeClass("focusMenuBtn");
      $("#applyForm").removeClass("none");
      $("#balanceForm").addClass("none");
      $("#loginForm").addClass("none");
      $("#checkReplyForm").addClass("none");
      $("#startForm").addClass("none");
      $("#resultForm").addClass("none");
      $("#recordsForm").addClass("none");
      $("#nothingForm").addClass("none");
  });
     $("#closeResult").click(function(){
      $("#applyBtn").addClass("focusMenuBtn");
      $("#balanceBtn").removeClass("focusMenuBtn");
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#checkReplyBtn").removeClass("focusMenuBtn");
      $("#startBtn").removeClass("focusMenuBtn");
      $("#resultBtn").removeClass("focusMenuBtn");
      $("#recordBtn").removeClass("focusMenuBtn");
      $("#applyForm").removeClass("none");
      $("#balanceForm").addClass("none");
      $("#loginForm").addClass("none");
      $("#checkReplyForm").addClass("none");
      $("#startForm").addClass("none");
      $("#resultForm").addClass("none");
      $("#recordsForm").addClass("none");
      $("#nothingForm").addClass("none");
  });

   $("#checkReplyBtn").click(function(){
      $("#checkReplyBtn").addClass("focusMenuBtn");
      $("#balanceBtn").removeClass("focusMenuBtn");
      $("#applyBtn").removeClass("focusMenuBtn");
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#startBtn").removeClass("focusMenuBtn");
      $("#resultBtn").removeClass("focusMenuBtn");
      $("#recordBtn").removeClass("focusMenuBtn");
      if(signal == 1){//收到回复
            $("#checkReplyForm").removeClass("none");
            $("#nothingForm").addClass("none");
      }
      else{
          $("#nothingForm").removeClass("none");
          $("#checkReplyForm").addClass("none");
      }
      
      $("#balanceForm").addClass("none");
      $("#applyForm").addClass("none");
      $("#loginForm").addClass("none");
      $("#startForm").addClass("none");
      $("#resultForm").addClass("none");
      $("#recordsForm").addClass("none");
  });
   $("#addData").click(function(){
      $("#startBtn").addClass("focusMenuBtn");
      $("#balanceBtn").removeClass("focusMenuBtn");
      $("#applyBtn").removeClass("focusMenuBtn");
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#checkReplyBtn").removeClass("focusMenuBtn");
      $("#resultBtn").removeClass("focusMenuBtn");
      $("#recordBtn").removeClass("focusMenuBtn");
      $("#startForm").removeClass("none");
      $("#nothingForm").addClass("none");
      $("#balanceForm").addClass("none");
      $("#applyForm").addClass("none");
      $("#loginForm").addClass("none");
      $("#checkReplyForm").addClass("none");
      $("#resultForm").addClass("none");
      $("#recordsForm").addClass("none");
      
  });
   $("#startBtn").click(function(){
      $("#startBtn").addClass("focusMenuBtn");
      $("#balanceBtn").removeClass("focusMenuBtn");
      $("#applyBtn").removeClass("focusMenuBtn");
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#checkReplyBtn").removeClass("focusMenuBtn");
      $("#resultBtn").removeClass("focusMenuBtn");
      $("#recordBtn").removeClass("focusMenuBtn");
      if(signal == 1){//收到回复
            $("#startForm").removeClass("none");
            $("#nothingForm").addClass("none");
      }
      else{
            
            $("#nothingForm").removeClass("none");
            $("#startForm").addClass("none");
      }
      
      $("#balanceForm").addClass("none");
      $("#applyForm").addClass("none");
      $("#loginForm").addClass("none");
      $("#checkReplyForm").addClass("none");
      $("#resultForm").addClass("none");
      $("#recordsForm").addClass("none");
      
  });
  $("#resultBtn").click(function(){
      $("#resultBtn").addClass("focusMenuBtn");
      $("#balanceBtn").removeClass("focusMenuBtn");
      $("#applyBtn").removeClass("focusMenuBtn");
      $("#checkReplyBtn").removeClass("focusMenuBtn");
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#startBtn").removeClass("focusMenuBtn");
      $("#recordBtn").removeClass("focusMenuBtn");
       if(signal == 2){//收到结果
            $("#resultForm").removeClass("none");
            $("#nothingForm").addClass("none");
      }
      else{
           
            $("#nothingForm").removeClass("none");
            $("#resultForm").addClass("none");
      }
      $("#balanceForm").addClass("none");
      $("#applyForm").addClass("none");
      $("#checkReplyForm").addClass("none");
      $("#loginForm").addClass("none");
      $("#startForm").addClass("none");
      $("#recordsForm").addClass("none");
  });
  $("#recordBtn").click(function(){
      $("#recordBtn").addClass("focusMenuBtn");
      $("#balanceBtn").removeClass("focusMenuBtn");
      $("#applyBtn").removeClass("focusMenuBtn");
      $("#checkReplyBtn").removeClass("focusMenuBtn");
      $("#startBtn").removeClass("focusMenuBtn");
      $("#resultBtn").removeClass("focusMenuBtn");
      $("#loginBtn").removeClass("focusMenuBtn");
      if(confirm("主动读取以太坊平台数据将会收费，您确定读取记录？")){
        $("#recordsForm").removeClass("none");
      $("#nothingForm").addClass("none");
      $("#balanceForm").addClass("none");
      $("#applyForm").addClass("none");
      $("#checkReplyForm").addClass("none");
      $("#startForm").addClass("none");
      $("#resultForm").addClass("none");
      $("#loginForm").addClass("none");
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
		document.getElementById("tipForLogin").innerHTML="账号或密码不对，请重新输入！";	}
	else{

    web3.eth.defaultAccount = account;
		document.getElementById("balanceBtn").disabled = false;
		document.getElementById("applyBtn").disabled = false;
		document.getElementById("checkReplyBtn").disabled = false;
		document.getElementById("startBtn").disabled = false;
		document.getElementById("resultBtn").disabled = false;
		document.getElementById("recordBtn").disabled = false;
    //登陆之后菜单栏定位到申请验证
      $("#loginBtn").removeClass("focusMenuBtn");
      $("#applyBtn").addClass("focusMenuBtn");
      $("#loginForm").addClass("none");
      $("#applyForm").removeClass("none");
    

      //开始监听直到页面关闭

      
      var myEvent1 = Verifier.receivedReply({server:account});
      var verifyOver = Verifier.verifyOver({server:account});


      //收到回复
      myEvent1.watch(function(error,result){
      alert("监听到收到回复,请查看回复！");
       if (!error){
            signal = 1;
            console.log("回复："+result);
            var id = result.args.id.c[0];
            var dataUser = result.args.dataUser;
            var agreeed = result.args.agreeed;
            document.getElementById("idReply").innerHTML="验证记录编号："+id;
            document.getElementById("dataUseReply").innerHTML="数据使用者："+dataUser;
            if(agreeed){
               document.getElementById("agreedReply").innerHTML="回复结果：同意验证";
            }
            else{
               document.getElementById("agreedReply").innerHTML="回复结果：放弃验证";
            }
       }
       else{
        console.log("回复出错");
         console.log(error);
       }
      });


      //收到结果
      verifyOver.watch(function(error,result){
         alert("监听到收到结果，请查看！");
         signal = 2;
         if(!error){
            console.log("回复："+result);
            var id = result.args.id.c[0];
            var dataUser = result.args.dataUser;
            var dataOwner = result.args.dataOwner;
            var accuracy = result.args.accuracy.c[0];
            document.getElementById("idResult").innerHTML = "验证记录编号："+id;
            document.getElementById("dataUserResult").innerHTML="数据使用者："+dataUser;
            document.getElementById("dataOwnerResult").innerHTML="数据使用者："+dataOwner;
            if(accuracy == 10000){
               document.getElementById("tipResult").innerHTML="验证结果合格，数据使用者已支付验证费用，请检查余额";
            }
            else{
               document.getElementById("tipResult").innerHTML="验证结果不合格";
            }
         }
         else{
            console.log(error);
            console.log("结果出错");
         }
      });

	
  }
}


function getBalance(){
   var balance = web3.eth.getBalance(account).toString(10);
   document.getElementById("adress").innerHTML = account;
   document.getElementById("balance").innerHTML = balance+"wei";

}


function apply(){
   var dataOwner = document.getElementById("dataOwnerApply").value;
   var dataUser = document.getElementById("dataUserApply").value;
   var keyWord = document.getElementById("keyWordApply").value;
   var fee1 = document.getElementById("fee1Apply").value;
   var fee2 = document.getElementById("fee2Apply").value;
   var fee3 = document.getElementById("fee3Apply").value;

   var ans = Verifier.applyVerify.sendTransaction(dataOwner,dataUser,keyWord,fee1,fee2,fee3,{gas:5000000});
   console.log("申请验证返回交易结果："+ans);
   alert("已申请验证！");
   document.getElementById("dataOwnerApply").value="";
   document.getElementById("dataUserApply").value="";
   document.getElementById("keyWordApply").value="";
   document.getElementById("fee1Apply").value="";
   document.getElementById("fee2Apply").value="";
   document.getElementById("fee3Apply").value="";
}

function startVerify(){
   var id = parseInt(document.getElementById("idStart").value);
   var ans = document.getElementById("ansList").value;
   var ansList = ans.split(",").map(Number);
   var hash = document.getElementById("ansHash").value;
   var ansHash = hash.split(",").map(Number);
   console.log(id,ansList,ansHash);
   var ans = Verifier.startVerify.sendTransaction(id,ansList,ansHash,{value:100,gas:5000000});
   document.getElementById("idStart").value="";
   document.getElementById("ansList").value="";
   var hash = document.getElementById("ansHash").value="";
   console.log("开始验证返回交易结果:"+ans);
   alert("开始验证！");
   signal = 0;
    $("#startBtn").removeClass("focusMenuBtn");//统一回到申请验证界面
    $("#applyBtn").addClass("focusMenuBtn");
    $("#startForm").addClass("none");
    $("#applyForm").removeClass("none");
}

function getRecords(){
   //如何画一个表格？
   //接收到的是一个数组，数组类型为一个结构体
}







