const hre = require("hardhat");

async function main() {

  const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
  const nftContract = await nftContractFactory.deploy();

  await nftContract.deployed();

  console.log("NFT deployed to:", nftContract.address);

  let txn = await nftContract.makeAnEpicNFT();
  await txn.wait();
  console.log("Minted NFT #1")

  txn = await nftContract.makeAnEpicNFT();
  await txn.wait();
  console.log("Minted NFT #2")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
