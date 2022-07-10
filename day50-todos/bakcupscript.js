let todoForm = document.querySelector("#todo-header");
let todoInput = document.querySelector("#todo-input");
let todoList = document.querySelector("#todo-list");
let todoCount = document.querySelector(".todo-count");

todoForm.addEventListener("submit", addTodo);

let todosData = [];

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
    updateCount();

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
        </button>
`;

      li.addEventListener("click", handleCheck);
      li.querySelector(".button--remove").addEventListener(
        "click",
        handleDelete
      );
      todoList.append(li);

      //check if li contains checked class
      if (data.completed) {
        let test = document.querySelector(`input[id="${data.id}"]`);
        test.checked = true;
      }
    });

    todoInput.value = "";
  }

  console.log(todosData);
}

//Handle Delete
function handleDelete(e) {
  //   console.log(e.currentTarget, e.currentTarget.parentNode);

  //Handle UI
  //   e.currentTarget.parentNode.remove();

  //Handle Data
  todosData.forEach((data) => {
    if (e.currentTarget.id == data.id) {
      console.log(data.id);
      e.currentTarget.parentNode.remove();
    }
  });
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

function updateCount() {
  let count = 0;
  todosData.forEach((data) => {
    if (!data.completed) {
      count++;
    }
  });
  todoCount.innerText = `${count} remaining`;
}
