require("dotenv").config();
const { HardhatError } = require("hardhat/internal/core/errors");
require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork:"hardhat",
  networks: {
    hardhat:{
      chainId:1337,
    },
    goerli:{
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
