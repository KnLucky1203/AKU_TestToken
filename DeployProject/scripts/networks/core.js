const deployARB = require("../deployARB.js");
const deployAVAX = require("../deployAVAX.js");
const deployDAI = require("../deployDAI.js");
const deployLTC = require("../deployLTC.js");
const deployMATIC = require("../deployMATIC.js");
const deploySOL = require("../deploySOL.js");
const deployTRX = require("../deployTRX.js");
const deployUSDT = require("../deployUSDT.js");
const deployWBNB = require("../deployWBNB.js");
const deployWBTC = require("../deployWBTC.js");
const deployWETH = require("../deployWETH.js");
const deployXMR = require("../deployXMR.js");

const deploy_core = async () => {
    await deployARB();
    await deployAVAX();
    await deployDAI();
    await deployLTC();
    await deployMATIC();
    await deploySOL();
    await deployTRX();
    await deployUSDT();
    await deployWBNB();
    await deployWBTC();
    await deployWETH();
    await deployXMR();
}

module.exports = { deploy_core };