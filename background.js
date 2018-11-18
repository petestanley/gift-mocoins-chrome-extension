'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.amazon.ca'}
      }),
      new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'ca.dollarshaveclub.com'}
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
