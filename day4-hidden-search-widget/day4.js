let btnSearch = document.querySelector("#search-button");
let input = document.querySelector(".input");
let searchContainer = document.querySelector(".search-container");

btnSearch.addEventListener("click", () => {
  searchContainer.classList.toggle("active");
});
