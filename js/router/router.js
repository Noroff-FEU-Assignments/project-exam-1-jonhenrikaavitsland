export function router() {
  switch (location.pathname) {
    case "/blog/post/":
      return import("../pages/post.js");
    case "/blog/":
      return import("../pages/blog.js");
    case "/about/":
      return import("../pages/about.js");
    case "/contact/":
      return import("../pages/contact.js");
    case "/":
    case "/index.html":
      return import("../pages/home.js");
  }
}
