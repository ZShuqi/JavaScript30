const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value); // would get three, two, one, bcuz it was contained in 3 divs
  e.stopPropagation();
}

// divs.forEach(div => div.addEventListener('click', logText));

divs.forEach(div => div.addEventListener('click', logText, {
  capture: true // third argument, function won't run on bubble up, only run on capture down
  // once: true // listen for click and unbind itself, won't rerun again
}));
