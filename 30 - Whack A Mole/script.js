const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole; // we don't want the same mole coming from the same hole in 2 times
let timeUp = false;
let score = 0;

// random milliseconds
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  // console.log(holes);
  // Nodelist that contains 6 holes nodes // holes.length = 6
  const idx = Math.floor(Math.random() * holes.length); // random index
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log('Ah nah thats the same one bud');
    return randomHole(holes); // return the hole from running the function again!
  }
  lastHole = hole;
  return hole;
}

// mole poping up
function peep() {
  const time = randomTime(200, 1000); // get a random time
  const hole = randomHole(holes); // choose a random hole
  // console.log({time, hole});
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 15000); // 15 seconds
}

function bonk(e) {
  // make sure the click is from the user!
  if(!e.isTrusted) return; // cheater! (fake the click with some methods)
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

// if the mole is clicked, let the mole down
moles.forEach(mole => mole.addEventListener('click', bonk));
