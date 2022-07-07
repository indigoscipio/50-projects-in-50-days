let imageContainer = document.querySelector(".image-container");
let images = document.querySelectorAll("img");
let btnPrev = document.querySelector(".prev");
let btnNext = document.querySelector(".next");

let idx = 0;
let interval = setInterval(autoPlay, 2000);

function autoPlay() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > images.length - 1) {
    idx = 0;
    console.log(idx);
  } else if (idx < 0) {
    idx = images.length - 1;
    console.log(idx);
  }
  imageContainer.style.transform = `translateX(${idx * -500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(autoPlay, 2000);
}

btnPrev.addEventListener("click", () => {
  idx--;

  changeImage();
  resetInterval();
});

btnNext.addEventListener("click", () => {
  idx++;

  changeImage();
  resetInterval();
});
