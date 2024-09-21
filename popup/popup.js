document.getElementById('toggleBlock').addEventListener('click', () => {
    chrome.storage.sync.get('blockEnabled', (data) => {
      const newSetting = !data.blockEnabled;
      chrome.storage.sync.set({ blockEnabled: newSetting }, () => {
        alert(`Blocking ${newSetting ? 'Enabled' : 'Disabled'}`);
      });
    });
  });
  
  document.getElementById('viewStats').addEventListener('click', () => {
    chrome.storage.sync.get('blockStats', (data) => {
      alert(`Ads Blocked: ${data.blockStats?.ads || 0}, Trackers Blocked: ${data.blockStats?.trackers || 0}`);
    });
  });
  