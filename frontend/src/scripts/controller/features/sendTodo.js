import { getMain } from "../../model/getMain.js";
import { fetchData } from "../../utils/fetchData.js";
import {renderMain} from '../../view/main/renderMain.js'

export async function sendTodo() {
  const mainEl = getMain();

  const inputEl = document.querySelector('input[name="new-todo"]');
  const data = {title: inputEl.value};
  const url = "/api/todos/";

  await fetchData(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  mainEl.remove();
  renderMain();
}
