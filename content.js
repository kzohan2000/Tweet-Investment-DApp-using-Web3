document.addEventListener('DOMContentLoaded', function () {
    // Try grabbing the tweet ID from the URL or from a specific data attribute
    let tweetElement = document.querySelector('[data-testid="tweet"]');
    let tweetId = tweetElement ? tweetElement.getAttribute('data-tweet-id') : null;
  
    if (!tweetId) {
      console.error('Unable to find tweet ID');
      return;
    }
  
    // Add invest button logic
    let investButton = document.getElementById('investButton');
    if (investButton) {
      investButton.addEventListener('click', function () {
        chrome.runtime.sendMessage({ tweetId: tweetId });
      });
    } else {
      console.error('Invest button not found');
    }
  });
  