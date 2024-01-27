export function goToPosition(slides, currentPosition) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${100 * (i - currentPosition)}%)`;
  }
}
