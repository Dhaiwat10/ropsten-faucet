import "dotenv/config";
import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";

const accounts = {
  mnemonic: process.env.MNEMONIC || "",
};

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      {
        version: "0.8.11",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      accounts,
      chainId: 1337,
    },
    localhost: {
      accounts,
    },
    polygon: {
      url: process.env.RPC_URL,
      accounts,
      chainId: 137,
    },
    "polygon-mumbai": {
      url: process.env.RPC_TESTNET_URL,
      accounts,
      chainId: 80001,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
