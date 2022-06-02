let loveMe = document.querySelector(".love-me");
let times = document.querySelector("#times");

loveMe.addEventListener("dblclick", (e) => {
  createHeart(e);
});

function createHeart(e) {
  let heart = document.createElement("i");
  heart.classList.add("fa-solid");
  heart.classList.add("fa-heart");

  let [x, y] = [e.clientX, e.clientY];
  let [leftOffset, topOffset] = [e.target.offsetLeft, e.target.offsetTop];
  let [xInside, yInside] = [x - leftOffset, y - topOffset];

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);
  console.log(xInside, yInside);

  setTimeout(() => {
    heart.remove();
  }, 500);
}
