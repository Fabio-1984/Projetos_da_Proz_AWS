let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");



let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;

let btnAdicionarProduto01 = document.querySelector('#btn-adicionar-produto-01');



let quantidadeProduto01 = document.querySelector('#quantidade-produto-01');



function adicionarUm() {

  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;

}



btnAdicionarProduto01.addEventListener('click', adicionarUm);



let btnSubtrairProduto01 = document.querySelector('#btn-subtrair-produto-01');



function subtrairUm() {
 if(quantidadeProduto01.value > 0){
  quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1;
 }
 


}



btnSubtrairProduto01.addEventListener('click', subtrairUm);