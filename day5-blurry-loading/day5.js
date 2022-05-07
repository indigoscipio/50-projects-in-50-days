let loading = document.querySelector("#loading");
let imageBG = document.querySelector(".container");

//create a counter from 1 to 100;
let load = 0;
let blurValue = 100;

let int = setInterval(blur, 50);

function blur() {
  load++;
  blurValue--;

  if (load > 99) {
    clearInterval(int);
  }
  loading.innerText = `${load}%`;
  console.log(load);

  if (blurValue > 0) {
    console.log(blurValue);
    imageBG.style.filter = `blur(${blurValue}px)`;
  }
}
