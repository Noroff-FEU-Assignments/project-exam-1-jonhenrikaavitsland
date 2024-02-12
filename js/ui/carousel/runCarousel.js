import { ERROR_NO_PARENT } from "../../errorHandling/errors.js";
import { getIndicators } from "../../render/home/carousel/getIndicators.js";
import { activeIndicator } from "./activeIndicator.js";
import { goToPosition } from "./goToPosition.js";

export function runCarousel() {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".carousel-left-btn");
  const btnRight = document.querySelector(".carousel-right-btn");
  const indicatorParent = document.querySelector(".indicators");

  if (!slides || !indicatorParent || !btnLeft || !btnRight)
    throw ERROR_NO_PARENT;

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

  indicatorParent.addEventListener("click", function (e) {
    if (e.target.classList.contains("indicator1")) {
      currentPosition = 0;
      goToPosition(slides, currentPosition);
      activeIndicator(currentPosition);
    } else if (e.target.classList.contains("indicator2")) {
      currentPosition = 1;
      goToPosition(slides, currentPosition);
      activeIndicator(currentPosition);
    } else if (e.target.classList.contains("indicator3")) {
      currentPosition = 2;
      goToPosition(slides, currentPosition);
      activeIndicator(currentPosition);
    } else if (e.target.classList.contains("indicator4")) {
      currentPosition = 3;
      goToPosition(slides, currentPosition);
      activeIndicator(currentPosition);
    } else if (e.target.classList.contains("indicator5")) {
      currentPosition = 4;
      goToPosition(slides, currentPosition);
      activeIndicator(currentPosition);
    }
  });
}