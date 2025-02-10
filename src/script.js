// Inicializa a biblioteca AOS (Animate On Scroll)
AOS.init();

// Função para rolagem suave
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});

// Script para o menu de navegação responsivo
const mobileMenu = document.getElementById("mobile-menu");
const navUl = document.querySelector("nav ul");

mobileMenu.addEventListener("click", () => {
  navUl.classList.toggle("active"); // Adiciona/remove a classe "active"
});
