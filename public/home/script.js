const container = document.querySelector('.conteiner');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

let loader = document.querySelector('.loader-conteiner');

window.addEventListener('load', () => {
    loader.classList.add('active');
    setTimeout(() => {
        loader.remove
    }, 300);
});