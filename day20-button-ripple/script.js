let button = document.querySelector("#click-me");
button.addEventListener("click", function (e) {
  let x = e.clientX;
  let y = e.clientY;

  console.log(x, y);
  let buttonTop = e.target.offsetTop;
  let buttonLeft = e.target.offsetLeft;
  console.log(buttonTop, buttonLeft);

  let xInside = x - buttonLeft;
  let yInside = y - buttonTop;

  let circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = yInside + "px";
  circle.style.left = xInside + "px";

  this.appendChild(circle);
});
