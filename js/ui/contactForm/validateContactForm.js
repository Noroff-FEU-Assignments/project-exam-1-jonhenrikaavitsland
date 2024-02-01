import { formSubmitListener } from "./formSubmitListener.js";
import { validateEmail } from "./validateEmail.js";
import { validateMsg } from "./validateMsg.js";
import { validateName } from "./validateName.js";
import { validateSubject } from "./validateSubject.js";

export function validateContactForm() {
  const nameRegex = /^[a-zA-Z\s\-']+$/;
  const emailRegex = /^\S+@\S+\.\S{2,}$/;
  const textRegex = /^[a-zA-Z0-9\s.,!?'"()-]+$/;
  let validState;

  const validStateName = validateName(nameRegex);
  const validStateEmail = validateEmail(emailRegex);
  const validStateSubject = validateSubject(textRegex);
  const validStateMsg = validateMsg(textRegex);

  if (validStateName && validStateEmail && validStateSubject && validStateMsg) {
    validState = true;
  } else {
    validState = false;
  }

  formSubmitListener(validState);
}
