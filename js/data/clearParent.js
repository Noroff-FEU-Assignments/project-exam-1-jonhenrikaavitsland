import { ERROR_NO_PARENT } from "../errorHandling/errors.js";

export function clearParent(parent) {
  if (!parent) throw ERROR_NO_PARENT;

  parent.innerHTML = "";
}
