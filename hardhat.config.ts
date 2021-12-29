import "dotenv/config";
import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";
import { task } from "hardhat/config";
import { Wallet } from "ethers";

const accounts = {
  mnemonic: process.env.MNEMONIC || "",
};

task("accounts", "Prints the list of accounts", async (_args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("caller-secret", "Prints the list of accounts", async (_args, hre) => {
  const wallet = Wallet.fromMnemonic(accounts.mnemonic);
  console.log(wallet.privateKey);
});

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
