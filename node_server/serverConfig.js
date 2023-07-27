// Put your infura token here.
var INFURA_TOKEN = "776f807362854e69bc56720220b359e0"

var config ={  
    "port" : 8081,
    "infuraToken": INFURA_TOKEN,
    "defaultChain" : "MAIN_NET",
    "chain":{  
       "MAIN_NET":{  
          name:"Ethereum Main Net",
          url:"https://mainnet.infura.io/v3/"         + INFURA_TOKEN
       },
       "ROPSTEN":{  
          name:"Ropsten Network",
          url:"https://ropsten.infura.io/v3/"         + INFURA_TOKEN
       },
       "Sepolia":{  
            name:"Sepolia Network",
            url:"https://sepolia.infura.io/v3/"         + INFURA_TOKEN
        },
        "RINKEBY":{  
            name:"Rinkeby Network",
            url:"https://rinkeby.infura.io/v3/"         + INFURA_TOKEN
        },
    }
 }

module.exports = config;
