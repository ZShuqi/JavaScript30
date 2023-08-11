const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkboxes); // 9 inputs

let lastChecked;

function handleCheck(e) {
  // console.log(e); // a PointerEvent when we click the checkboxes
  // lastChecked = this;
  let inBetweeen = false;  // flag
  // 1. when we click the first box, it became true
  // 2. when we hit the last box, it set to false, and it'll no longer check it

  // If the shift key is down
  // AND they are checking it
  if(e.shiftKey && this.checked) {
    // loop over every checkbox, look for the first checked box, check the next one
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      // this is the checkbox that we're clicking on!
      // lastChecked is the last checked checkbox
      if(checkbox === this || checkbox === lastChecked) {
        inBetweeen = !inBetweeen;
        console.log('Starting to check them in between!');
        console.log(inBetweeen);
      }

      if (inBetween) {
        checkbox.checked = true; // sex the checkbox to checked
      }
    })
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
