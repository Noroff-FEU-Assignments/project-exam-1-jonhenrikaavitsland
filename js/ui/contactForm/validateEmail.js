export function validateEmail(emailRegex) {
  const emailField = document.querySelector("#email");
  const emailError = document.querySelector(".email-error");
  const emailErrorMsg = document.querySelector(".email-error p");
  let validState = false;

  if (
    emailField.value.trim() !== "" &&
    !emailRegex.test(emailField.value.trim())
  ) {
    emailError.classList.remove("hidden");
    emailErrorMsg.textContent = "Please enter a valid email address!";
    emailError.style.borderColor = "red";
    emailField.style.border = "2px solid red";
    validState = false;
  } else {
    emailError.classList.add("hidden");
    emailField.style.border = "";
    validState = true;
  }
  if (emailField.value.trim() === "") {
    validState = false;
  }
  return validState;
}
