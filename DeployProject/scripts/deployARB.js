const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployARB() {
    await deployContract("ARB", []);
    await verifyContract("ARB", getDeployFilteredInfo("ARB").imple, "contracts/ARB.sol:ARB", []);
}

module.exports = deployARB