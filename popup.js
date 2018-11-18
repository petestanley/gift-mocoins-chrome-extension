// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

//let changeColor = document.getElementById('changeColor');
//
//chrome.storage.sync.get('color', function(data) {
//  changeColor.style.backgroundColor = data.color;
//  changeColor.setAttribute('value', data.color);
//});
//
//changeColor.onclick = function(element) {
//  let color = element.target.value;
//  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//    chrome.tabs.executeScript(
//        tabs[0].id,
//        {code: 'document.body.style.backgroundColor = "' + color + '";'});
//  });
//};


// create a sticky header when content is scrolled
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// Inject the payload.js script into the current tab after the popup has loaded
window.addEventListener('load', function () {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener((paymentAmount) => {
	document.getElementById('mocoins').innerText = paymentAmount;
});
