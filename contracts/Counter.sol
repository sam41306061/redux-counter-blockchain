//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter  {

    uint256 private counter;

    constructor() {
        counter = 0;
    }

    function getCounter() public view returns (uint256) {
        return counter;
    }

    function increment() public {
        counter += 1;
    }

    function decrement() public {
        counter -= 1;
    }

    function multiply(uint256 factor) public {
        counter *= factor;
    }
}