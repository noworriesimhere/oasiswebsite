const parallax = document.getElementById("parallaxPic"),
      parallax2 = document.getElementById("secondParallax"),
      target = document.getElementsByClassName('scroll'),
      checkpoint = 200,
      options = {};

function setScroll() {
  let offset = window.scrollY;
  parallax.style.backgroundPositionY = `${offset * 0.7}px`;
  // the .6 determines the speed. If bigger than one, it'll scroll the other way.

  //Code below is for "scroll down" prompt
  if (offset <= checkpoint) {
    opacity = 1 - offset / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector("h5").style.opacity = opacity;
  
  //make parallax effect for site header
  for(let i = 0; i < target.length; i++) {
    var posX = window.pageYOffset * target[i].dataset.ratex;
    var posY = window.pageYOffset * target[i].dataset.ratey;
    target[i].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
  }

}

function removeCSSfade(){
  for(let i = 0; i < target.length; i++) {
    target[i].classList.remove("slide-in-top");
    target[i].classList.remove("slide-in-bottom");
  }
};

setTimeout(removeCSSfade, 2100);



const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        window.addEventListener("scroll", setScroll);
      } else {
        window.removeEventListener("scroll", setScroll);
      }
      console.log(entry);
    })
}, options);


observer.observe(parallax);
