// CanvasRenderingContext2D: globalCompositeOperation property
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); // ask for the 2d context
// const toolbar = canvas.querySelector('#toolbar');
// or: const toolbar = canvas.getElementById('toolbar');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round'; // end of the line should be round
ctx.lineCap = 'round'; // look up on MDN

// flag: when click down set it to true, click off/ let go, set it to false
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if(!isDrawing) return; // if not moused down, stop the function
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();
  // stroke start from
  ctx.moveTo(lastX, lastY);
  // stroke go to
  ctx.lineTo(e.offsetX, e.offsetY); //from the event
  ctx.stroke(); // showing the line
  // update lastX, lastY
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// toolbar.addEventListener('click', e => {
//   if (e.target.id === 'clear') {
//     ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the whole canvas (to white)
//   }
// });

// toolbar.addEventListener('change', e => {
//   if(e.target.id === 'stroke') {
//     console.log(e.target.value);
//     ctx.strokeStyle = e.target.value;
//   }
// });



canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  // update lastX, lastY, rather than starting from the last ending point
  [lastX, lastY] = [e.offsetX, e.offsetY];});

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false); // no longer drawing
