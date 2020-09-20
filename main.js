const sections = document.querySelectorAll(".section"),
      parallax = document.getElementById("parallaxPic"),
      target = document.getElementsByClassName('scroll'),
      checkpoint = 200,
      images = document.querySelectorAll(".background"),
      navbar = document.querySelector(".navbar"),
      options = {
                rootMargin: "0px 0px -95%"
                };

function setScroll() {
  let offset = window.scrollY;

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
};

window.addEventListener("scroll", setScroll);

function removeCSSfade(){
  for(let i = 0; i < target.length; i++) {
    target[i].classList.remove("slide-in-top");
    target[i].classList.remove("slide-in-bottom");
  }
};

setTimeout(removeCSSfade, 2100);

const observePic = new IntersectionObserver(function(entry, observePic) {
  if (!entry.isIntersecting) {
      images.forEach(image => {
        image.classList.remove("visible");
      });
      images[Math.floor(Math.random() * 8)].classList.add("visible");
  };
}, options)

sections.forEach(section => {
  observePic.observe(section);
})

