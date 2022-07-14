let btnPlay = document.querySelector(".button--play");
let screens = document.querySelectorAll(".screen");
let insectList = document.querySelector(".list");
let gameContainer = document.querySelector(".screen-3");
let scoreEl = document.querySelector(".score");
let timeEl = document.querySelector(".time");
let messageEl = document.querySelector(".message");

let currScreenIdx = 0;
let insectSelection = "";
let score = 0;
let insectCount = 0;
let sec = 0;

btnPlay.addEventListener("click", playGame);

function playGame() {
  moveSlide();

  //   select insect
  insectList.addEventListener("click", getInsectSelection);
}

function getInsectSelection(e) {
  let selectionIdx = e.target.dataset.index;

  if (e.target.hasAttribute("data-index")) {
    //Mosquito
    if (selectionIdx == 0) {
      insectSelection = e.target.src;
    }
    //Grasshopper
    else if (selectionIdx == 1) {
      insectSelection = e.target.src;
    }
    //Ant
    else if (selectionIdx == 2) {
      insectSelection = e.target.src;
    }
    //Spider
    else {
      insectSelection = e.target.src;
    }
    console.log(insectSelection);
    moveSlide();
    createInsect();
    startTimer();
  } else {
    return false;
  }
}

function startTimer() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  let m = Math.floor(sec / 60);
  let s = sec % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;

  sec++;
  timeEl.innerText = `Time: ${m}:${s}`;
}

function updateScore(score) {
  scoreEl.innerText = `Score: ${score}`;
}

function createInsect() {
  let insectImg = document.createElement("img");
  insectImg.classList.add("insect");
  insectImg.src = insectSelection;
  insectImg.addEventListener("click", squashInsect);

  let width = document.body.clientWidth - 128;
  let height = document.body.clientHeight - 128;

  insectImg.style.top = `${Math.floor(Math.random() * height)}px`;
  insectImg.style.left = `${Math.floor(Math.random() * width)}px`;
  insectImg.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;

  gameContainer.append(insectImg);
}

function squashInsect() {
  this.style.transform += `scale(0)`;
  score++;
  insectCount++;

  setTimeout(() => {
    this.remove();
  }, 500);

  setTimeout(() => {
    createInsect();
  }, 300);
  setTimeout(() => {
    createInsect();
  }, 500);

  updateScore(score);
  console.log(`Score: ${score}, IC: ${insectCount}`);

  if (score == 20) {
    messageEl.classList.add("active");
    setTimeout(() => {
      messageEl.classList.remove("active");
    }, 2000);
  }
}

function moveSlide() {
  currScreenIdx++;
  screens.forEach((screen) => {
    screen.style.transform = `translateX(${-100 * currScreenIdx}%)`;
  });
}
