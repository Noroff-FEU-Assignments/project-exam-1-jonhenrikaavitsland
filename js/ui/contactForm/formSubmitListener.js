import { formSubmit } from "./formSubmit.js";

export function formSubmitListener(validState) {
  const btn = document.querySelector(".contact .cta");
  btn.addEventListener("click", function () {
    formSubmit(validState);
  });
}
