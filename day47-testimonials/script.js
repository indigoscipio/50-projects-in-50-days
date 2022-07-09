let progressBar = document.querySelector(".progress-bar");
let userImage = document.querySelector("#user-image");
let userName = document.querySelector(".user-name");
let userTitle = document.querySelector(".user-title");
let userText = document.querySelector("#text");

let idx = 0;
let time = 0;
let userDatasLocal = [];
let timeLimit = 5;
let userAPILimit = 10;
let proxyURL = `https://api.allorigins.win/get?url=`;
let userAPIURL = `https://randomuser.me/api`;
let quoteAPIUrl = `https://zenquotes.io/api/quotes`;

async function getUserDatas() {
  let res = await fetch(`${userAPIURL}/?results=${userAPILimit}`);
  let data = await res.json();
  return data.results;
}

async function getQuoteDatas() {
  let res = await fetch(`${proxyURL}${quoteAPIUrl}`);
  let data = await res.json();
  return JSON.parse(data.contents);
}

async function testimonialsSlider() {
  let quoteDatas = await getQuoteDatas();
  let userDatas = await getUserDatas();

  userDatas.forEach((element) => {
    userDatasLocal.push({
      name: element.name.first + " " + element.name.last,
      profileURL: element.picture.thumbnail,
      email: element.email,
    });
  });
  for (let i = 0; i < userAPILimit; i++) {
    userDatasLocal[i].quotes = quoteDatas[i].q;
  }

  runSlider();
}
testimonialsSlider();

function runSlider() {
  updateContent();

  // and schedule a repeat
  setTimeout(runSlider, 5000);
}

function updateContent() {
  progressBar.style.visibility = `visible`;
  progressBar.style.animation = `load 5s infinite linear`;

  userTitle.innerText = userDatasLocal[idx].email;
  userText.innerText = userDatasLocal[idx].quotes;
  userName.innerText = userDatasLocal[idx].name;
  userImage.src = userDatasLocal[idx].profileURL;

  time++;
  idx++;

  if (time >= userAPILimit) {
    time = 0;
    idx = 0;
  }

  console.log(time, idx);
}
