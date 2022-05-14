const buttonLeft = document.querySelector(".arrow-left");
const buttonRight = document.querySelector(".arrow-right");
const body = document.body;
const slides = document.querySelectorAll(".slide");

let activeSlide = 0;

setBodyBG();

buttonRight.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setActiveSlide();
  setBodyBG();
});

buttonLeft.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setActiveSlide();
  setBodyBG();
});

function setBodyBG() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    slides[activeSlide].classList.add("active");
  });
}
