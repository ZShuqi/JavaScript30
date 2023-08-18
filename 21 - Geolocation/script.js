const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

// watchPosition gives frequent updates, giveCurrentPosition just gives us one
// success callback (user gave permission of location)
navigator.geolocation.watchPosition((data) => {
  console.log(data); // accuracy, lat, longi, etc.
  speed.textContent = data.coords.speed; // or Math.round(data.coords.speed)
  // css transform; ${} number of degrees relative of north
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  console.err(err);
  alert('Need permission of location!');
});
