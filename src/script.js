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
