const nav_icon = document.querySelector("#nav_icon");
const nav_container = document.querySelector("#nav_responsive_container");

/////////////////////////////////

nav_icon.addEventListener("click", () => {
  nav_container.classList.toggle("hidden");
  //   nav_container.classList.toggle("fade-in");
});
