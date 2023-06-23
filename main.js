const tButton = document.getElementById("t-menu");
const menu = document.querySelector(".menu");
let ariaHidden = true;

function iconMenu() {
  if (ariaHidden) {
    ariaHidden = false;
  } else {
    ariaHidden = true;
  }

  tButton.setAttribute("aria-pressed", !ariaHidden);
  menu.setAttribute("aria-hidden", ariaHidden);
}

navbar = document.querySelector(".menu").querySelectorAll("a");

navbar.forEach(element => {
  element.addEventListener("click", function () {
    navbar.forEach(nav => nav.classList.remove("active"))

    this.classList.add("active")
  })
});