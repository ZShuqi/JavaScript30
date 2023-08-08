// Get Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle'); //toggle button
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider'); //rate or volume


function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method](); // video['play'](); or video['pause']()
}

// listen to the video for whenever it is paused
function updateButton(){
  const icon = this.paused ? '►' : '❚ ❚'; // this => video, the property is called paused
  toggle.textContent = icon;
  // console.log('Update the button');
}

function skip() {
  // console.log(this.dataset);
  // console.log(this.dataset.skip); // 25, -10
  video.currentTime += parseFloat(this.dataset.skip); // parseFloat convert string to number
}

function handleRangeUpdate() {
  // console.log(this.name); // playbackRate or volume
  // console.log(this.value);
  video[this.name] = this.value;
  // video.playbackRate = 1.5; (range 0.5-2) video.volume = 0.25; (range 0-1)
}

function handleProgress() {
  // console.log(video.currentTime);
  // console.log(video.duration);
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  // console.log(e); // pointerEvent
  const srubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = srubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress); //update when video's playing

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// mousemove here: click down and move it
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
// when clicked, set flag to true
let mousedown = false; // not currently clicking
progress.addEventListener('click', scrub);
// e pass the event, because scrub function needs inital event
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
// same as following
// progress.addEventListener('mousemove', () => {
//   if(mousedown) {
//     scrub();
//   }
// });
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
