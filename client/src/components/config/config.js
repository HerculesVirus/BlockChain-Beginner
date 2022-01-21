export const CONTRACT_ADDRESS = "0x3750A8D7617121Bd4182E57c6babaf4Fe94256D7"

export const CONTRACT_ABI = [
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
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
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
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_ingredientId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ingredientTokenURI",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "artist",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "ingType",
          "type": "uint256"
        }
      ],
      "name": "createIngredientEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_nftId",
          "type": "uint256"
        }
      ],
      "name": "mintIngredient",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "mintedIds",
          "type": "uint256[]"
        }
      ],
      "name": "mintIngredients",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_nftId",
          "type": "uint256"
        }
      ],
      "name": "mintPizza",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_nftId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "_pizzaId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "base",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "sauce",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "cheese",
              "type": "uint256"
            },
            {
              "internalType": "uint256[]",
              "name": "meats",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "toppings",
              "type": "uint256[]"
            }
          ],
          "indexed": false,
          "internalType": "struct pizzaNFT.PizzasResponse",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "mintRandomPizza",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "randomBakeStartTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "randomBakeEndTime",
          "type": "uint256"
        }
      ],
      "name": "setTime",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "wallet",
          "type": "address"
        }
      ],
      "name": "updateDelevoperFundWallet",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTotalRarityRewards",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getRarityRewardId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "pizzaId",
          "type": "uint256"
        }
      ],
      "name": "getRarityRewardPizza",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "wallet",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "claimed",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "rewardPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "nftId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rarityScore",
              "type": "uint256"
            }
          ],
          "internalType": "struct pizzaNFT.RarityReward",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "rarityRewardsCalculation",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ingredientId",
          "type": "uint256"
        }
      ],
      "name": "checkMints",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "total",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minted",
              "type": "uint256"
            }
          ],
          "internalType": "struct pizzaNFT.IngredientCountResponse",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "ingredientId",
          "type": "uint256"
        }
      ],
      "name": "getIngredientRarity",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "rarity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "usedIn",
              "type": "uint256"
            }
          ],
          "internalType": "struct pizzaNFT.IngredientResponse",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "checkclaimableReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "claimReward",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "ingredientTokenURI",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "artist",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "ingType",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalCount",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "createIngredient",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "_ingredientIds",
          "type": "uint256[]"
        }
      ],
      "name": "purchaseAndMintIngredients",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "metadata",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "base",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sauce",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "cheese",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "meats",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "toppings",
          "type": "uint256[]"
        }
      ],
      "name": "randomBakePizzaAndMint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "metadata",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "base",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sauce",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "cheese",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "meats",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "toppings",
          "type": "uint256[]"
        }
      ],
      "name": "bakePizzaAndMint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "metadata",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "base",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sauce",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "cheese",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "meats",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "toppings",
          "type": "uint256[]"
        }
      ],
      "name": "buyAndBakePizzaAndMint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_pizzaId",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "ingredientIds",
          "type": "uint256[]"
        }
      ],
      "name": "unbakePizza",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_pizzaId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "metadata",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "base",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sauce",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "cheese",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "meats",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "toppings",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "allOldIngs",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "oldIngs",
          "type": "uint256[]"
        }
      ],
      "name": "rebakePizza",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "pizzaType",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "status",
          "type": "bool"
        }
      ],
      "name": "changePizzaAvailable",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
]