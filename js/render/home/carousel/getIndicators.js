export function getIndicators(slides, parent) {
  for (let i = 0; i < slides.length; i++) {
    const indicator = document.createElement("button");
    indicator.classList.add("indicator", `indicator${i + 1}`);
    parent.append(indicator);
  }
}
