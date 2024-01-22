export function renderPost(data, parent) {
  const element = document.createElement("div");
  element.innerHTML = data.innerHTML;
  parent.append(element);
}
