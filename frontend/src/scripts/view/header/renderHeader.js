import { getRoot } from "../../model/getRoot.js";
import { createHeader } from "./createHeader.js";

export function renderHeader() {
  const root = getRoot();
  const header = createHeader();

  root.append(header);
}
