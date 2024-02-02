export function createHiddenSpan(number) {
  const hiddenSpan = document.createElement("span");
  hiddenSpan.classList.add("visually-hidden");
  hiddenSpan.textContent = `slide number ${number}`;
  return hiddenSpan;
}
