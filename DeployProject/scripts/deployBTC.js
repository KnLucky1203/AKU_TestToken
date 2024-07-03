const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployBTC() {
    // await deployContract("BTC", []);
    await verifyContract("BTC", getDeployFilteredInfo("BTC").imple, "contracts/BTC.sol:BTC", []);
}

module.exports = deployBTC