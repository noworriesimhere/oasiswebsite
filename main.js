const parallax = document.getElementById("parallax");

window.addEventListener("scroll", ()=>{
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = `${offset * 0.7}px`;
    // the .6 determines the speed. If bigger than one, it'll scroll the other way.

})