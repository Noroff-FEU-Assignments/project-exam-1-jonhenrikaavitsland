import { ERROR_API } from "../errorHandling/errors.js";

export async function fetchData(url) {
  const response = await fetch(url);
  const result = await response.json();

  if (!response.ok) {
    throw ERROR_API;
  }

  return result;
}
