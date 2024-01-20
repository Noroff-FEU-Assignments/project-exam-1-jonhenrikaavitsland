const modalContainer = document.querySelector(".modal-container");
const overlay = document.querySelector(".modal-bg");

export function closeModal() {
  modalContainer.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.classList.remove("modal-open");
}
