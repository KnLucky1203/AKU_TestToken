const ARB = artifacts.require("WMATIC");
const AVAX = artifacts.require("WBNB");
const DAI = artifacts.require("WETH");
const LTC = artifacts.require("WETH");
const MATIC = artifacts.require("LINK");
const SOL = artifacts.require("TRX");
const TRX = artifacts.require("TRX");
const USDT = artifacts.require("USDT");
const WBNB = artifacts.require("WBNB");
const WBTC = artifacts.require("WBNB");
const WETH = artifacts.require("WETH");
const XMR = artifacts.require("XMR");

module.exports = async function (deployer) {
  await deployer.deploy(ARB);
  await ARB.deployed();

  await deployer.deploy(AVAX);
  await AVAX.deployed();

  await deployer.deploy(DAI);
  await DAI.deployed();

  await deployer.deploy(LTC);
  await LTC.deployed();

  await deployer.deploy(MATIC);
  await MATIC.deployed();

  await deployer.deploy(SOL);
  await SOL.deployed();

  await deployer.deploy(TRX);
  await TRX.deployed();

  await deployer.deploy(TRX);
  await TRX.deployed();
};