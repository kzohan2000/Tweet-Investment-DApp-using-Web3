// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TweetInvestment {
    struct Tweet {
        address owner;
        uint256 investmentAmount;
        uint256 kpiTarget;
        uint256 currentKPI;
        bool completed;
    }

    mapping(uint256 => Tweet) public tweets;
    uint256 public tweetCount;

    function investInTweet(uint256 _tweetId) public payable {
        require(msg.value > 0, "Investment must be greater than zero");
        Tweet storage tweet = tweets[_tweetId];
        if (tweet.owner == address(0)) {
            // Initialize the tweet with the sender as the owner
            tweet.owner = msg.sender;
        }
        tweet.investmentAmount += msg.value;
    }


    function setKPITarget(uint256 _tweetId, uint256 _target) public {
        Tweet storage tweet = tweets[_tweetId];
        require(msg.sender == tweet.owner, "Only the tweet owner can set the KPI target");
        tweet.kpiTarget = _target;
    }

    function updateKPI(uint256 _tweetId, uint256 _kpi) public {
        Tweet storage tweet = tweets[_tweetId];
        tweet.currentKPI = _kpi;
        
        if (tweet.currentKPI >= tweet.kpiTarget) {
            tweet.completed = true;
            payable(tweet.owner).transfer(tweet.investmentAmount);
        }
    }
}
