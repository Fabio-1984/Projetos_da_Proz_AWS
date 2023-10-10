let titulo = document.querySelector('body')


titulo.innerHTML = '<h1 id="titulo">Titulo</h1><br> <h2>Produto à Venda</h2>'

let elementos = document.createElement('ul')

elementos.innerHTML = `<li>Nome: </li> <li>Descrição: </li> <li>Preço: </li>`


let produto = document.querySelector('h2')

produto.appendChild(elementos)

