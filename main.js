const parallax = document.getElementById("parallaxPic");
const parallax2 = document.getElementById("secondParallax");
const target = document.getElementsByClassName('scroll');
const checkpoint = 200;
 
window.addEventListener("scroll", () => {
  let offset = window.scrollY;
  parallax.style.backgroundPositionY = `${offset * 0.4}px`;
  // the .6 determines the speed. If bigger than one, it'll scroll the other way.
  
  for(let i = 0; i < target.length; i++) {

    var posX = window.pageYOffset * target[i].dataset.ratex;
    var posY = window.pageYOffset * target[i].dataset.ratey;
    target[i].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';

    //Code below is for "scroll down" prompt
    if (offset <= checkpoint) {
      opacity = 1 - offset / checkpoint;
    } else {
      opacity = 0;
    }
    document.querySelector("h5").style.opacity = opacity;
  }
});

function removeCSSfade(){
  for(let i = 0; i < target.length; i++) {
    target[i].classList.remove("slide-in-top");
    target[i].classList.remove("slide-in-bottom");
  }
};

setTimeout(removeCSSfade, 3000);
