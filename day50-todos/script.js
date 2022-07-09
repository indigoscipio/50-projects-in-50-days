let todoForm = document.querySelector("#todo-header");

todoForm.addEventListener("submit", addTodo);

function addTodo(e) {
  e.preventDefault();
  console.log(e);
}
