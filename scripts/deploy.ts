import { ethers, network } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying on network:", network.name);
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Deployer balance:", ethers.utils.formatEther(await deployer.getBalance()));

  const factory = await ethers.getContractFactory("Faucet");
  const contract = await factory.deploy(deployer.address);

  console.log("Contract address:", contract.address);
  console.log("Deploy transaction:", contract.deployTransaction.hash);

  if (network.name === "localhost") {
    const contractAmount = ethers.utils.parseEther("100");
    console.log("Sending", contractAmount, "to", contract.address);
    await deployer.sendTransaction({
      to: contract.address,
      value: contractAmount,
    });
  }

  // The contract is NOT deployed yet; we must wait until it is mined
  await contract.deployTransaction.wait();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
