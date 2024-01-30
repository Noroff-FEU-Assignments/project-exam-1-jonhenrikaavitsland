import { validateContactForm } from "./validateContactForm.js";

export function updateValidation() {
  const inputs = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  inputs.forEach(input => {
    input.addEventListener("change", validateContactForm);
    input.addEventListener("blur", validateContactForm);
  });
  textArea.addEventListener("change", validateContactForm);
  textArea.addEventListener("blur", validateContactForm);
}
