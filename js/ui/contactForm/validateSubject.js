export function validateSubject(subjectRegex) {
  const subjectField = document.querySelector("#subject");
  const subjectError = document.querySelector(".subject-error");
  const subjectErrorMsg = document.querySelector(".subject-error p");
  let validState = false;

  const trimmedSubject = subjectField.value.trim();

  if (
    trimmedSubject !== "" &&
    (trimmedSubject.length < 16 || !subjectRegex.test(subjectField.value))
  ) {
    subjectError.classList.remove("hidden");
    subjectErrorMsg.textContent =
      "Subject needs to be more than 15 characters and not include unwanted characters!";
    subjectField.style.border = "2px solid red";
    validState = false;
  } else {
    subjectError.classList.add("hidden");
    subjectField.style.border = "";
    validState = true;
  }
  if (trimmedSubject === "") {
    validState = false;
  }
  return validState;
}
