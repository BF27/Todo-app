import { getMain } from "../../model/getMain.js";
import { createAddTodoField } from "../../view/features/createAddTodoField.js";

export function addTodoBtn() {
  const mainEl = getMain();

  mainEl.append(createAddTodoField());
  this.remove();
}
