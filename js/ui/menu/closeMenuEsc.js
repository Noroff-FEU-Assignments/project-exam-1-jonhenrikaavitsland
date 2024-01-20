import { closeMenu } from "./closeMenu.js";
import { closeModal } from "../modal/closeModal.js";

export function closeMenuEsc(e) {
  if (e.key === "Escape") {
    closeMenu();
    closeModal();
  }
}
