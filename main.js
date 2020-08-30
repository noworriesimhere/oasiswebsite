const parallax = document.getElementById("parallax");

window.addEventListener("scroll", ()=>{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.9 + 'px';
    // the .6 determines the speed. If bigger than one, it'll scroll the other way.
})