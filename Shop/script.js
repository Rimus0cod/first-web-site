function loader() {
    document.querySelector('.loader-conteiner').classList.add('active')
}

function fadeOut() {
    setTimeout(loader, 1200)
}

fadeOut();  