// popup.js
document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded before binding events
  
    // Retrieve current rewindInterval from Chrome storage and update the input field
    chrome.storage.sync.get(['rewindInterval'], function(result) {
      var rewindInput = document.getElementById('rewindInput');
      rewindInput.value = result.rewindInterval || 1; // Set default value to 1 if not present
    });
  
    var setRewindButton = document.getElementById('setRewindButton');
    setRewindButton.addEventListener('click', setRewindInterval);
  });
  
  function setRewindInterval() {
    var rewindInput = document.getElementById('rewindInput');
    var newInterval = parseInt(rewindInput.value);
  
    // Save the new interval to Chrome storage
    chrome.storage.sync.set({ 'rewindInterval': newInterval }, function() {
        // Notify the background script about the change
        chrome.runtime.sendMessage({ command: 'updateRewindInterval', rewindInterval: newInterval });
    });
  
    // Close the popup
    window.close();
  }
  