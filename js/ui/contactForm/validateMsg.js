export function validateMsg(msgRegex) {
  const msgField = document.querySelector("#message");
  const msgError = document.querySelector(".msg-error");
  const msgErrorMsg = document.querySelector(".msg-error p");
  let validState = false;

  const trimmedMsg = msgField.value.trim();

  if (
    trimmedMsg !== "" &&
    (trimmedMsg.length < 26 || !msgRegex.test(msgField.value))
  ) {
    msgError.classList.remove("hidden");
    msgErrorMsg.textContent =
      "Message needs to be longer than 26 characters and not include unwanted characters!";
    msgField.style.border = "2px solid red";
    validState = false;
  } else {
    msgError.classList.add("hidden");
    msgField.style.border = "";
    validState = true;
  }
  if (trimmedMsg === "") {
    validState = false;
  }
  return validState;
}
