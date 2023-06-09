import { createEl } from "../../utils/createEl.js";
import { getTitle } from "../../model/getTitle.js";
import { getTodos } from "../../model/main/getTodos.js";
import { createTodo } from "./createTodo.js";
import { createAddTodoBtn } from "../features/createAddTodoBtn.js";

export async function createMain() {
  const mainEl = createEl("main", { className: "container d-flex flex-column gap-3 " });
  const titleEl = getTitle("todos", "h2");
  const todos = await getTodos();
  mainEl.append(titleEl);
  todos.forEach((todo) => mainEl.append(createTodo(todo)));
  mainEl.append(createAddTodoBtn());
  return mainEl;
}
