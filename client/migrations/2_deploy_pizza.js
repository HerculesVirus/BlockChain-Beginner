var pizzaNFT = artifacts.require("../contracts/pizzaNFT.sol")

module.exports = function (deployer){
    deployer.deploy(pizzaNFT)
}