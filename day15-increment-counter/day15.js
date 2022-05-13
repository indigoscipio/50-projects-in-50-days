let numCounters = document.querySelectorAll(".counter");

// numCounters.forEach((counter) => {
//   counter.innerText = "0";
//   let updateCounter = function () {
//     let finalValue = +counter.getAttribute("data-target");
//     let initNumber = +counter.innerText;
//     let increment = finalValue / 200;
//     if (initNumber < finalValue) {
//       counter.innerText = initNumber + increment;
//       setTimeout(updateCounter, 1);
//     } else {
//       counter.innerText = finalValue;
//     }
//     console.log(finalValue);
//   };
//   updateCounter();
// });

numCounters.forEach((counter) => {
  counter.innerText = "0";
  let finalValue = +counter.getAttribute("data-target");
  let initNumber = +counter.innerText;
  let increment = finalValue / 50;
  let viewCounter = setInterval(() => {
    if (initNumber <= finalValue) {
      initNumber = initNumber + increment;
      counter.innerText = initNumber + increment;
      console.log(initNumber);
      console.log(finalValue);
    } else {
      console.log("Final Value Reached!");
      clearInterval(viewCounter);
    }
  }, 10);
});
