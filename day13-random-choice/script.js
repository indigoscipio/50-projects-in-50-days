let textInput = document.getElementById("input");
let pills = document.querySelector(".pill-container");

let finalStr = "";

textInput.addEventListener("keyup", (e) => {
  //if the user writes comma, push the previous word into finalarr
  console.log(e.key);

  createTags(e.target.value);
  if (e.key === "Enter") {
    randomSelect();
  }
});

//if users input , in the textarea, push it into an array

//Create tags
function createTags(input) {
  let tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  pills.innerHTML = "";
  tags.forEach((tag) => {
    let newTag = document.createElement("div");
    newTag.classList.add("pill");
    newTag.innerText = tag;
    pills.appendChild(newTag);
  });
}

function randomSelect() {
  let times = 30;
  let interval = setInterval(() => {
    let randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      let randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  let tags = document.querySelectorAll(".pill");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("active");
}

function unhighlightTag(tag) {
  tag.classList.remove("active");
}
