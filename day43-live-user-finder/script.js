let input = document.querySelector("#input");
let list = document.querySelector("#list");
let apiURL = `https://www.randomuser.me/api`;
let userLimit = 20;
let usersArrEl = [];

//append all user data into the container
input.addEventListener("input", searchUser);
input.disabled = true;

async function getUserDatas() {
  let response = await fetch(`${apiURL}/?results=${userLimit}&gender=female`);
  let data = await response.json();
  return data;
}

async function createList() {
  let data = await getUserDatas();
  console.log(data);

  data.results.forEach((element) => {
    let listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.innerHTML = `
    <div class="profile">
    <img src="${element.picture.thumbnail}"></img>
    </div>
    <div class="user-info">
      <p class="user-name">${element.name.first} ${element.name.last}</p>
      <p class="user-location">${element.location.city}, ${element.location.country}</p>
    </div>
    `;

    list.append(listItem);
    input.disabled = false;
    usersArrEl.push(listItem);
  });
}
createList();

async function searchUser() {
  let searchTerm = input.value;

  usersArrEl.forEach((element) => {
    if (
      element
        .querySelector(".user-name")
        .innerText.toLowerCase()
        .includes(searchTerm.toLowerCase())
    ) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  });
}
