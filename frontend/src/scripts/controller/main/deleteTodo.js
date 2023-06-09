import { fetchData } from "../../utils/fetchData.js";
import { renderMain } from "../../view/main/renderMain.js";

export async function deleteTodo() {
  const mainEl = document.querySelector('main');

  const id = this.id.split('-')[0];
  const url = `/api/todos/${id}`;
  await fetchData(url, { method: "DELETE" });

  mainEl.remove();
  renderMain();
}
