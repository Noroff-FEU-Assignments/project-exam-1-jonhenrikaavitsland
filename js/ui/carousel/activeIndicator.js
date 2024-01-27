export function activeIndicator(currentPosition) {
  const allIndicators = document.querySelectorAll(".indicator");

  for (let i = 0; i < allIndicators.length; i++) {
    allIndicators[i].classList.remove("active-indicator");
    if (
      allIndicators[i].classList.contains(`indicator${currentPosition + 1}`)
    ) {
      allIndicators[i].classList.add("active-indicator");
    }
  }
}
