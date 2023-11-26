async function main() {
    //fetch contract to deploy
    const Counter = await ethers.getContractFactory('Counter');

    // specify the gas price
   const gasPrice = ethers.utils.parseUnits('1.0', 'gwei');
  
    // deploy the contract 
    const counter = await Counter.deploy({gasPrice: gasPrice});
    await counter.deployed();
    console.log(counter.address);
  
  
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });