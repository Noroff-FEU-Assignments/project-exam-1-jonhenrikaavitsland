export function validateName(nameRegex) {
  const nameField = document.querySelector("#name");
  const nameError = document.querySelector(".name-error");
  const nameErrorMsg = document.querySelector(".name-error p");
  let validState = false;

  const trimmedName = nameField.value.trim();

  if (
    trimmedName !== "" &&
    (trimmedName.length < 6 || !nameRegex.test(nameField.value))
  ) {
    nameError.classList.remove("hidden");
    nameErrorMsg.textContent =
      "Name should be more than 5 characters and contain no unwanted characters!";
    nameField.style.border = "2px solid red";
    validState = false;
  } else {
    nameError.classList.add("hidden");
    nameField.style.border = "";
    validState = true;
  }
  if (trimmedName === "") {
    validState = false;
  }
  return validState;
}
