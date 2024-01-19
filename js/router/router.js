export function router() {
  switch (location.pathname) {
    case "/blog/":
      // dp something
      break;
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
