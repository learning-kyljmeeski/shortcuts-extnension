chrome.commands.onCommand.addListener((command) => {
    switch (command) {
        case "sendBad":
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { command: "sendBad" });
            });
            break;
        case "toggleAudio":
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { command: "toggleAudio" });
            });
            break;
        case "rewindAudio":
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { command: "rewindAudio" });
            });
            break;
        case "forwardAudio":
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { command: "forwardAudio" });
            });
            break;
        default:
            console.log(`Command ${command} not found`);
    }
});