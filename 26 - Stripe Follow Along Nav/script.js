const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  // console.log('ENTER!');
  // this => trigger, list item
  this.classList.add('trigger-enter');
  // need to use => arrow function, instead of normal function: function()
  setTimeout(() => this.classList.add('trigger-enter-active'), 150);
  background.classList.add('open');

  // need to find the specific dropdown
  // this => list => has 3 divs with dropdown class
  const dropdown = this.querySelector('.dropdown');
  //  console.log(dropdown);
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  // console.log(dropdownCoords);
  // console.log(navCoords);

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    // need to offset them with coords or nav
    // hardest part! 
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  // give the white background block a width and a height
  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
  background.style.setProperty('height', `${coords.height}px`);

}

function handleLeave() {
  // console.log('LEAVE!');
  this.classList.remove('trigger-enter','trigger-enter-active');
  background.classList.remove('open');


}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));

triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
