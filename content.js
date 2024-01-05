badButtonSelector = "button.btn.btn-outline-danger";
audioSelector = "audio";

function setFocusOnTextarea() {
  var textarea = document.querySelector('textarea');
  if (textarea) {
    textarea.focus();
  }
}

function sendBad() {
  var button = document.querySelector(badButtonSelector);
  button.click();
}

function toggleAudio() {
  var audio = document.querySelector(audioSelector);
  if (audio) {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  setFocusOnTextarea();
}

function rewindAudio() {
  var audio = document.querySelector(audioSelector);
  if (audio) {
      audio.currentTime -= 1;
  }
}

function forwardAudio() {
  var audio = document.querySelector(audioSelector);
  if (audio) {
      audio.currentTime += 1;
  }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.command) {
    case "sendBad":
      sendBad();
      break;
    case "toggleAudio":
      toggleAudio();
      break;
    case "rewindAudio":
        rewindAudio();
        break;
    case "forwardAudio":
        forwardAudio();
        break;
    default:
      console.log(`Command ${request.command} not found`);
  }
});

setFocusOnTextarea();
toggleAudio();
