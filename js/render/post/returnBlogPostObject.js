export function returnBlogPostObject(divElement) {
  let blogPostObject = [];
  for (let i = 0; i < divElement.length; i++) {
    const group = divElement[i];

    // Chat gpt suggested working on a clone to avoid modifying the original element directly.
    const clonedGroup = group.cloneNode(true);

    clonedGroup.removeAttribute("class");
    clonedGroup.className = `part-${i + 1}`;
    // giving the div elements a class that i can i use styling the blog posts.
    let object = {
      outerHTML: `${clonedGroup.outerHTML}`,
    };
    blogPostObject.push(object);
  }
  return blogPostObject;
}
