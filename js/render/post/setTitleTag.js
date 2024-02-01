import { ERROR_NO_DATA } from "../../errorHandling/errors.js";

export function setTitleTagAndSetMainId(data) {
  if (!data) throw ERROR_NO_DATA;

  const titleElement = document.querySelector("title");
  const mainElement = document.querySelector("main");
  titleElement.textContent = `${data.title} | the Zookeeper's Journal`;
  mainElement.setAttribute("id", data.id);
}
