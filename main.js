const parallax = document.getElementById("parallax");
const parallax2 = document.getElementById("div3");
const parallax3 = document.getElementById("div5");

window.addEventListener("scroll", ()=>{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = `${offset * 0.01}em`;
    // the .6 determines the speed. If bigger than one, it'll scroll the other way.
    parallax2.style.backgroundPositionY = `${offset * -0.055}em`;
    parallax3.style.backgroundPositionY = `${offset * -0.42}px`;
})