export function returnBlogPostObject(divElement) {
  let blogPostObject = [];
  for (let i = 0; i < divElement.length; i++) {
    const group = divElement[i];

    let object = {
      innerHTML: `${group.innerHTML}`,
    };
    blogPostObject.push(object);
  }
  return blogPostObject;
}
