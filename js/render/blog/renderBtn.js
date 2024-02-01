import {
  ERROR_MISSING_BTN,
  ERROR_NO_PARENT,
} from "../../errorHandling/errors.js";
import { createBtn } from "./createBtn.js";

export function renderBtn(parent) {
  if (!parent) throw ERROR_NO_PARENT;

  const btn = createBtn();

  if (!btn) throw ERROR_MISSING_BTN;

  parent.append(btn);
}
