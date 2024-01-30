export function validateName(nameRegex) {
  const nameField = document.querySelector("#name");
  const nameError = document.querySelector(".name-error");
  const nameErrorMsg = document.querySelector(".name-error p");
  let validState = false;

  if (nameField.value.trim() !== "" && !nameRegex.test(nameField.value)) {
    nameError.classList.remove("hidden");
    nameErrorMsg.textContent = "Unwanted characters in name";
    nameField.style.border = "2px solid red";
    validState = false;
  } else {
    nameError.classList.add("hidden");
    nameField.style.border = "";
    validState = true;
  }
  if (nameField.value.trim() === "") {
    validState = false;
  }
  return validState;
}
