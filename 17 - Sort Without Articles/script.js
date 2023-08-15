const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName){
  // strip a/ an/ the, .trim() remove spaces after a/ an/ the
  return bandName.replace(/^(a|an|the)/i, '').trim(); // ^: start with, i: insensitive

}

const sortedBands = bands.sort((a,b) => {
  // won't modify the original data
  return strip(a) > strip(b) ? 1 : -1;
});

// easiest writing ↓
// const sortedBands = bands.sort((a,b) =>  strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML =
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');
    // without .join(''), it equals .toString, which would show comma between each element


console.log(sortedBands); // sorted it alphabetically
