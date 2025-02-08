// Inicializa a biblioteca AOS (Animate On Scroll)
AOS.init();

// Função para rolagem suave
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  });
}
