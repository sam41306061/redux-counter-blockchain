async function main() {
    //fetch contract to deploy
    const Counter = await ethers.getContractFactory('Counter');
  
    // deploy the contract 
    const counter = await Counter.deploy();
    await counter.deployed();
    console.log(counter.address);
  
  
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });