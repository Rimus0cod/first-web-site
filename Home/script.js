const container = document.querySelector('.conteiner');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

function loader() {
    document.querySelector('.loader-conteiner').classList.add('active')
}

function fadeOut() {
    setTimeout(loader, 1000)
}

fadeOut();