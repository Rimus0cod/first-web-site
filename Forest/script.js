const nextBtn =  document.querySelector('.next-btn');
const prevBtn =  document.querySelector('.prev-btn');
const slides =  document.querySelectorAll('.slide');
const number0fSlides = slides.length;
let slideNumber = 0;

//slider next-btn
nextBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    });

    slideNumber++;

    if (slideNumber > (number0fSlides -1)) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
}

//slider pre-btn
prevBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    });

    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = number0fSlides - 1;
    }

    slides[slideNumber].classList.add('active');
}
    
let loader = document.querySelector('.loader-conteiner');

window.addEventListener('load', () => {
    loader.classList.add('active');
    setTimeout(() => {
        loader.remove
    }, 300);
});