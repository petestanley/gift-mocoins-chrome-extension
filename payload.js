// send the page title as a chrome message
for (const tag of document.querySelector(".total")) {
  if (tag.textContent.includes("Total")) {
    var value = tag.nextElementSibling;
    console.log(tag.nextElementSibling);
    chrome.runtime.sendMessage(value.textContent);
  }
}

// Read total from Dollar Shave Club
var paymentAmount = document.querySelector('.total .currency-units').textContent +
    '.' +
    document.querySelector('.total .currency-subunits').textContent;
chrome.runtime.sendMessage(paymentAmount);
