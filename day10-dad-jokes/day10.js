const joke = document.getElementById("joke");
const btnJoke = document.querySelector(".button-joke");

btnJoke.addEventListener("click", generateJoke);

generateJoke();
function generateJoke() {
  let config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
      joke.innerHTML = data.joke;
    });
}
