import { createHiddenSpan } from "../../../errorHandling/createHiddenSpan.js";

export function getIndicators(slides, parent) {
  for (let i = 0; i < slides.length; i++) {
    const indicator = document.createElement("button");
    indicator.classList.add("indicator", `indicator${i + 1}`);

    const hiddenSpan = createHiddenSpan(i + 1);
    indicator.append(hiddenSpan);

    parent.append(indicator);
  }
}
