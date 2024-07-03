const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployBNB() {
    // await deployContract("BNB", []);
    await verifyContract("BNB", getDeployFilteredInfo("BNB").imple, "contracts/BNB.sol:BNB", []);
}

module.exports = deployBNB