export function formSubmit(validState) {
  const form = document.querySelector("form");
  if (validState) {
    form.submit();
  }
}
