window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// create an instance of speech recognition
const recognition = new SpeechRecognition();
recognition.interimResults = true; // see what we're saying as we're saying. real-time

// create paragraph
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

// once the result is finished, it's no longer listening
recognition.addEventListener('result', e => {
  // console.log(e); // find speechrecognitionresult
  // console.log(e.results); // find transcript attribute
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript) // grab the transcript atrribute in result[0]
    .join('') // turn the arrays to strings
  // console.log(transcript);

  p.textContent = transcript;
  if(e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
  if(transcript.includes('dragon')){
    console.log('🐲🐲🐲')
  }
});

// it would start listening again when it ends
recognition.addEventListener('end', recognition.start); // .start() would run a page load

recognition.start();
