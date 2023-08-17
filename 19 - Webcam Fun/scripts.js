const video = document.querySelector('.player'); // webcam
const canvas = document.querySelector('.photo'); // 16ms, take snapshot
const ctx = canvas.getContext('2d'); // canvas context
const strip = document.querySelector('.strip'); //
const snap = document.querySelector('.snap'); // sound

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream);
      // enabling live video, convert media stream into sth the video player can understand
      // The following has been depreceated by major browsers as of Chrome and Firefox.
      // video.src = window.URL.createObjectURL(localMediaStream);

      video.srcObject = localMediaStream;
      video.play(); // or it would show only one frame
    })
    .catch(err => {
      console.error(`OH NO!!!`, err);
    })
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  console.log(width, height);
  canvas.width = width;
  canvas.height = height;

  // every 16 ms, add filter on pixels
  return setInterval(() => {
    // paint the video right to the canvas. Start at top left
    ctx.drawImage(video, 0, 0, width, height);
    // use let bcuz we need to reasign the pixels to add effects
    // take pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // console.log(pixels); // pixels is ImageData type
    // add effects
    // pixels = redEffect(pixels);
    // pixels = rgbSplit(pixels);
    pixels = greenScreen(pixels);
    // ctx.globalAlpha = 0.1; // ghosting effect
    // put the pixels back
    ctx.putImageData(pixels, 0, 0);
    // debugger;
  }, 16); // 16 milliseconds
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play(); // play the audio

  // take data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  // console.log(data); // We get Base64 text-based image
  // create an link and image to put it into out strip
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  // link.textContent = 'Download Image'; // get a link to download it
  link.innerHTML = `<img src="${data}" alt="Gorgeous woman" />`;
  strip.insertBefore(link, strip.firsChild);
}

// loop through each pixel
function redEffect(pixels) {
  // each 4 values represent rgba in a pixel
  // pixels.data is an array
  for(let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] = pixels.data[i] + 100; // red
    pixels.data[i + 1] = pixels.data[i + 1] - 50;  // green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5;  //blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  // each 4 values represent rgba in a pixel
  // pixels.data is an array
  for(let i = 0; i < pixels.data.length; i += 4) {
    // take 150 pixels back to be the current pixel
    pixels.data[i - 150] = pixels.data[i]; // red
    pixels.data[i + 100] = pixels.data[i + 1];  // green
    pixels.data[i - 150] = pixels.data[i + 2];  //blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {}; // min and max green

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  console.log(levels);

  // loop through each pixel
  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out! (set the alpha to 0, totally transparent)
      pixels.data[i + 3] = 0;
    }
  }
  return pixels;
}

getVideo(); // would need user to Allow using camera

// once video is played, it will emit an event called canplay
video.addEventListener('canplay',paintToCanvas);
