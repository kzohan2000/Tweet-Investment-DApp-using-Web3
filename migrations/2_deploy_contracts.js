const TweetInvestment = artifacts.require("TweetInvestment");

module.exports = function(deployer) {
  deployer.deploy(TweetInvestment);
};
