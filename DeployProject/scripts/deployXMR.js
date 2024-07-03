const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployXMR() {
    await deployContract("XMR", []);
    await verifyContract("XMR", getDeployFilteredInfo("XMR").imple, "contracts/XMR.sol:XMR", []);
}

module.exports = deployXMR