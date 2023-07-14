const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = seconds * 6 + 90;
  console.log(secondsDegrees);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  // if (secondsDegrees === 90) {
  //   remove the weird backward transition effect
  //   secondHand.style.removeProperty('transition');
  // } else {
  //   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  // }


  const mins = now.getMinutes();
  const minsDegrees = mins * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = hours * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000); // run setDate every second
