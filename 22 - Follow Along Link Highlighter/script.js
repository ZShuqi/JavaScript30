const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
// append to the bottom of the body
document.body.append(highlight);

function highlightLink() {
  console.log('Highlight!!');
  // get info about the place/size of the element in the page
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

}

// hear every link
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))
