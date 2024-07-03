const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployETH() {
    // await deployContract("ETH", []);
    await verifyContract("ETH", getDeployFilteredInfo("ETH").imple, "contracts/ETH.sol:ETH", []);
}

module.exports = deployETH