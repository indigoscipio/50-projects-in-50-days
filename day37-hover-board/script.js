let container = document.querySelector("#container");
let squares = 400;
let colors = ["#e74c6c", "#8e44ad", "#3847db"];

for (let i = 0; i < squares; i++) {
  let square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.append(square);
}
function setColor(element) {
  let color = getRandomColor();
  element.style.background = color;
  console.log(element);
}

function removeColor(element) {
  console.log(element);
  element.style.background = `rgb(60, 60, 60)`;
}
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
