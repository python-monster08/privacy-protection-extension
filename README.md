
# Privacy Protection Browser Extension

## Overview

The **Privacy Protection Browser Extension** is designed to enhance user privacy by blocking ads, trackers, and third-party cookies. It notifies users when these elements are blocked and provides a simple interface to toggle blocking and view statistics.

## Features

- **Ad and Tracker Blocking**: Blocks specific ad and tracking domains using the Chrome Declarative Net Request API.
- **Cookie Blocking**: Optionally blocks third-party cookies to improve privacy.
- **Popup UI**: A simple popup that allows users to toggle ad and tracker blocking, and view statistics.
- **Notifications**: Alerts users when a tracker or ad is blocked.

## Project Structure

```
privacy-protection-extension/
├── manifest.json         # Main configuration file
├── background.js         # Background service worker
├── rules.json            # URL blocking rules for ads and trackers
├── popup/
│   ├── popup.html        # Popup interface HTML
│   ├── popup.js          # Popup interface JavaScript
│   └── popup.css         # Popup interface CSS
├── icons/                # Icons used for the extension
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
```

## Installation Instructions

1. **Download the Extension Files**: 
   Ensure all the files (as shown in the directory structure) are in the correct folder.

2. **Load the Extension in Chrome**:
   1. Open **Google Chrome**.
   2. Navigate to `chrome://extensions/`.
   3. Enable **Developer Mode** by toggling the switch in the top-right corner.
   4. Click **Load unpacked** and select the project folder containing the extension files.
   5. The extension should now appear in the list with the correct icon.

3. **Test the Extension**:
   Once the extension is loaded, visit websites with ads or trackers to test if they are blocked. 
   Click on the extension icon in the toolbar to interact with the popup interface.

## Code Explanation

### 1. `manifest.json`
Defines permissions, background scripts, icons, and the declarative network request rules used to block trackers. The key permissions include:
- **Declarative Net Request**: Blocks network requests for specified domains.
- **Storage**: Allows user settings to be stored, such as enabling or disabling blocking.
- **Notifications**: Sends notifications to the user when trackers are blocked.

### 2. `rules.json`
This file contains the blocking rules for specific URLs. Example rules block requests to `doubleclick.net`, `google-analytics.com`, and `facebook.com`.

### 3. `background.js`
Handles lifecycle events for the extension. When the extension is installed, the background script logs a message indicating the extension has been successfully installed.

### 4. Popup Interface
The popup interface (`popup.html`, `popup.js`, and `popup.css`) provides a simple UI where users can toggle ad blocking and view statistics.

## Testing the Extension

1. **Popup Test**:
   Click on the extension icon in the toolbar to bring up the popup. Use the buttons to enable or disable blocking and view stats.

2. **Blocking Test**:
   Visit a website with trackers (e.g., Google Analytics, DoubleClick) and verify that the resources are blocked. Use the **Developer Console** (`F12`) to view blocked requests.

## Future Enhancements

- **Custom URL Blocking**: Allow users to input custom URLs they wish to block.
- **Ad Statistics**: Provide users with detailed statistics about how many ads and trackers have been blocked over time.
- **Whitelist/Blacklist Management**: Allow users to create a whitelist or blacklist of websites.

## License

This project is licensed under the MIT License.
