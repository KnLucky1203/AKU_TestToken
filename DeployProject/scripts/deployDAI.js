const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployDAI() {
    await deployContract("DAI", []);
    await verifyContract("DAI", getDeployFilteredInfo("DAI").imple, "contracts/DAI.sol:DAI", []);
}

module.exports = deployDAI