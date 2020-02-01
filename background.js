//checks when the user reloads the tab and sends a message to the content

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    if (changeInfo.status == "complete") {
        chrome.tabs.query({"currentWindow": true, "active" : true}, function (selected) {
            chrome.tabs.sendMessage(tab.id, selected[0].url);
        });
    }
});