import { validateContactForm } from "./validateContactForm.js";

export function updateValidation() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => {
    input.addEventListener("change", validateContactForm);
    input.addEventListener("blur", validateContactForm);
  });
}
