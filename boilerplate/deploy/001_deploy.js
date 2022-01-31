// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const ConcertFactory = await hre.ethers.getContractFactory("ConcertFactory");
  const concert_factory = await ConcertFactory.deploy();

  await concert_factory.deployed();

  console.log("ConcertFactory deployed to:", concert_factory.address);

  const ConcertMarketplace = await hre.ethers.getContractFactory("ConcertMarketplace");
  const concert_marketplace = await ConcertMarketplace.deploy();

  await concert_marketplace.deployed();

  console.log("ConcertMarketplace deployed to:", concert_marketplace.address);

  const CUSDC = await hre.ethers.getContractFactory("CUSDC");
  const cusdc = await CUSDC.deploy();

  await cusdc.deployed();

  console.log("CUSDC deployed to:", cusdc.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });