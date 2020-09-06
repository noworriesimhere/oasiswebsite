const parallax = document.getElementById("parallaxPic");
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
    document.querySelector("#h4").style.opacity = opacity;
})
