const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

speed.addEventListener('mousemove', function(e) {
  // console.log(e);
  const y = e.pageY - this.offsetTop; // y coords of the top of the bar
  // console.log(y); // top: 0, bottom: around 410
  const percent = y / this.offsetHeight; // length of the bar:
  const min = 0.4;
  const max = 4; // speed
  const height = Math.round(percent * 100) + '%';
  console.log(height); // percentage of the bar
  const playbackRate = percent * (max - min) + min; // rate from 0.4 to 4
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(1) + 'x'; // get 1 decimal place
  console.log(playbackRate);
  video.playbackRate = playbackRate;
})
