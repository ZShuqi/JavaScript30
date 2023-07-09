window.addEventListener('keydown', function (e) { // run the function when keydown
  // console.log(e.key); // a, b, c ...
  // console.log(e.keyCode); // 70,65 ... keyCode is deprecated
  const audio = document.querySelector(`audio[data-key="${e.key.toLowerCase()}"]`);
  const key = document.querySelector(`.key[data-key="${e.key.toLowerCase()}"]`); // select .key class
  if (audio) {
    audio.currentTime = 0; // rewind to the start of the audio
    audio.play();
    key.classList.add('playing');
  }
});

// listen to "transition end" event
const keys = document.querySelectorAll('.key'); // listen on all the keys
// loop through each key, when the transition ends, we remove it
// run the "removeTransition" function when it detects "transitionend" event
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

function removeTransition(e) {
  console.log(e); // press each key, get 6 transition end events because all property has transitioned
  // we only want one longest transition end event, which takes .07s
  // (in this exercise it's all .07s so just pick one)
  if(e.propertyName !== 'box-shadow') return; // skip it if it's not "box-shadow" property
    // console.log(this); // this is the key (in line 22: key.addEventListener)
    this.classList.remove('playing');
}
