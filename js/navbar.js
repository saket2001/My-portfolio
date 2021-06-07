const nav_icon = document.querySelector("#nav_icon");
const nav_container = document.querySelector("#nav_responsive_container");
const btn = document.querySelector("#switch_box");
const moonLogo = document.querySelector(".moon");
const sunLogo = document.querySelector(".sun");

/////////////////////////////////
// navbar
nav_icon.addEventListener("click", () => {
  nav_container.classList.toggle("hidden");
  //   nav_container.classList.toggle("fade-in");
});

// dark mode switch
btn.addEventListener("click", (e) => {
  const clicked = e.target;
  // change icon
  if (clicked.classList.contains("sun")) {
    sunLogo.classList.toggle("hidden");
    moonLogo.classList.toggle("hidden");
    moonLogo.src = "./icons/nightlight_round_white_36dp.svg";
    nav_icon.querySelector("img").src = "./icons/menu_white_36dp.svg";
  }
  if (clicked.classList.contains("moon")) {
    sunLogo.classList.toggle("hidden");
    moonLogo.classList.toggle("hidden");
    nav_icon.querySelector("img").src = "./icons/menu_black_36dp.svg";
  }
  // change colors
  document.querySelector("body").classList.toggle("dark-mode");
});
