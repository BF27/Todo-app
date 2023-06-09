import { createEl } from "../../utils/createEl.js";

export function getLogo(src) {
  const divEl = createEl("div", { className: "logo-container" });
  const logoEl = createEl("img", { src: src, alt: "logo", className: "logo" });

  divEl.append(logoEl);
  return divEl;
}
