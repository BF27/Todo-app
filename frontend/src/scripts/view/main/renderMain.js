import { getRoot } from "../../model/getRoot.js";
import { createMain } from "./createMain.js";

export async function renderMain() {
  const rootEl = getRoot();
  const mainEl =await createMain();

  rootEl.append(mainEl);
}