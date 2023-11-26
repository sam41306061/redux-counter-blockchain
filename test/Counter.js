const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  let counter;
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
  });
  it("can getCounter value", async () => {
    expect(await counter.getCounter()).to.equal(0);
  });
  it("call the increment function", async () => {
    expect(await counter.increment());
  });
  it("call the decrement function", async () => {
    expect(await counter.decrement());
  });
  it('call the multiply function', async() =>{
    const factor = ethers.utils.parseUnits('100', 'ether');
    await counter.multiply(factor);
   });
});
