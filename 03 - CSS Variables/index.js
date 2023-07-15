const inputs = document.querySelectorAll('.controls input'); // NodeList, not array

function handleUpdate() {
  // console.log(this.value); // value of the bar
  // console.log(this.dataset); // data of data-something
  const suffix = this.dataset.sizing;
  // console.log(this.name); // blur, spacing, base
  if(suffix === undefined){
    // console.log("undefined!!");
    document.documentElement.style.setProperty(`--${this.name}`, this.value); // or it would be #ffc600undefined
  } else{
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // $ in back text
  }
}

// listen to change event
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
