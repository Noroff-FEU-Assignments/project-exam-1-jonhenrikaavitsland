import { returnBlogPostObject } from "./returnBlogPostObject.js";

export function returnBlogObject(html) {
  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html");

  const divElements = document.getElementsByTagName("div");

  const blogPostObject = returnBlogPostObject(divElements);
  return blogPostObject;
}

// Returns a array of objects containing innerHTML of the div elements.