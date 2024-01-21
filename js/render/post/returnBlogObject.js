import { returnBlogPostObject } from "./returnBlogPostObject.js";

// Takes raw html from the api and parses it, extracting div elements i have created in the api with the purpose of giving me some structure to work with in the case i want to to display other elements in between pieces of post content.
export function returnBlogObject(html) {
  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html");

  const divElements = document.getElementsByTagName("div");

  const blogPostObject = returnBlogPostObject(divElements);
  return blogPostObject;
}

// Returns a array of 5 objects containing outerHTML of the div elements.
// This code and returnBlogPostObject() is my code but has been partially influenced by chatGPT, https://www.youtube.com/watch?v=mW34Gc9c6JY, and https://developer.mozilla.org/. I started looking into it as chatGPT suggested that it would be a good practice to domParse.
