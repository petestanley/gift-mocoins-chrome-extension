function convertToMoCoins(amount) {
  var floatAmount = parseFloat(amount);
  var nearestDollar = Math.ceil(floatAmount);
  var mocoins = parseInt((nearestDollar - floatAmount)*100);
  return mocoins === 0 ? 100 : mocoins;
}

var currentUrl = window.location.href;

if (currentUrl.includes('amazon')) {
    // Read total from Amazon
    var paymentAmount = document.querySelector("td.grand-total-price strong").textContent;
    paymentAmount = paymentAmount.substring(5, paymentAmount.length);
    paymentAmount = convertToMoCoins(paymentAmount);
}

else if(currentUrl.includes('dollarshaveclub')) {
    // Read total from Dollar Shave Club
    var paymentAmount = document.querySelector('.total .currency-units').textContent +
        '.' +
        document.querySelector('.total .currency-subunits').textContent;
    paymentAmount = convertToMoCoins(paymentAmount);

}

chrome.runtime.sendMessage(paymentAmount);
