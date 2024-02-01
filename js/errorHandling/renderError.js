export function renderError(error, parent) {
  const errorContainer = document.createElement("div");
  errorContainer.classList.add("error");

  const errorText = document.createElement("p");
  errorText.textContent = error;
  errorContainer.append(errorText);

  parent.append(errorContainer);
}
