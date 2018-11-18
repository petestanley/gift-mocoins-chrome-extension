'use strict';

let redeemMoCoins = document.getElementById('redeemMoCoins');
redeemMoCoins.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'window.open("http://movember.webflow.io/");'});
  });
};

// Inject the payload.js script into the current tab after the popup has loaded
window.addEventListener('load', function () {
    chrome.storage.sync.get('balance', (data) => {
        if (data.balance) {
            document.getElementById('total-mocoins').innerText = String(data.balance) + " Mo' Coins";
        }
    });
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});
});

// Listen to messages from the payload.js script and write to popup.html
chrome.runtime.onMessage.addListener((paymentAmount) => {
	document.getElementById('earned-mocoins').innerText = paymentAmount + " Mo' Coins";
	chrome.storage.sync.get('balance', (data) => {
        document.getElementById('total-mocoins').innerText = String(data.balance) + " Mo' Coins";
    });
});
