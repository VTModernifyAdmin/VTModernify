
//listens for a message from the background and calls the load function in the injectHTML.js file

chrome.runtime.onMessage.addListener(function (message) {
	load(message);
});
