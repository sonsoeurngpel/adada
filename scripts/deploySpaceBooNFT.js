const hre = require("hardhat");

async function main() {
  const SpaceBooNFT = await hre.ethers.getContractFactory("SpaceBooNFT");
  const spaceBooNFT = await SpaceBooNFT.deploy();

  await spaceBooNFT.deployed();

  console.log("SpaceBooNFT deployed to:", spaceBooNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });