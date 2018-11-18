'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'www.amazon.ca', pathContains: 'buy'}
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'ca.dollarshaveclub.com', pathContains: 'billing'}
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'movember.webflow.io'}
          })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
