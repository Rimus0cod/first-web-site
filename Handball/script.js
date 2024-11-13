function loader() {
    document.querySelector('.loader-conteiner').classList.add('active')
}

function fadeOut() {
    setTimeout(loader, 1500)
}

fadeOut();