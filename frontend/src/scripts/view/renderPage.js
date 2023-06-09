import { renderHeader } from "./header/renderHeader.js";
import { renderMain } from "./main/renderMain.js";

export function renderPage(){
  renderHeader();
  renderMain();
}