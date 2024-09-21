// Example function to find tracking scripts
function findTrackers() {
    const trackingScripts = ['google-analytics.com', 'facebook.net'];
    let foundTrackers = [];
  
    document.querySelectorAll('script').forEach((script) => {
      trackingScripts.forEach((tracker) => {
        if (script.src.includes(tracker)) {
          foundTrackers.push(script.src);
        }
      });
    });
  
    if (foundTrackers.length > 0) {
      chrome.runtime.sendMessage({type: 'trackersFound', data: foundTrackers});
    }
  }
  
  // Run the script to check for trackers
  findTrackers();
  