window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenVises");
}
// Lav variablen "btn", der henviser til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// Lav variablen "menu", der henviser til ".main-menu"
const menu = document.querySelector(".main-menu");

// Lav funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu() {
  menu.classList.toggle("kryds");
}

btn.addEventListener("click", toggleMenu);
