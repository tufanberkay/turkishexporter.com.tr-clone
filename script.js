let login = document.getElementById('login');
let loginbar = document.getElementById('login-bar');

login.addEventListener('mouseenter', e => {
    loginbar.style.visibility = "visible";
})

login.addEventListener('mouseleave', e => {
    loginbar.style.visibility = "hidden";
})


let lang = document.getElementById('lang');
let langbar = document.getElementById('lang-bar');

lang.addEventListener('mouseenter', e => {
    langbar.style.visibility = "visible";
})

lang.addEventListener('mouseleave', e => {
    langbar.style.visibility = "hidden";
})


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

let process1 = document.getElementById('process1');
let process2 = document.getElementById('process2');
let process3 = document.getElementById('process3');
let tabepane1 = document.getElementById('tabe-pane1');
let tabepane2 = document.getElementById('tabe-pane2');
let tabepane3 = document.getElementById('tabe-pane3');
let next1 = document.getElementById('next1');
let prev2 = document.getElementById('prev2');
let next2 = document.getElementById('next2');
let prev3 = document.getElementById('prev3');

let process = [process1, process2, process3]
let btn = [next1, prev2, next2, prev3]


process.forEach(p => {
  p.onclick = function() {changeClass()};


  function changeClass() {
    process.forEach(p => {
      if(p.classList.contains("active-box")) {
        p.classList.remove("active-box")
      };
    });
    p.classList.add("active-box")

    if (process1.classList.contains("active-box")) {
      tabepane1.classList.add("active");
    }else {
      tabepane1.classList.remove("active");
    }
    if (process2.classList.contains("active-box")) {
      tabepane2.classList.add("active");
    }else {
      tabepane2.classList.remove("active");
    }
    if (process3.classList.contains("active-box")) {
      tabepane3.classList.add("active")
    }else {
      tabepane3.classList.remove("active");
    }
  }
});



const swiper = new Swiper('.swiper.one', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  slidesPerView: 2,
  mousewheel: true,
  spaceBetween: 15,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination.one',
  },
});

var swiper2 = new Swiper(".mySwiper.two", {
  slidesPerView: 4,
  spaceBetween: 32,
  mousewheel: true,
});


const menu = document.querySelector(".mobile-header");


function myFunction() {
  if (menu.style.display === "block") {
    menu.style.display = "none"
  } else {
    menu.style.display = "block"
  }
}


let loginbar1 = document.getElementById('login-bar2');

function clickfunc() {
  if (loginbar1.style.visibility === "visible") {
    loginbar1.style.visibility = "hidden"
  } else {
    loginbar1.style.visibility = "visible"
  }
}