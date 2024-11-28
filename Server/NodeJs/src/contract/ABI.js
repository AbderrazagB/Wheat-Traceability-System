const CONTRACT_ABI = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "silos",
      "outputs": [
        {
          "components": [
            {
              "name": "mail",
              "type": "string"
            },
            {
              "name": "password",
              "type": "string"
            },
            {
              "name": "account",
              "type": "address"
            },
            {
              "name": "cid",
              "type": "string"
            },
            {
              "name": "role",
              "type": "string"
            },
            {
              "name": "status",
              "type": "string"
            }
          ],
          "name": "user",
          "type": "tuple"
        },
        {
          "name": "location",
          "type": "string"
        },
        {
          "name": "capacity",
          "type": "uint32"
        },
        {
          "name": "quantity",
          "type": "uint32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "farmers",
      "outputs": [
        {
          "components": [
            {
              "name": "mail",
              "type": "string"
            },
            {
              "name": "password",
              "type": "string"
            },
            {
              "name": "account",
              "type": "address"
            },
            {
              "name": "cid",
              "type": "string"
            },
            {
              "name": "role",
              "type": "string"
            },
            {
              "name": "status",
              "type": "string"
            }
          ],
          "name": "user",
          "type": "tuple"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "number",
          "type": "uint32"
        },
        {
          "name": "yield",
          "type": "uint32"
        },
        {
          "name": "location",
          "type": "string"
        },
        {
          "name": "selectedTransporter",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "transporters",
      "outputs": [
        {
          "components": [
            {
              "name": "mail",
              "type": "string"
            },
            {
              "name": "password",
              "type": "string"
            },
            {
              "name": "account",
              "type": "address"
            },
            {
              "name": "cid",
              "type": "string"
            },
            {
              "name": "role",
              "type": "string"
            },
            {
              "name": "status",
              "type": "string"
            }
          ],
          "name": "user",
          "type": "tuple"
        },
        {
          "name": "licensePlate",
          "type": "string"
        },
        {
          "name": "carCapacity",
          "type": "uint32"
        },
        {
          "name": "ssiHash",
          "type": "string"
        },
        {
          "name": "location",
          "type": "string"
        },
        {
          "name": "selectedFarmer",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "Address",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "role",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "mail",
          "type": "string"
        }
      ],
      "name": "UserAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "responseMessage",
          "type": "string"
        }
      ],
      "name": "ResponseMessage",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "message",
          "type": "string"
        }
      ],
      "name": "emettedEvent",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "email",
          "type": "string"
        },
        {
          "name": "pass",
          "type": "string"
        }
      ],
      "name": "verify",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "components": [
                {
                  "name": "mail",
                  "type": "string"
                },
                {
                  "name": "password",
                  "type": "string"
                },
                {
                  "name": "account",
                  "type": "address"
                },
                {
                  "name": "cid",
                  "type": "string"
                },
                {
                  "name": "role",
                  "type": "string"
                },
                {
                  "name": "status",
                  "type": "string"
                }
              ],
              "name": "user",
              "type": "tuple"
            },
            {
              "name": "name",
              "type": "string"
            },
            {
              "name": "number",
              "type": "uint32"
            },
            {
              "name": "yield",
              "type": "uint32"
            },
            {
              "name": "location",
              "type": "string"
            },
            {
              "name": "selectedTransporter",
              "type": "address"
            }
          ],
          "name": "farmer",
          "type": "tuple[]"
        }
      ],
      "name": "addFarmers",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "components": [
                {
                  "name": "mail",
                  "type": "string"
                },
                {
                  "name": "password",
                  "type": "string"
                },
                {
                  "name": "account",
                  "type": "address"
                },
                {
                  "name": "cid",
                  "type": "string"
                },
                {
                  "name": "role",
                  "type": "string"
                },
                {
                  "name": "status",
                  "type": "string"
                }
              ],
              "name": "user",
              "type": "tuple"
            },
            {
              "name": "licensePlate",
              "type": "string"
            },
            {
              "name": "carCapacity",
              "type": "uint32"
            },
            {
              "name": "ssiHash",
              "type": "string"
            },
            {
              "name": "location",
              "type": "string"
            },
            {
              "name": "selectedFarmer",
              "type": "address"
            }
          ],
          "name": "transporter",
          "type": "tuple[]"
        }
      ],
      "name": "addTransporters",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "components": [
                {
                  "name": "mail",
                  "type": "string"
                },
                {
                  "name": "password",
                  "type": "string"
                },
                {
                  "name": "account",
                  "type": "address"
                },
                {
                  "name": "cid",
                  "type": "string"
                },
                {
                  "name": "role",
                  "type": "string"
                },
                {
                  "name": "status",
                  "type": "string"
                }
              ],
              "name": "user",
              "type": "tuple"
            },
            {
              "name": "location",
              "type": "string"
            },
            {
              "name": "capacity",
              "type": "uint32"
            },
            {
              "name": "quantity",
              "type": "uint32"
            }
          ],
          "name": "silo",
          "type": "tuple[]"
        }
      ],
      "name": "addSilos",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getFarmers",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getTransporters",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getSilos",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "cid",
          "type": "string"
        },
        {
          "name": "role",
          "type": "string"
        }
      ],
      "name": "addCid",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newPassword",
          "type": "string"
        },
        {
          "name": "oldPassword",
          "type": "string"
        },
        {
          "name": "role",
          "type": "string"
        }
      ],
      "name": "changePassword",
      "outputs": [
        {
          "name": "",
          "type": "string"
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
          "name": "status",
          "type": "string"
        },
        {
          "name": "role",
          "type": "string"
        },
        {
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "changeStatus",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "farmer",
          "type": "address"
        }
      ],
      "name": "selectFarmer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "yield",
          "type": "uint32"
        }
      ],
      "name": "setYield",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "transporter",
          "type": "address"
        },
        {
          "name": "ssiHash",
          "type": "string"
        }
      ],
      "name": "transporterSelection",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "transporter",
          "type": "address"
        }
      ],
      "name": "confirmTransportation",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "message",
          "type": "string"
        }
      ],
      "name": "emetEvent",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
  
  
    export default CONTRACT_ABI;
  