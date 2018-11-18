'use strict';

// On click of redeem button, redirect to landing page
let redeemMoCoins = document.getElementById('redeem-mocoins');
redeemMoCoins.onclick = function openLandingPage(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'window.open("http://movember.webflow.io/");'});
  });
};

// On click of donate link, redirect to donation page
let donateLink = document.getElementById('donate-link');
donateLink.onclick = function openLandingPage(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'window.open("https://ca.movember.com/get-involved/donate");'});
  });
};

// Inject the payload.js script into the current tab after the popup has loaded
window.addEventListener('load', function () {
    chrome.storage.sync.get('balance', (data) => {
        if (data.balance) {
            document.getElementById('earned-mocoins').innerText = String(data.balance) + " Mo' Coins";
            document.getElementById('donate-link').innerText = "Feel like giving back? Donate " + data.balance + " cents";
            document.getElementById('total-mocoins').innerText = String(data.balance) + " Mo' Coins";
        }
    });
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});
});

// Listen to messages from the payload.js script and write to popup.html
chrome.runtime.onMessage.addListener((paymentAmount) => {
    document.getElementById('content-1').innerText = "Thanks for making a purchase with one of Movember Foundation's proud partners!";
    document.getElementById('content-2').innerText = "You just earned:"
	document.getElementById('earned-mocoins').innerText = paymentAmount + " Mo' Coins";
	document.getElementById('donate-link').innerText = "Feel like giving back? Donate " + paymentAmount + " cents";
	chrome.storage.sync.get('balance', (data) => {
        document.getElementById('total-mocoins').innerText = String(data.balance) + " Mo' Coins";
        document.getElementById('redeem-mocoins').innerText = "Redeem Now";
    });
});
