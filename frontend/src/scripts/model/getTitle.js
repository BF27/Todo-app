import { createEl } from "../utils/createEl.js";
/**
 *
 * @param {string} title //inner Text
 * @param {string} importance //h1...h6
 * @returns title element
 */
export function getTitle(title, importance) {
  const divEl = createEl("div", { className: "title-container" });
  const titleEl = createEl(importance, { innerText: title, className: 'text-uppercase' });
  divEl.append(titleEl);
  return divEl;
}
