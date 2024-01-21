import { createBtn } from "./createBtn.js";

export function renderBtn(parent) {
  const btn = createBtn();
  parent.append(btn);
}
