const ethers = require('ethers');
const hre = require("hardhat");

async function main() {
   // Connect to the network
   const provider = ethers.getDefaultProvider('http://127.0.0.1:8545/'); // Replace with the name of the network you are using

   // Fetch the contract
   const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3'; // Replace with your contract address
   const abi = [
        {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "decrement",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getCounter",
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
        "name": "increment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "factor",
            "type": "uint256"
          }
        ],
        "name": "multiply",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
   ];
       // Get the signer
 const [signer] = await hre.ethers.getSigners();
   const contract = new ethers.Contract(contractAddress, abi, signer, provider);

   // Perform operations
   for(let i = 0; i < 3; i++) {
       console.log(`Getting counter value...`);
       const counter = await contract.getCounter();
       console.log(`Counter value: ${counter}`);

       console.log(`Incrementing counter...`);
       const incrementTx = await contract.increment();
       await incrementTx.wait();
       

       console.log(`Decrementing counter...`);
       const decrementTx = await contract.decrement();
       await decrementTx.wait();

       console.log(`Multiplying counter...`);
       const multiplyTx = await contract.multiply(2);
       await multiplyTx.wait();
   }
}

main()
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });
