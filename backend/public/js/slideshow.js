const main = document.querySelector("#mainSection");
const slideshow = document.querySelector(".slideshow");
const buttons = document.querySelector("#buttonSection");

const btn1 = document.createElement('a');
btn1.classList.add("prev");
const sLeft = document.createElement("i");
sLeft.textContent = "<" ;
slideshow.appendChild(btn1);
btn1.appendChild(sLeft);
const btn2 = document.createElement('a')
btn2.classList.add("next");
const sRight = document.createElement('i');
sRight.textContent = ">";
slideshow.appendChild(btn2);
btn2.appendChild(sRight);

const dot1 = document.createElement('span');
dot1.classList.add("dot");
buttons.appendChild(dot1);
const dot2 = document.createElement('span');
dot2.classList.add("dot");
buttons.appendChild(dot2);
const dot3 = document.createElement('span');
dot3.classList.add("dot");
buttons.appendChild(dot3);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(x) {
  showSlides(slideIndex += x);
}

function currentSlide(x) {
  showSlides(slideIndex = x);
}

function showSlides(x) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (x > slides.length) {slideIndex = 1}
  if (x < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


sLeft.addEventListener('click', function () {
    plusSlides(-1);
});

sRight.addEventListener('click', function () {
    plusSlides(1);
});