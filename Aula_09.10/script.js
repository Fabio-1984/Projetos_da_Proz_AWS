const login = document.querySelector('h2')
console.log(login)

login.style.color = 'red';
login.style.fontSize = '60px'


const botao = document.querySelector('button')

botao.style.backgroundColor = 'green';
botao.style.color = '#ffffff'
botao.style.borderRadius = '7px'
botao.style.borderColor = '#ffffff'


const usernameInput = document.querySelector('#login-usuario')

usernameInput.classList.add('correct');

const errorMessage = document.querySelector('.error-text');

//errorMessage.classList.add('visible');


const usernameInputA = document.querySelector('#login-senha')

usernameInputA.classList.add('error');