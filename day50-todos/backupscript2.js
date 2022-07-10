//DOM Elements
let todoForm = document.querySelector("#todo-header");
let todoInput = document.querySelector("#todo-input");
let todoList = document.querySelector("#todo-list");
let todoCount = document.querySelector(".todo-count");
let btnClear = document.querySelector(".button--clear");

//Initial Variables
let todosData = [];

//Event Listeners
todoForm.addEventListener("submit", addTodo);
btnClear.addEventListener("click", clearCompleted);

function addTodo(e) {
  e.preventDefault();

  //form validation
  if (!todoInput.value.trim()) {
    return false;
  } else {
    //append data
    todoList.innerHTML = ``;
    let inputText = todoInput.value.replace(/\s+/g, " ").trim();
    let newData = {
      text: inputText,
      completed: false,
      id: Date.now(),
    };
    todosData.push(newData);

    //Update list DOM based on data
    todosData.forEach((data, idx) => {
      let li = document.createElement("li");
      li.classList.add("list-item");
      li.dataset.index = data.id;
      li.innerHTML = `
        <input class="list-item-checkbox" type="checkbox" id="${data.id}" />
        <label onclick="event.stopPropagation()" class="list-item-label" for="${data.id}">${data.text}</label>
        <button class="button--remove" id="${data.id}">
            <i class="fa-solid fa-trash-can"></i>
        </button>`;
      li.addEventListener("click", handleCheck);
      li.querySelector(".button--remove").addEventListener(
        "click",
        handleDelete
      );
      todoList.append(li);

      //check if li contains checked class
      if (data.completed) {
        let completedEl = document.querySelector(`input[id="${data.id}"]`);
        completedEl.parentElement.classList.add("checked");
        completedEl.checked = true;
      }
    });

    updateCount();
    todoInput.value = "";
  }

  console.log(todosData);
}

//Handle Delete
function handleDelete(e) {
  //   console.log(e.currentTarget, e.currentTarget.parentNode);

  //Handle UI
  todosData.forEach((data) => {
    if (e.currentTarget.parentNode.dataset.index == data.id) {
      e.currentTarget.parentNode.remove();
    }
  });

  //Handle Data
  let currIdx = e.currentTarget.parentNode.dataset.index;
  todosData = todosData.filter((data) => data.id != currIdx);

  console.log(todosData);
  updateCount();
}

//Handle Checkbox
function handleCheck(e) {
  if (e.target.classList.contains("list-item-checkbox")) {
    let checkedItemID = todosData
      .map((item) => item.id)
      .filter((item) => item == e.target.parentNode.dataset.index)
      .map((item) => `${item}`);

    //Handle Data & UI
    todosData.forEach((data) => {
      if (data.id == checkedItemID) {
        data.completed = e.target.checked;
        e.target.parentNode.classList.toggle("checked");
      }
    });
  }
  console.log(todosData);
  updateCount();
}

//update count
function updateCount() {
  let count = 0;
  todosData.forEach((data) => {
    if (!data.completed) {
      count++;
    }
  });
  todoCount.innerText = `${count} remaining`;
}

//clear completed
function clearCompleted(e) {
  //remove all completed list from data
  todosData = todosData.filter((data) => data.completed == false);

  //match the id of the data and the dom
  todosData.forEach((data) => {
    // if (e.currentTarget.parentNode.classList.contains("checked")) {
    //   e.currentTarget.parentNode.remove();
    // }
  });

  //delete the data and update the UI
  console.log(todosData);
}
