export function createBtn() {
  const element = document.createElement("div");
  element.classList.add("cta-view-more");

  const btn = document.createElement("button");
  btn.classList.add("cta", "cta-view-more", "cursor");
  btn.textContent = "view more";
  element.append(btn);

  return element;
}
