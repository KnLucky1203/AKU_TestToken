const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployLTC() {
    // await deployContract("LTC", []);
    await verifyContract("LTC", getDeployFilteredInfo("LTC").imple, "contracts/LTC.sol:LTC", []);
}

module.exports = deployLTC