document.addEventListener('DOMContentLoaded', function () {
  // Seleciona os elementos relevantes
  const optionContainers = document.querySelectorAll('.option-container');
  const buyButtons = document.querySelectorAll('.buy-button');
  const text = document.querySelectorAll('.product-name');
  const price = document.querySelectorAll('.product-info');
  const cards = document.querySelectorAll('.card .mySwiper')

  // Função para atualizar o conteúdo e comportamento dos elementos ao clicar
  function updateProduct(index, selectedRadio) {
    const paymentLink = selectedRadio.value;
    buyButtons[index].setAttribute('href', paymentLink);

    const size = selectedRadio.className === 'small' ? " - P" : ' - M';
    const priceValue = selectedRadio.className === 'small' ? 'R$ 599,90' : 'R$ 699,90';

    price[index].querySelector('span').innerText = priceValue;
    text[index].textContent = text[index].innerText.replace(/ - [PM]/, '') + size;
    cards[index].querySelector('.medidas img').src = `./assets/products/${selectedRadio.className}.png`;

    // Desmarca o checkbox
    optionContainers[index].parentNode.querySelector('input[type="checkbox"]').checked = false;
  }

  // Adiciona eventos de clique aos contêineres de opção
  optionContainers.forEach((container, index) => {
    container.addEventListener('click', function () {
      const selectedRadio = container.querySelector('input[type="radio"]:checked');
      if (selectedRadio) {
        updateProduct(index, selectedRadio);
      }
    });
  });

  // Adiciona eventos de clique aos botões de compra
  buyButtons.forEach((button) => {
    button.addEventListener('click', function (event) {
      event.preventDefault(); // Impede o comportamento padrão de navegação
      const paymentLink = button.getAttribute('href');
      if (paymentLink) {
        window.open(paymentLink, '_blank'); // Redireciona para o link de pagamento
      }
    });
  });

// // Defina uma função para lidar com a configuração do swiper
//   function configurarSwiper(container) {
//     // Selecione os swiper-slides dentro deste contêiner específico
//     var slides = container.children;
//
//     // Adicione um ouvinte de evento de clique a cada swiper-slide neste contêiner
//     for (var j = 0; j < slides.length; j++) {
//       slides[j].addEventListener('click', function() {
//         // Remova a classe 'selected' de todos os swiper-slides neste contêiner
//         for (var k = 0; k < slides.length; k++) {
//           slides[k].classList.remove('selected');
//         }
//         // Adicione a classe 'selected' apenas ao swiper-slide clicado neste contêiner
//         this.classList.add('selected');
//       });
//     }
//   }
//
// // Selecione todos os contêineres swiper com a classe .fenrir-Swiper
//   var containers = document.querySelectorAll('.fenrir-Swiper');
//
// // Chame a função de configuração do swiper para cada contêiner encontrado
//   for (var i = 0; i < containers.length; i++) {
//     configurarSwiper(containers[i]);
//   }

});
