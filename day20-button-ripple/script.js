let button = document.querySelector("#click-me");
button.addEventListener("click", (e) => {
  createRipple(e);
});

function createRipple(e) {
  console.log(button.clientWidth);
  let newCircle = document.createElement("span");
  let diameter = Math.max(button.clientWidth, button.clientHeight);
  let radius = diameter / 2;
  newCircle.style.width = newCircle.style.height = `${diameter}px`;
  newCircle.style.left = `${e.clientX - (button.offsetLeft + radius)}px`;
  newCircle.style.top = `${e.clientY - (button.offsetTop + radius)}px`;
  newCircle.classList.add("circle");
  button.appendChild(newCircle);
}
