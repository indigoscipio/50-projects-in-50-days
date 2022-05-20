let button = document.querySelector(".click-me");
let notificaionContainer = document.querySelector(".notification-container");

let messages = ["Message1", "Message2", "Message3", "Message4", "Message5"];

button.addEventListener("click", pushMessage);

let idx = 0;
function pushMessage() {
  idx++;
  let notification = document.createElement("div");
  notification.classList.add("notification");
  notification.innerText = `${messages[idx - 1]}`;
  notificaionContainer.append(notification);
}
