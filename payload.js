// send the page title as a chrome message
// send the page title as a chrome message
for (const tag of document.querySelectorAll("td")) {
  if (tag.textContent.includes("Total")) {
    var value = tag.nextElementSibling;
    console.log(tag.nextElementSibling);
    chrome.runtime.sendMessage(value.textContent);
  }
}

//chrome.runtime.sendMessage(document.title);