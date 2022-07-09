let todoForm = document.querySelector("#todo-header");
let todoInput = document.querySelector("#todo-input");
let todoList = document.querySelector("#todo-list");

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

    //Update list DOM

    todosData.forEach((data, idx) => {
      let li = document.createElement("li");
      li.classList.add("list-item");
      li.dataset.index = data.id;

      li.innerHTML = `
        <input class="list-item-checkbox" type="checkbox" id="${data.id}" />
        <label onclick="event.stopPropagation()" class="list-item-label" for="${data.id}">${data.text}</label>
        <button class="button--remove">
        <i class="fa-solid fa-trash-can"></i>
        </button>
`;

      li.addEventListener("click", handleCheck);
      todoList.append(li);

      //check if li contains checked class
      if (data.completed) {
        let test = document.querySelector(`input[id="${data.id}"]`);
        test.checked = true;
      }
    });

    //Handle Checkbox
    function handleCheck(e) {
      if (e.target.classList.contains("list-item-checkbox")) {
        let checkedItemID = todosData
          .map((item) => item.id)
          .filter((item) => item == e.target.parentNode.dataset.index)
          .map((item) => `${item}`);

        todosData.forEach((data) => {
          if (data.id == checkedItemID) {
            data.completed = e.target.checked;
            e.target.parentNode.classList.toggle("checked");
          }
        });
      }

      //add delete functionality
    }

    todoInput.value = "";
  }

  console.log(todosData);
}
