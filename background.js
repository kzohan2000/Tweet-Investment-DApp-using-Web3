importScripts('https://cdn.jsdelivr.net/npm/web3@1.7.4/dist/web3.min.js');  // Load web3 via CDN

const web3 = new Web3(window.ethereum);  // Use MetaMask's provider
const contractABI = [ /* Add your ABI here */ ];
const contractAddress = "0xYourContractAddress";  // Deployed contract address
const tweetInvestmentContract = new web3.eth.Contract(contractABI, contractAddress);

// Function to fetch KPI from Twitter and update the smart contract
async function updateTweetKPI(tweetId, account) {
  try {
    // Fetch tweet data from Twitter API
    const response = await fetch(`https://api.twitter.com/1.1/statuses/show.json?id=${tweetId}`, {
      headers: { Authorization: `Bearer vUtwVuajJbunOW90EhGtkEPIh` }  // Add your Twitter API token
    });
    const data = await response.json();

    if (response.ok) {
      // Extract the KPI (retweet count in this case)
      const kpi = data.retweet_count;

      // Update KPI in the smart contract
      await tweetInvestmentContract.methods.updateKPI(tweetId, kpi).send({ from: account });

      console.log(`KPI for tweet ${tweetId} updated to ${kpi}`);
    } else {
      console.error("Failed to fetch KPI data from Twitter:", data);
    }
  } catch (error) {
    console.error("Error fetching tweet data:", error);
  }
}

// Listener for handling tweet investments
chrome.runtime.onMessage.addListener(async function (message, sender, sendResponse) {
  const tweetId = message.tweetId;

  try {
    // Request account access from MetaMask
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];

    // Invest in the tweet
    await tweetInvestmentContract.methods.investInTweet(tweetId).send({
      from: account,
      value: web3.utils.toWei('0.01', 'ether')  // Investment amount in Ether
    });

    // After investing, fetch and update the KPI
    await updateTweetKPI(tweetId, account);

    sendResponse({ success: true, message: 'Investment and KPI update successful' });

  } catch (error) {
    console.error("Investment or KPI update failed:", error);
    sendResponse({ success: false, message: 'Investment or KPI update failed', error: error });
  }

  // Return true to indicate that the response is asynchronous
  return true;
});
