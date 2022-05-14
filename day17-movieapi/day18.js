let MOVIE_API = `https://api.themoviedb.org/3/movie/popular?api_key=1928ddc7f48d6f8316a3690de12a5d27`;
let IMAGE_PATH = `https://image.tmdb.org/t/p/w500/`;
let SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=1928ddc7f48d6f8316a3690de12a5d27&language=en-US&page=1&include_adult=false&query=`;
let searchForm = document.querySelector("#search-form");
let search = document.querySelector("#search");
let movieContainer = document.querySelector(".main-container");
let movieCard = document.querySelectorAll(".movie-card");

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  updateMovies(data.results);
}

function updateMovies(movies) {
  movieContainer.innerHTML = "";

  for (i = 0; i < movies.length; i++) {
    const { title, overview, vote_average, poster_path } = movies[i];
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie-card");
    movieEl.innerHTML = `
    <img src="${IMAGE_PATH + poster_path}" alt="" class="poster" />
    <div class="movie-info">
      <h3 class="movie-title">${title}</h3>
      <span class="movie-rating ${checkRatingColor(
        vote_average
      )}">${vote_average}</span>
    </div>
    <div class="overview-container">
      <h4>Overview</h4>
      <p>${overview}</p>
    </div>`;
    movieContainer.appendChild(movieEl);
  }
}
//   movieCard.forEach((movie, idx) => {
//     console.log(movies);
//     const { title, overview, vote_average, poster_path } = movies[idx];
//     const movieEl = document.createElement("div");
//     movieEl.classList.add("movie-card");
//     movieEl.innerHTML = `
//     <img src="${IMAGE_PATH + poster_path}" alt="" class="poster" />
//     <div class="movie-info">
//       <h3 class="movie-title">${title}</h3>
//       <span class="movie-rating ${checkRatingColor(
//         vote_average
//       )}">${vote_average}</span>
//     </div>
//     <div class="overview-container">
//       <h4>Overview</h4>
//       <p>${overview}</p>
//     </div>`;
//     movieContainer.appendChild(movieEl);
//   });
// }

function checkRatingColor(rating) {
  if (rating > 8) {
    return "green";
  } else if (rating > 6) {
    return "orange";
  } else {
    return "red";
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchValue = search.value;
  if (searchValue && searchValue !== "") {
    getMovies(SEARCH_URL + searchValue);
    search.value = "";
  } else {
    window.location.reload();
  }
});
