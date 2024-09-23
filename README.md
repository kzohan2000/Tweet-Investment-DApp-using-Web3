# Tweet-Investment-DApp-using-Web3
## Overview
The Tweet Investment DApp allows users to invest in tweets and earn rewards based on their performance metrics. By converting tweets into smart contracts, users can predict the virality of tweets and invest accordingly.

## Requirements

### Software Requirements
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **Truffle** (v5.0 or higher)
- **Ganache** (desktop version or ganache-cli)
- **MetaMask** (browser extension)

### Libraries and Tools
- **Web3.js** (v1.6.0 or higher)
- **Solidity** (v0.8.0 or higher)
- **Python** (for AI-related tasks, if applicable)

## Architecture
The DApp is built on the Ethereum blockchain using smart contracts. It consists of the following components:
1. **Smart Contracts**: Deployed on the Ethereum network, these contracts manage tweet investments and KPIs.
2. **Frontend**: A Chrome extension that interacts with Twitter and the smart contracts.
3. **Backend (optional)**: A server (if needed) to handle additional functionalities and data storage.

### Components
- **TweetInvestment Contract**: Manages investments, sets KPI targets, and distributes rewards.
- **Chrome Extension**: Fetches tweets, allows users to invest, and updates KPIs.

## Pipeline
1. **User Interaction**: Users interact with the Chrome extension to select a tweet and make an investment.
2. **Transaction Handling**: The extension communicates with MetaMask to process transactions.
3. **KPI Update**: The extension fetches tweet metrics from the Twitter API and updates the smart contract.
4. **Reward Distribution**: If the KPI target is met, the contract distributes the invested funds back to the tweet owner.

## Model
The investment model is based on the virality of tweets measured through KPIs such as retweet counts, likes, and comments. The smart contract executes transactions based on these metrics.

## AI Technologies
- **Natural Language Processing (NLP)**: Used for analyzing tweet content and sentiment (if applicable).
- **Machine Learning**: Potential for predicting tweet performance based on historical data (if applicable).

## Versions Used
- **Node.js**: v14.x
- **npm**: v6.x
- **Truffle**: v5.0.x
- **Ganache**: v7.0.x (or latest)
- **Web3.js**: v1.6.x
- **Solidity**: v0.8.0

## Implementation Instructions

### Step 1: Install Prerequisites
Make sure you have Node.js and npm installed. Then, install Truffle and Ganache.

```bash
npm install -g truffle
##Set Up Ganache
ganache-cli
Start Ganache (either the desktop app or ganache-cli) to create a local blockchain.
```
Create a Truffle Project
Create a new directory for your project and initialize Truffle.

```bash

mkdir TweetInvestment
cd TweetInvestment
truffle init
```

Step 4: Add Smart Contract
Copy your TweetInvestment.sol contract into the contracts/ folder.

Step 5: Create Migration Script
Create a migration script in the migrations/ folder named 2_deploy_contracts.js with the following content:

```js
const TweetInvestment = artifacts.require("TweetInvestment");

module.exports = function(deployer) {
  deployer.deploy(TweetInvestment);
};
```
Step 6: Compile Contracts
Compile your contracts to ensure everything is set up correctly.

```bash
truffle compile
```
Step 7: Deploy Contracts
Deploy your contracts to the Ganache blockchain.

```bash
truffle migrate
```
Step 8: Connect MetaMask
Open MetaMask and connect it to the Ganache network (RPC URL: http://127.0.0.1:8545).
Add the Ganache accounts to MetaMask for use in transactions.

Step 9: Run the Chrome Extension
Load the Chrome extension in your browser for interaction with tweets and investments.

Step 10: Fetch KPI Data (Optional)
Implement the logic to fetch KPI data from the Twitter API and integrate it with the smart contract.

## Conclusion
This DApp allows users to invest in tweets based on their predicted performance. By utilizing Ethereum smart contracts, it aims to create a new way to engage with social media content. Feel free to explore and expand upon this project!
