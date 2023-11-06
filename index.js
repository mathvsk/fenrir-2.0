
let a = document.querySelector('.nested-slider-h')
let b = document.querySelector('.nested-slider-h .nested-slider-child')

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

var swiperH; // Variável global para armazenar o Swiper

function criarSwiperH() {
swiperH = new Swiper(a, {
  loop: true,            
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});
}

// Crie o Swiper quando a página for carregada
window.addEventListener('load', function() {
criarSwiperH();
});

// Destrua o Swiper quando a largura da tela for maior que 1080 pixels
window.addEventListener('resize', function() {
var larguraTela = window.innerWidth;

if (larguraTela > 1080) {
  if (swiperH) {
      swiperH.destroy();
      swiperH = null; // Limpe a referência
  }
}
});

// Crie o Swiper novamente quando a largura da tela for menor que 1080 pixels
window.addEventListener('resize', function() {
var larguraTela = window.innerWidth;

if (larguraTela <= 1080 && swiperH === null) {
  criarSwiperH();
}
});