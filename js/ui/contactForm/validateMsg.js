export function validateMsg(msgRegex) {
  const msgField = document.querySelector("#message");
  const msgError = document.querySelector(".msg-error");
  const msgErrorMsg = document.querySelector(".msg-error p");
  let validState = false;

  if (msgField.value.trim() !== "" && !msgRegex.test(msgField.value)) {
    msgError.classList.remove("hidden");
    msgErrorMsg.textContent = "That doesn't make sense!";
    msgField.style.border = "2px solid red";
    validState = false;
  } else {
    msgError.classList.add("hidden");
    msgField.style.border = "";
    validState = true;
  }
  if (msgField.value.trim() === "") {
    validState = false;
  }
  return validState;
}
