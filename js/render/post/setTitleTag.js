export function setTitleTagAndSetMainId(data) {
  const titleElement = document.querySelector("title");
  const mainElement = document.querySelector("main");
  titleElement.textContent = `${data.title} | the Zookeeper's Journal`;
  mainElement.setAttribute("id", data.id);
}
