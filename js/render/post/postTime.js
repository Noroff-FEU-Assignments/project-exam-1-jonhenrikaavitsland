import { ERROR_NO_PARENT, ERROR_NO_TIME } from "../../errorHandling/errors.js";

export function postTime(data, parent) {
  if (!data) throw ERROR_NO_TIME;
  if (!parent) throw ERROR_NO_PARENT;

  const time = document.createElement("time");

  if (!time) throw ERROR_NO_PARENT;

  time.setAttribute("datetime", data.date);
  time.classList.add("card-time");
  time.textContent = data.date.replace("T", " ");
  parent.append(time);
}
