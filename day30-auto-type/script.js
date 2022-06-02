let title = document.querySelector(".title");
let typeSpeed = document.querySelector("#type-speed");

let txt = `This is an autotyping stuff...`;
let speed = typeSpeed.value * 50;
let i = 0;

function autoType() {
  if (i < txt.length) {
    console.log(i);
    title.innerHTML += txt.charAt(i);
    i++;
    setTimeout(autoType, speed);
  }
}
autoType();
