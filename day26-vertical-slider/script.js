let slideRight = document.querySelector(".column-right");
let sliderContainer = document.querySelector(".slider-container");
let slideLeft = document.querySelector(".column-left");
let buttonDown = document.querySelector(".button-down");
let buttonUp = document.querySelector(".button-up");
let slideRightLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;
slideLeft.style.transform = `translateY(-${(slideRightLength - 1) * 100}%)`;
buttonDown.addEventListener("click", moveDown);

function moveDown() {
  activeSlideIndex++;
  slideLeft.style.transform = `translateY(-${activeSlideIndex}200%)`;

  if (activeSlideIndex > slideRightLength - 1) {
    activeSlideIndex = 0;
  }
}
