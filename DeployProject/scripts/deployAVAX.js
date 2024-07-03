const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployAVAX() {
    // await deployContract("AVAX", []);
    await verifyContract("AVAX", getDeployFilteredInfo("AVAX").imple, "contracts/AVAX.sol:AVAX", []);
}

module.exports = deployAVAX