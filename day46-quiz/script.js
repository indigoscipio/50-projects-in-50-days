let introCard = document.querySelector(".intro");
let endCard = document.querySelector(".end");
let buttonStart = document.querySelector("#button-start");
let buttonSubmit = document.querySelector("#button-submit");
let buttonRestart = document.querySelector("#button-restart");
let body = document.querySelector("body");
let apiURL = `https://the-trivia-api.com/questions`;

let quizData = [];
let currQuizIdx = 0;
let score = 0;
let wrongAnswers = 0;

buttonStart.addEventListener("click", () => {
  introCard.classList.add("hidden");
  startQuiz();
});

async function getQuizData() {
  body.innerHTML = ``;
  let loader = document.createElement("div");
  loader.classList.add("loader");
  body.append(loader);

  let res = await fetch(
    `https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=1`
  );
  let data = await res.json();

  loader.remove();
  return data;
}

async function startQuiz() {
  //store fetched data to global array
  let data = await getQuizData();
  console.log(data);
  data.forEach((item) => {
    quizData.push({
      question: item.question,
      answers: [...item.incorrectAnswers, item.correctAnswer].sort(
        () => Math.random() - 0.5
      ),
      correctAnswer: item.correctAnswer,
    });
  });
  console.log(quizData);

  updateMainCard();
}

function updateMainCard() {
  let quizLength = quizData.length;
  let mainCard = document.createElement("div");

  body.innerHTML = ``;

  mainCard.classList.add("card");
  mainCard.innerHTML = `
    <div class="progress-container">
        <div class="progress-number"> ${currQuizIdx} / ${quizLength}</div>
        <div class="progress-active"></div>
        <div class="progress-bg"></div>
    </div>

    <h2 class="question">${quizData[currQuizIdx]?.question}</h2>
    <ul class="answers">
        <li class="answer">
            <input class="radio" id="a" type="radio" name="answers" />
            <label class="label" for="a">${quizData[currQuizIdx]?.answers[0]}</label>
        </li>
        <li class="answer">
            <input class="radio" id="b" type="radio" name="answers" />
            <label class="label" for="b">${quizData[currQuizIdx]?.answers[1]}</label>
        </li>
        <li class="answer">
            <input class="radio" id="c" type="radio" name="answers" />
            <label class="label" for="c">${quizData[currQuizIdx]?.answers[2]}</label>
        </li>
        <li class="answer">
            <input class="radio" id="d" type="radio" name="answers" />
            <label class="label" for="d">${quizData[currQuizIdx]?.answers[3]}</label>
        </li>
    </ul>
    <button class="button button--submit" id="button-submit">
        Submit Answer
    </button>
    `;

  //Button Submit Event Listener
  let buttonSubmit = mainCard.querySelector("#button-submit");
  buttonSubmit.addEventListener("click", submitAnswer);
  body.append(mainCard);
}

//deselect all the answers
function deselectAnswer() {
  return false;
}

//returns the selected answer
function getSelectedAnswer() {
  let selectedRadio = document.querySelector(`input[type="radio"]:checked`);

  if (!selectedRadio) {
    return false;
  } else {
    let selectedLabel = selectedRadio.nextElementSibling.innerText;
    return selectedLabel;
  }
}

function checkAnswer() {
  let answer = getSelectedAnswer();

  if (!answer) {
    alert("Please select an option");
  } else {
    if (answer == quizData[currQuizIdx].correctAnswer) {
      score++;
      console.log("Correct!");
    } else {
      wrongAnswers++;
    }

    currQuizIdx++;
  }

  console.log(answer);
}

function createEndCard() {
  let endEl = document.createElement("div");
  endEl.classList.add("end");
  endEl.innerHTML = `
    <h2>Your Final Score</h2>
    <p class="score">${score}</p>
    <p>You got ${wrongAnswers} answers wrong! 🏁</p>
    <button class="button button--restart" id="button-restart">
      Play Again??
    </button>
    `;
  body.append(endEl);

  document
    .querySelector("#button-restart")
    .addEventListener("click", restartQuiz);
}

function restartQuiz() {
  quizData = [];
  currQuizIdx = 0;
  score = 0;
  wrongAnswers = 0;
  startQuiz();
}

function submitAnswer() {
  checkAnswer();
  updateMainCard();
  updateProgressBar();

  if (currQuizIdx == quizData.length) {
    // Create Loader & Loader Info
    body.innerHTML = "";
    let loader = document.createElement("div");
    let loaderInfo = document.createElement("div");
    loaderInfo.textContent = "Calclating Your Score...";
    loaderInfo.classList.add("loader-info");
    loader.classList.add("loader");
    body.append(loader);
    body.append(loaderInfo);

    setTimeout(() => {
      loader.remove();
      loaderInfo.remove();
      body.innerHTML = "";
      createEndCard();
    }, 2000);
  }
}

function updateProgressBar() {
  let progressActive = document.querySelector(".progress-active");
  progressActive.style.width = `${(currQuizIdx / quizData.length) * 100}%`;
}
