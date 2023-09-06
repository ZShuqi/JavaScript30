const nav = document.querySelector('#main');
const topNav = nav.offsetTop; // pixels above nav bar
function fixNav() {
  // console.log(topNav, window.scrollY); //542 how much we scrolled
  if(window.scrollY >= topNav) {
    // remove the jump of padding (better to do it programatically instead of hard code in css)
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}
window.addEventListener('scroll', fixNav);
