// const timeNodes = document.querySelectorAll('[data-time]'); // attribute
// console.log(timeNodes); // NodeList[58], not an array
// we need to turn it to an array, then time strings

// const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const timeNodes = [...document.querySelectorAll('[data-time]')];

console.log(timeNodes);
const seconds = timeNodes
  .map(node => node.dataset.time) // seconds = array of 58 strings
  .map(timeCode => { // from above array, map and turn each of them into seconds
    // const [mins, secs] = timeCode.split(':');
    // console.log(mins, secs); // strings
    const [mins, secs] = timeCode.split(':').map(parseFloat); // convert to numbers
    console.log(mins * 60 + secs);
    return (mins * 60 + secs);
  })
  .reduce((total, vidseconds) => total + vidseconds);
  // .reduce((total, vidseconds) => {
    // return total + vidseconds;
  // });

let secondsLeft = seconds;
// const hours = secondsLeft / 3600; // 4.982777...
const hours = Math.floor(secondsLeft / 3600); // xx hours
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60); // xx mins
secondsLeft = secondsLeft % 60; // xx seconds
