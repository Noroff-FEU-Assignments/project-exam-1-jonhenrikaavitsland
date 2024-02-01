export function makeHeroRedirect() {
  const heroTop = document.querySelector(".hero-img");
  const heroBottom = document.querySelector(".hero-bottom");

  heroTop.addEventListener("click", redirectToAbout);
  heroBottom.addEventListener("click", redirectToAbout);

  function redirectToAbout() {
    window.location.href = "./about/";
  }
}
