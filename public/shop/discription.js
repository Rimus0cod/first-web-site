const myElement1 = document.getElementById('div1');
const myButton1 = document.getElementById('btn1');
const myElement2 = document.getElementById('div2');
const myButton2 = document.getElementById('btn2');
const myElement3 = document.getElementById('div3');
const myButton3 = document.getElementById('btn3');
const myElement4 = document.getElementById('div4');
const myButton4 = document.getElementById('btn4');
const myElement5 = document.getElementById('div5');
const myButton5 = document.getElementById('btn5');
const myElement6 = document.getElementById('div6');
const myButton6 = document.getElementById('btn6');

myButton1.addEventListener('click', () => {
    if (myElement1.classList.contains('active')) {
        myElement1.classList.remove('active'); // Удаляет класс, если он есть
    } else {
        myElement1.classList.add('active'); // Добавляет класс, если его нет
    }
});

myButton2.addEventListener('click', () => {
    if (myElement2.classList.contains('active')) {
        myElement2.classList.remove('active');
    } else {
        myElement2.classList.add('active'); 
    }
});

myButton3.addEventListener('click', () => {
    if (myElement3.classList.contains('active')) {
        myElement3.classList.remove('active');
    } else {
        myElement3.classList.add('active'); 
    }
});

myButton4.addEventListener('click', () => {
    if (myElement4.classList.contains('active')) {
        myElement4.classList.remove('active'); 
    } else {
        myElement4.classList.add('active');
    }
});

myButton5.addEventListener('click', () => {
    if (myElement5.classList.contains('active')) {
        myElement5.classList.remove('active');
    } else {
        myElement5.classList.add('active');
    }
});

myButton6.addEventListener('click', () => {
    if (myElement6.classList.contains('active')) {
        myElement6.classList.remove('active'); 
    } else {
        myElement6.classList.add('active');
    }
});


// Получаем все кнопки с классами "add" и "added"
const addButtons = document.querySelectorAll(".add");
const addedButtons = document.querySelectorAll(".added");

// Обрабатываем каждую кнопку с классом "add"
addButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Добавляем/удаляем класс "active" текущей кнопке
        button.classList.toggle("active");

        // Добавляем/удаляем класс "active" соответствующей кнопке "added"
        const addedButton = addedButtons[index];
        if (addedButton) {
            addedButton.classList.toggle("active");
        }
    });
});

// Обрабатываем каждую кнопку с классом "added"
addedButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Убираем класс "active" у текущей кнопки "added"
        button.classList.remove("active");

        // Убираем класс "active" у соответствующей кнопки "add"
        const addButton = addButtons[index];
        if (addButton) {
            addButton.classList.remove("active");
        }
    });
});
