const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deploySOL() {
    await deployContract("SOL", []);
    await verifyContract("SOL", getDeployFilteredInfo("SOL").imple, "contracts/SOL.sol:SOL", []);
}

module.exports = deploySOL