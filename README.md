# VTModernify

This is the Github Repo for the VTModernify Google Chrome extension which modernizes the HokieSpa website.

Download the Chrome extension at: https://chrome.google.com/webstore/detail/vtmodernify/pfhhhgobgleghemlcpanblhchbmainnd

Discord invite link: https://discord.gg/QW3zypg

General structure of the application:
1. background.js: Wait for a page load and sends a message with URL
2. content.js: Listens for a message and then calls load() with the URL
3. injectHTML.js: Loads the desired content for the URL. Generally loads content from a file with new___.html or new___.js

Please create a new pull request when you want to merge to the master branch.

Also I need a logo! 