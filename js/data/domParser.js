export function domParser(wpContent) {
  const parser = new DOMParser();
  const action = parser.parseFromString(wpContent, "text/html");
  const result = action.documentElement.innerHTML;
  return result;
}
