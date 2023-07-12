// imports
const { ethers, run, network } = require("hardhat")

// async main
async function main() {
  const SimpleStorageFactory = await ethers.deployContract("SimpleStorage")
  console.log("Deploying contract...")
  // const simpleStorage = await SimpleStorageFactory.deploy()

  console.log( await SimpleStorageFactory.getAddress())
  // what happens when we deploy to our hardhat network?
  
    console.log("Waiting for block confirmations...")
    tx = await SimpleStorageFactory.deploymentTransaction()
    await tx.wait(6)
    const address=await SimpleStorageFactory.getAddress()
    await verify(address, [])
 
  const currentValue = await SimpleStorageFactory.retrieve()
  console.log(`Current Value is: ${currentValue}`)

  // Update the current value
  const transactionResponse = await SimpleStorageFactory.store(7)
  await transactionResponse.wait(1)
  const updatedValue = await SimpleStorageFactory.retrieve()
  console.log(`Updated Value is: ${updatedValue}`)
}

// async function verify(contractAddress, args) {
const verify = async (contractAddress, args) => {
  console.log("Verifying contract...")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!")
    } else {
      console.log(e)
    }
  }
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })