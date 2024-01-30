export function validateSubject(subjectRegex) {
  const subjectField = document.querySelector("#subject");
  const subjectError = document.querySelector(".subject-error");
  const subjectErrorMsg = document.querySelector(".subject-error p");
  let validState = false;

  if (
    subjectField.value.trim() !== "" &&
    !subjectRegex.test(subjectField.value)
  ) {
    subjectError.classList.remove("hidden");
    subjectErrorMsg.textContent = "That doesn't make sense!";
    subjectField.style.border = "2px solid red";
    validState = false;
  } else {
    subjectError.classList.add("hidden");
    subjectField.style.border = "";
    validState = true;
  }
  if (subjectField.value.trim() === "") {
    validState = false;
  }
  return validState;
}
