'use strict';

//const movemberFacts = [
//    "1 in 7 men will be diagnosed with prostate cancer. 1 in 8 women will be diagnosed with breast cancer.",
//    "Over 6 million men are diagnosed with depression each year.",
//    "A new case of prostate cancer is diagnosed every 2.2 minutes.",
//    "70% of men either never have or don’t regularly check their nuts.",
//    "The Movember Foundation has always been holistically men’s health, but we focus on three areas that we know need the most work: Prostate Cancer, Testicular Cancer and Mental health - focused on suicide prevention",
//    "Testicular cancer rates have doubled over the last 50 years.",
//    "If you catch prostate cancer early - when the cancer is still isolated just to the prostate - there is a 98% chance of survival (98%!!!).",
//    "For Canadian men between the ages of 15-44, suicide is the leading cause of death. Globally, a man dies by suicide every minute."
//];


// On click of redeem button, redirect to landing page
let redeemMoCoins = document.getElementById('redeem-mocoins');
redeemMoCoins.onclick = function openLandingPage(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'window.open("https://kayalash.github.io/");'});
  });
};

// On click of donate link, redirect to donation page
let donateLink = document.getElementById('donate-link');
donateLink.onclick = function openLandingPage(element) {
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
//            var showFact = movemberFacts[Math.floor(Math.random() * Math.floor(8))];
//            document.getElementById('content-1').innerText = showFact;
            document.getElementById('earned-mocoins').innerText = data.balance ? String(data.balance) + " Mo' Coins" : "0 Mo' Coins";;
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
