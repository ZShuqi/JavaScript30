function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  // console.log(e);
  // console.count(e); // how many times does it run
  // console.log(window.scrollY); // How much you've scolled down
  sliderImages.forEach(sliderImage => {
    // (window.scrollY + window.innerHeight): where we are at the bottom of the window
    // middle of the image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    // console.log(slideInAt);
    // Image.offsetTop: how far it's from the top of the window
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if(isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    }else {
      sliderImage.classList.remove('active');
    }
  });
}

// run the function checkSlide once every 20 milliseconds
window.addEventListener('scroll', debounce(checkSlide));
