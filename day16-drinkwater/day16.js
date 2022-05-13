let glasses = document.querySelectorAll(".glass");
let glassPercentage = document.querySelector("#glass-filled-percentage");

//set initial ml value to 0
//if the user clicked on one of the glasses
//increment percentage by ((250/2000)*100)
//Check if the button is toggled - if it's toggled, adjust max accordingly
let ml = 0;
let remainingMl = 2000;

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
  } else {
    e.target.classList.remove("selected");
    ml -= +e.target.dataset.value;
    remainingMl = remainingMl + +e.target.dataset.value;
  }
  console.log(`Current ml is: ${ml}`);
  console.log(`Remaining ml is: ${remainingMl}`);
}

// function updateRemainingMl() {
//   console.log(remainingMl);
// }
