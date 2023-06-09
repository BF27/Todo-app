export function createEl(tag, options) {
  const newEl = document.createElement(tag);
  for (let key in options) {
    newEl[key] = options[key];
  }
  return newEl;
}