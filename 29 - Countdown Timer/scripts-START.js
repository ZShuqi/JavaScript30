let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) { // Count down how many seconds
  // clear any existing timers!!
  clearInterval(countdown); // release the countdown variable

  const now = Date.now(); // current timestamp in milliseconds
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  // run the function inside every 1000ms, display the amount of time left
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if it's negative
    if(secondsLeft < 0) {
      clearInterval(countdown); // release the countdown variable
      return;
    }
    //display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

// convert it to minutes and seconds (or hours)
function displayTimeLeft(seconds) {
  // console.log(seconds);
  const minutes = Math.floor(seconds / 60); // grab the lower floor
  const remainderSeconds = seconds % 60;
  console.log({minutes, remainderSeconds});
  // show variable in <h1> tag
  const display = `${minutes}:${remainderSeconds <10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
  document.title = display; // title of the page
}

// A break
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  // const adjustedHour = hour > 12 ? hour - 12 : hour; // for 12-hour display
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  // console.log(this.dataset); // an object with time
  // console.log(this.dataset.time); // a string!
  const seconds = parseInt(this.dataset.time);
  console.log(seconds);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
  document.customForm.addEventListener('submit', function(e) {
    e.preventDefault(); // stop the page from reloading!
    const mins = this.minutes.value;
    // console.log(mins);
    timer(mins * 60);
    this.reset(); // clear the value in the form
});
