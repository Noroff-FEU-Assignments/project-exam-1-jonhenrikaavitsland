export function router() {
  switch (location.pathname) {
    case "/blog/post/":
      return import("../pages/post.js");
    case "/blog/":
      return import("../pages/blog.js");
    case "/about/":
      return import("../pages/about.js");
    case "/contact/":
      // do something
      break;
    case "/":
      // do something
      break;
  }
}
