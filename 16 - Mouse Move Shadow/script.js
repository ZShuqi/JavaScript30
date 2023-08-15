const hero = document.querySelector('.hero'); // screen div
const text = hero.querySelector('h1');
const walk = 70; // 70px

function shadow(e) {
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;
  // same as ↓, destructure that right off the hero element
  const { offsetWidth: width, offsetHeight: height } = hero;
  // console.log(width, height); // screen size
  // let x = e.offsetX
  // let y = e.offsetY
  // same as ↓, take offsetX,Y off of the event
  let { offsetX: x, offsetY: y } = e;
  // but it would give as the actual element(parent/ child) that we hovered
  // console.log(x,y); // is not consistent when the mouse moves within h1

  // we need x, y to be consistent
  // console.log(this); // this is always hero, what we listened on
  // console.log(e.target); // the event we triggered, might be hero or h1 inside it
  // console.log(e.target.offsetLeft, e.target.offsetTop); // 144, 340 when mouse moved in
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  console.log(x,y); // now is consistent,(0,0) -> screen size

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 green`;
}

hero.addEventListener('mousemove', shadow);
