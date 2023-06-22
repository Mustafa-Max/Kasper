const tButton = document.getElementById("t-menu");
const menu = document.querySelector(".menu");
let ariaHidden = true;

function testNum() {
  if (ariaHidden) {
    ariaHidden = false;
  } else {
    ariaHidden = true;
  }

  tButton.setAttribute("aria-pressed", !ariaHidden);
  menu.setAttribute("aria-hidden", ariaHidden);
}
