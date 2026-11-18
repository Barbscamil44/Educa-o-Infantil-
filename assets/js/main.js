// Ano do rodapé
var y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Mostra o botão fixo no celular depois de rolar o topo da página
var sticky = document.querySelector('.sticky-cta');
var offer = document.getElementById('oferta');
function toggleSticky() {
  if (!sticky) return;
  var past = window.scrollY > 500;
  var rect = offer ? offer.getBoundingClientRect() : null;
  var onOffer = rect && rect.top < window.innerHeight && rect.bottom > 0;
  sticky.classList.toggle('show', past && !onOffer);
}
window.addEventListener('scroll', toggleSticky, { passive: true });
toggleSticky();
