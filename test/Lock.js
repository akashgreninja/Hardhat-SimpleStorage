const { ethers } = require("hardhat");
const { assert } = require("chai");

describe("SimpleStorage", function () {
  let SimpleStorageFactory;
  let SimpleStorage;
  beforeEach(async function () {
   SimpleStorageFactory = await ethers.getContractFactory(
      "SimpleStorage"
    );
   SimpleStorage = await SimpleStorageFactory.deploy();
  });
  it("Should start with a value of 0", async function () {
    const value = await SimpleStorage.retrieve();
    const expectedValue = 0;
    assert.equal(value.toString(), expectedValue, "The value was not 0");
  });
  it("should return the value 7 ",async function (){
    const value = await SimpleStorage.store(7);
    const expectedValue = 7;
    const retrivedvalue = await SimpleStorage.retrieve();
    assert.equal(retrivedvalue.toString(), expectedValue, "The value was not 7");
  })
});
