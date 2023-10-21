// Capiturar de elementos do DOM (variáveis)

let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
let btnAdicionarProduto01 = document.querySelector('#btn-adicionar-produto-01');
let quantidadeProduto01 = document.querySelector('#quantidade-produto-01');
let btnSubtrairProduto01 = document.querySelector('#btn-subtrair-produto-01');
let valorProduto01 = 11.66


let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

// Definir a manipulação dos elementos do capiturados(funções)

function atualizarSubtotal() {
    quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
    valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
    
}

atualizarSubtotal()

function adicionarUm() {
 // Adicionando 1 à quantidade do produto

  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;

   // Adicionando 1 à quantidade total

  subtotalInfo.quantidade = subtotalInfo.quantidade + 1

  // Adicionar o valor do produto subtotal

   subtotalInfo.valor = subtotalInfo.valor + valorProduto01


  //Atualizar o DOM
  atualizarSubtotal()

}

//Definir quando devem ser manipulados os elementos (eventos)
btnAdicionarProduto01.addEventListener('click', adicionarUm);



function subtrairUm() {

   // Adicionando 1 à quantidade do produto

   quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1;
  
   // Adicionando 1 à quantidade total

   subtotalInfo.quantidade = subtotalInfo.quantidade - 1

   // Adicionar o valor do produto subtotal

   subtotalInfo.valor = subtotalInfo.valor - valorProduto01


   //Atualizar o DOM
  atualizarSubtotal()
    
}

btnSubtrairProduto01.addEventListener('click', subtrairUm);



btnSubtrairProduto01.addEventListener('click', subtrairUm);
