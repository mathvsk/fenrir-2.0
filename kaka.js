function initializeSwiper() {
  if (window.innerWidth >= 768) { // Troque 768 pelo tamanho desejado
    new Swiper('.nested-slider-h', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}
new Swiper('.nested-slider-h .nested-slider-child', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".child-navi-next",
    prevEl: ".child-navi-prev",
  },
})

initializeSwiper();

// Adicione um ouvinte de redimensionamento da janela para ajustar o Swiper conforme a tela muda de tamanho
window.addEventListener('resize', function () {
  initializeSwiper();
});