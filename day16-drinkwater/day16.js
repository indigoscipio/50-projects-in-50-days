let glasses = document.querySelectorAll(".glass");
let glassPercentage = document.querySelector("#glass-filled-percentage");
let glassRemaining = document.querySelector("#glass-remaining");

let ml = 0;
let remainingMl = 2000;
let remainingMlPercentage = 100;

glasses.forEach((glass) => {
  glass.addEventListener("click", (e) => {
    toggleGlass(e);
  });
});

function toggleGlass(e) {
  //   e.target.classList.toggle("selected");
  if (!e.target.classList.contains("selected")) {
    e.target.classList.add("selected");
    ml += +e.target.dataset.value;
    remainingMl = remainingMl - +e.target.dataset.value;
    updateMainGlass();
  } else {
    e.target.classList.remove("selected");
    ml -= +e.target.dataset.value;
    remainingMl = remainingMl + +e.target.dataset.value;
    updateMainGlass();
  }
  console.log(`Current ml is: ${ml}`);
  console.log(`Remaining ml is: ${remainingMl}`);
}

function updateMainGlass() {
  glassRemaining.innerText = `${remainingMl}ml remaining`;
  remainingMlPercentage = (ml / 2000) * 100;
  glassPercentage.innerText = `${remainingMlPercentage}%`;
  if (remainingMlPercentage == 0) {
    glassPercentage.innerText = "";
  }
  updateWaterGraphic();
}

function updateWaterGraphic() {
  glassPercentage.style.height = `${remainingMlPercentage}%`;
  glassRemaining.style.height = `${100 - remainingMlPercentage}%`;
}
