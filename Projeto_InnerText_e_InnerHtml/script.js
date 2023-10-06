const elementH1 = document.getElementById("titulo")
const elementA = document.querySelector("a")
const elementUL = document.querySelector("ul")
const elementOL = document.getElementById("lista-ordenada")

elementH1.innerText = 'Titulo principal'
elementA.innerHTML = 'Acesse aqui o site da Proz Educação'

elementUL.innerHTML = `<li>DOM</li>
                       <li>InnerHtml</li>
                       <li>InnerText</li> `

elementOL.innerHTML = `<li><a href="https://www.w3schools.com/html/">HTML</a></li>
                       <li><a href="https://www.w3schools.com/Css/">CSS</a></li>
                       <li><a href="https://www.w3schools.com/js/DEFAULT.asp">JAVASCRIPT</a></li> `                       



