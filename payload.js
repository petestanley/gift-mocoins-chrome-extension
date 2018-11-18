var currentUrl = window.location.href;
if (currentUrl.includes('amazon')) {
    // Read total from Amazon
    for (const tag of document.querySelectorAll("td")) {
      if (tag.textContent.includes("Total")) {
        var value = tag.nextElementSibling;
        console.log(tag.nextElementSibling);
        var value_content = value.textContent;
        var total = parseFloat(value_content.substring(5,value_content.length));
        var nearest_dol = Math.ceil(total);
        chrome.runtime.sendMessage(parseInt((nearest_dol - total) * 100));
      }
    }
} else if(currentUrl.includes('dollarshaveclub')){
    // Read total from Dollar Shave Club
    var paymentAmount = document.querySelector('.total .currency-units').textContent +
        '.' +
        document.querySelector('.total .currency-subunits').textContent;
    chrome.runtime.sendMessage(paymentAmount);
}

