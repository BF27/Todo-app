import { createEl } from "../../utils/createEl.js";
import { getLogo } from "../../model/header/getLogo.js";
import { getTitle } from "../../model/getTitle.js";

export function createHeader() {
  const headerEl = createEl("header", {
    className: "main-header container-fluid p-3",
  });
  const divEl = createEl("div", {
    className:
      "container d-flex justify-content-start align-items-center gap-3",
  });
  const logoEl = getLogo("src/assets/logo.svg");
  const titleEl = getTitle("Todo App", "h1");

  headerEl.append(divEl);
  divEl.append(logoEl, titleEl);
  return headerEl;
}
