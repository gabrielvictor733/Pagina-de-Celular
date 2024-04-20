/* INCIALIZAÇÃO DE CONSTANTES */
const selectMemory = document.querySelector(".opcoes__select"); //* seleciona o primeiro select (GB)
const selectQuantity = document.querySelectorAll(".opcoes__select")[1]; //* seleciona o segundo select (quantidade)
const totalPriceElement = document.getElementById("totalPrice");
const buyButton = document.getElementById("buy");
const addToCart = document.getElementById("addToCart");
const dot = document.querySelector(".dot"); // pequeno ponto no canto supeior direito do ícone do carrinho

/* FUNÇÃO ONCLICK DO BOTÃO DE ADICIONAR AO CARRINHO */
addToCart.addEventListener("click", (e) => {
  e.preventDefault();

  if (addToCart.classList.contains("adicionado")) {
    // se já tiver adicionado ao carrinho
    addToCart.classList.remove("adicionado");

    dot.style.visibility = "hidden";
  } else {
    // se ainda não tiver adicionado ao carrinho
    addToCart.classList.add("adicionado");
    dot.style.visibility = "visible";
    addToCart.textContent = "Remover do carrinho";
  }
});

/* FUNÇÃO PARA CALCULAR O PREÇO TOTAL */
function calcTotalPrice(memory, quantity) {
  const basePrice = 600; // Preço base do produto
  const memoryPriceIncreases = {
    1: 0, // sem aumento para 4GB
    2: 100, // aumento de preço para 8GB
    3: 200, // aumento de preço para 16GB
    4: 300, // aumento de preço para 32GB
    5: 400, // aumento de preço para 64GB
  };
  const additionalPrice = memoryPriceIncreases[memory]; //define o aumento de preço com base na memória
  return (basePrice + additionalPrice) * quantity;
}

/* FUNÇÃO PARA O BOTÃO DE COMPRA */
buyButton.addEventListener("click", function (event) {
  event.preventDefault();
  const memory = selectMemory.value;
  const quantity = parseInt(selectQuantity.value);
  const totalPrice = calcTotalPrice(memory, quantity); // calcula o preço com os parâmetros recebidos
  alert(`Compra efetuado com sucesso no valor de: R$${totalPrice.toFixed(2)}`);
});

/* FUNÇÃO PARA ATUALIZAR O PREÇO TOTAL */
function updateTotalPrice() {
  const memory = selectMemory.value;
  const quantity = parseInt(selectQuantity.value);
  const totalPrice = calcTotalPrice(memory, quantity);
  totalPriceElement.textContent = `Preço total: R$${totalPrice.toFixed(2)}`;
}

selectMemory.addEventListener("change", updateTotalPrice); //sempre que o select de mudar, atualiza
selectQuantity.addEventListener("change", updateTotalPrice); //sempre que o select de mudar, atualiza

updateTotalPrice(); // chama a função no carregamento da página