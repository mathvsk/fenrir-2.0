document.addEventListener('DOMContentLoaded', function () {
  const optionContainers = document.querySelectorAll('.option-container');
  const buyButtons = document.querySelectorAll('.buy-button');

  optionContainers.forEach((container, index) => {
    container.addEventListener('click', function () {
      const selectedRadio = container.querySelector('input[type="radio"]:checked');

      if (selectedRadio) {
        const paymentLink = selectedRadio.value;
        buyButtons[index].setAttribute('href', paymentLink);

        this.parentNode.querySelector('input[type="checkbox"]').checked = false
      }
    });
  });

  buyButtons.forEach((button) => {
    button.addEventListener('click', function (event) {
      event.preventDefault(); // Impede o comportamento padrão de navegação
      const paymentLink = button.getAttribute('href');

      if (paymentLink) {
        window.open(paymentLink, '_blank');; // Redireciona para o link de pagamento
      }
    });
  });
});
