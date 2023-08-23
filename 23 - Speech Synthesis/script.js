const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();
  console.log(voices);
  // loop over speech voices and set them as options in the drop down
  const voiceOptions = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
  voicesDropdown.innerHTML = voiceOptions;
}

// change voice when we choose voice from drop down
function setVoice() {
  console.log(this.value); // currently selected voice name
  // loop over each voice, find the one where its name attribute is the same as
  // the option that's currently selected
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle(); // stop it and start it again in new selected voice
}

// change voice/ rate/ pitch
// set a flag startOver
function toggle(startOver = true) {
  // cancel anything that's currently speaking
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

// set rate, pitch
function setOption() {
  console.log(this.name, this.value); // rate 0.3  pitch 0.4 ...
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
// options => [input, input, textarea]
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));
// or this way
// stopButton.addEventListener('click', function() {
//   toggle(false);
// });
