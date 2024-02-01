import { ERROR_NO_PARENT, ERROR_NO_POST } from "../../errorHandling/errors.js";

export function renderPost(data, parent) {
  if (!data) throw ERROR_NO_POST;
  if (!parent) throw ERROR_NO_PARENT;

  const element = document.createElement("div");
  element.innerHTML = data.innerHTML;
  parent.append(element);
}
