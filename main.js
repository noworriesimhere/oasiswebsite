const sections    = document.querySelectorAll(".breakpoints"),
      parallax    = document.getElementById("parallaxPic"),
      target      = document.getElementsByClassName('scroll'),
      checkpoint  = 200,
      image      = document.querySelector(".background"),
      navbar      = document.querySelector(".navbar"),
      options     = {
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

const backgroundArray = [
  "./img/new_york/newyorktop1.jpg",
  "./img/new_york/newyorktop2.jpg",
  "./img/new_york/newyorktop3.jpg",
  "./img/new_york/newyorktop4.jpg",
  "./img/new_york/newyorktop5.jpg",
  "./img/new_york/newyorktop6.jpg",
  "./img/new_york/newyorktop7.jpg",
  "./img/new_york/newyorktop8.jpg",
]

function randomImage() {
  image.src = backgroundArray[Math.floor(Math.random() * backgroundArray.length)];
};

function fadeOut() {
  image.style.opacity = .05;
}

function fadeIn() {
    image.style.opacity = 1;
}

function workYoMagic() {
  fadeOut();
  setTimeout(randomImage, 200);
  setTimeout(fadeIn, 400);
}

const observePic = new IntersectionObserver((entry, observePic) => {
  if (!entry.isIntersecting) {
    workYoMagic();
  };
}, options)

sections.forEach(section => {
  observePic.observe(section);
})

