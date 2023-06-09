import { sendTodo } from "../../controller/features/sendTodo.js";
import { createEl } from "../../utils/createEl.js";

export function createAddTodoField() {
  const todoEl = createEl("div", {
    className: "todo-container ",
    id: "add-todo-row",
  });
  /* const formEl = createEl("form", {
    className:
      "container d-flex align-items-center justify-content-between gap-3",
  }); */
  const inputEl = createEl("input", {
    type: "text",
    name: "new-todo",
    id: "new-todo",
    className: "form-control",
  });
  const sendBtnEl = createEl("button", {
    id: "submit-todo",
    className: "btn add-todo-btn",
  });
  sendBtnEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
  </svg>`;
  sendBtnEl.onclick = sendTodo;

  /* formEl.append(inputEl, sendBtnEl);
  todoEl.append(formEl); */
  todoEl.append(inputEl, sendBtnEl);

  return todoEl;
}
