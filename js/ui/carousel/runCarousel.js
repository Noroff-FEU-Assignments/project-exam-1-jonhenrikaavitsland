import { getIndicators } from "../../render/home/carousel/getIndicators.js";
import { activeIndicator } from "./activeIndicator.js";
import { goToPosition } from "./goToPosition.js";

export function runCarousel() {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".carousel-left-btn");
  const btnRight = document.querySelector(".carousel-right-btn");
  const indicatorParent = document.querySelector(".indicators");

  getIndicators(slides, indicatorParent);

  let currentPosition = 0;
  const maxPosition = slides.length;

  goToPosition(slides, currentPosition);

  btnLeft.addEventListener("click", goBackwards);
  btnRight.addEventListener("click", goForward);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      goBackwards();
    }
    if (e.key === "ArrowRight") {
      goForward();
    }
  });

  activeIndicator(currentPosition);

  function goForward() {
    if (currentPosition === maxPosition - 1) {
      currentPosition = 0;
    } else {
      currentPosition++;
    }
    goToPosition(slides, currentPosition);
    activeIndicator(currentPosition);
  }

  function goBackwards() {
    if (currentPosition === 0) {
      currentPosition = maxPosition - 1;
    } else {
      currentPosition--;
    }
    goToPosition(slides, currentPosition);
    activeIndicator(currentPosition);
  }
}
