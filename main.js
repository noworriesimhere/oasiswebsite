const parallax = document.getElementById("parallaxPic");
const parallax2 = document.getElementById("secondParallax");
const checkpoint = 200;
 
window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = `${offset * 0.4}px`;
    // the .6 determines the speed. If bigger than one, it'll scroll the other way.
    

    //Code below is for "scroll down" prompt
    if (offset <= checkpoint) {
      opacity = 1 - offset / checkpoint;
    } else {
      opacity = 0;
    }
    document.querySelector("h5").style.opacity = opacity;
})

//script for background image change

const nyimages1 = [
  './img/new_york/newyorktop1.jpg',
  './img/new_york/newyorktop2.jpg',
  './img/new_york/newyorktop3.jpg',
  './img/new_york/newyorktop4.jpg',
  './img/new_york/newyorktop5.jpg',
  './img/new_york/newyorktop6.jpg'
];

const nyimages2 = [
  './img/new_york/newyorkbottom1.jpg',
  './img/new_york/newyorkbottom2.jpg',
  './img/new_york/newyorkbottom3.jpg',
  './img/new_york/newyorkbottom4.jpg',
  './img/new_york/newyorkbottom5.jpg',
  './img/new_york/newyorkbottom6.jpg'
]
let index = 0;
let iterations = 0;

var updateImage = function() {
  /* reset index to zero if current index is greater than number of images.
   * increment iterations variable since it means we've done one whole loop.
   */
  if (index >= nyimages1.length) {
    index = 0;
    iterations++;
  }

  // set the background image
  parallax.style.backgroundImage = 'url(' + nyimages1[index] + ')';
  parallax2.style.backgroundImage = 'url(' + nyimages2[index] + ')';

  if (iterations >= 5) {
    clearInterval(interval);
  } else {
    /* increment current index in order to get next image
     * when this function gets called again.
     */
    index++;
  }
}

// update first image
updateImage();

// initiate timer
setInterval(updateImage, 8000);

// function fadeOutEffect(target) {
//   let fadeEffect = setInterval(function () {
//     if (!target.style.opacity) {
//       target.style.opacity = 1;
//     }
//     if (target.style.opacity > 0) {
//       target.style.opacity -= 0.1;
//     } else {
//       clearInterval(fadeEffect);
//     }
//   }, 200);
// }