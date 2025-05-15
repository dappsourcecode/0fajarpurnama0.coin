let ico_contract_address_avax_c_chain_0 = "0x1909f937E3c0Cf3d21E1379695b732C0Ff852960";
let ico_contract_address_avax_c_chain_1 = "0x0E9BE6ba93388610086e9159b2A70D93b78b4A6E";
let ico_contract_address_polygon_1 = "0x7a915b5ffa6463b529bcf3762a4653536fa00c40";
let ico_contract_address_ethereum_1 = "0xACab6874a9861a0b16669f9fC57b805C5F860ad3";
let ico_contract_address_arbitrum_1 = "0xACab6874a9861a0b16669f9fC57b805C5F860ad3";
let ico_contract_address_bsc_1 = "0xacab6874a9861a0b16669f9fc57b805c5f860ad3";
let ico_contract_address_nrg_evm_1 = "0x1909f937E3c0Cf3d21E1379695b732C0Ff852960";
let ico_contract_address_tt_1 = "0x7A915b5FFa6463B529bCf3762A4653536FA00C40";

let icoabi_evm_1 = [{
    "inputs": [{
            "internalType": "string",
            "name": "name",
            "type": "string"
        },
        {
            "internalType": "string",
            "name": "symbol",
            "type": "string"
        },
        {
            "internalType": "contract ERC20",
            "name": "_token",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "_rate",
            "type": "uint256"
        },
        {
            "internalType": "address payable",
            "name": "_wallet",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "_openingTime",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "_closingTime",
            "type": "uint256"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
},
{
    "inputs": [{
            "internalType": "address",
            "name": "spender",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "allowance",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "needed",
            "type": "uint256"
        }
    ],
    "name": "ERC20InsufficientAllowance",
    "type": "error"
},
{
    "inputs": [{
            "internalType": "address",
            "name": "sender",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "needed",
            "type": "uint256"
        }
    ],
    "name": "ERC20InsufficientBalance",
    "type": "error"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "approver",
        "type": "address"
    }],
    "name": "ERC20InvalidApprover",
    "type": "error"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "receiver",
        "type": "address"
    }],
    "name": "ERC20InvalidReceiver",
    "type": "error"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "sender",
        "type": "address"
    }],
    "name": "ERC20InvalidSender",
    "type": "error"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }],
    "name": "ERC20InvalidSpender",
    "type": "error"
},
{
    "anonymous": false,
    "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }
    ],
    "name": "Approval",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "buyer",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokens",
            "type": "uint256"
        }
    ],
    "name": "BuyTokens",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }
    ],
    "name": "Transfer",
    "type": "event"
},
{
    "inputs": [{
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }
    ],
    "name": "allowance",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{
            "internalType": "address",
            "name": "spender",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }
    ],
    "name": "approve",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "account",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "buyTokens",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
},
{
    "inputs": [],
    "name": "closingTime",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "decimals",
    "outputs": [{
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "isOpen",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "name",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "openingTime",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "rate",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "token",
    "outputs": [{
        "internalType": "contract ERC20",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }
    ],
    "name": "transfer",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [{
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }
    ],
    "name": "transferFrom",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "wallet",
    "outputs": [{
        "internalType": "address payable",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "weiRaised",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}
];

let icoabi_old_evm_1 = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "BuyTokens",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "buyTokens",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenSold",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wallet",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "weiRaised",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]