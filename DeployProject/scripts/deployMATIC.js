const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployMATIC() {
    await deployContract("MATIC", []);
    await verifyContract("MATIC", getDeployFilteredInfo("MATIC").imple, "contracts/MATIC.sol:MATIC", []);
}

module.exports = deployMATIC