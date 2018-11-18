// send the page title as a chrome message
// send the page title as a chrome message

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


//chrome.runtime.sendMessage(document.title);