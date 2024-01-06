require("@nomiclabs/hardhat-ethers");

async function main() {
  const OnChainProfile = await ethers.getContractFactory("OnChainProfile");
  console.log("Deploying to", network.name);

  const onChainProfile = await OnChainProfile.deployContract();
  await onChainProfile.waitForDeployment();

  console.log("OnChainProfile deployed to:", onChainProfile.target);
  process.exit();
}

main();
