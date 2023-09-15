const slider = document.querySelector('.items');
let isDown = false; // flag for if user's clicking or not
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // console.log(e);
  // console.log(e.pageX); // the X coords user clicked on the page
  startX = e.pageX - slider.offsetLeft; // where user started the click
  console.log(startX);
  scrollLeft = slider.scrollLeft; // How far were the items scrolled

});

slider.addEventListener('mouseleave', () => {
  isDown = false; // when mouse up
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;  // stop the function from running
  console.count(isDown);
  e.preventDefault(); // stop from selecting text or anything else in the div
  const x = e.pageX - slider.offsetLeft;
  console.log({x, startX}); // x- startX: how far have we deviated from the start
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk; // where it was at the beginning minus how far we are scrolling
});
