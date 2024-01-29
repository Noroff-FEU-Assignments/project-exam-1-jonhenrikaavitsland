const nameField = document.querySelector("#name");
console.log(nameField);
const emailField = document.querySelector("#email");
console.log(emailField);
const subjectField = document.querySelector("#subject");
console.log(subjectField);
const msgField = document.querySelector("#message");
console.log(msgField);
const nameError = document.querySelector(".name-error");
console.log(nameError);
const nameErrorMsg = document.querySelector(".name-error p");
const emailError = document.querySelector(".email-error");
console.log(emailError);
const emailErrorMsg = document.querySelector(".email-error p");
console.log(emailErrorMsg);
const subjectError = document.querySelector(".subject-error");
console.log(subjectError);
const msgError = document.querySelector(".msg-error");
console.log(msgError);

export function validateContactForm() {
  let validState = true;

  validateName();
  validateEmail();

  function validateName() {
    if (nameField.value.trim() === "") {
      nameError.classList.remove("hidden");
      nameErrorMsg.textContent = "Please enter your name.";
      nameError.style.borderColor = "orange";
      validState = false;
    } else {
      nameError.classList.add("hidden");
    }
  }

  function validateEmail() {
    const emailRegex = /^\S+@\S+\.\S{2,}$/;
    if (emailField.value.trim() === "") {
      emailError.classList.remove("hidden");
      emailErrorMsg.textContent = "Please enter your email.";
      emailError.style.borderColor = "orange";
      validState = false;
    } else {
      if (!emailRegex.test(emailField.value.trim())) {
        emailError.classList.remove("hidden");
        emailErrorMsg.textContent = "Please enter a valid email address!";
        emailError.style.borderColor = "red";
        validState = false;
      } else {
        emailError.classList.add("hidden");
      }
    }
  }
}
