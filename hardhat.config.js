require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  networks: {
    Sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/FsyX5ge78_IpATecmbmihiLk3Y8YtHO1",
      accounts:["424afab78124f3fa87ed5de7a05a3af343af55d8d7059926fdd0e5e6d1a7532a"],
      chainId: 11155111
    },
   
  },
  etherscan: {
    apiKey:"9SD445MKB4PCQI31BN74PZN9BNT4H8Y6KA"
  },
  gasReporter:{
enabled: true,
outputFile: "gasReport.txt",
noColors: true,
currency: "INR",
coinmarketcap:"ee25e558-23e6-4932-8817-ca7523b79be6"
  }
};
