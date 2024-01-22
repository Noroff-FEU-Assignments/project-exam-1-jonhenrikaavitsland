export function renderH1(data) {
  const heading = document.querySelector("h1");
  heading.textContent = data.title;
}
