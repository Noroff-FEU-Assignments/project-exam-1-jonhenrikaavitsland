import { ERROR_NO_DATA } from "../../errorHandling/errors.js";

export function renderH1(data) {
  if (!data) throw ERROR_NO_DATA;

  const heading = document.querySelector("h1");

  heading.textContent = data.title;
}
