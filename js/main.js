"use strict";

// html elements
const inputNumber = document.querySelector(".js-inputNumber");
const button = document.querySelector(".js-btn");
const textHint = document.querySelector(".js-hint");
const textTried = document.querySelector(".js-tried");
const reset = document.querySelector(".js-btn-reset");

// random number function
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

let random = getRandomNumber(100);
console.log(random);


// write function
function writeMsg(msg) {
    textHint.innerHTML = msg;
}

// incrementNumber and paint function
const incrementNumber = (number) => {
    if (number !== random) {
        counter++;
    }
    textTried.innerHTML = `Numero de intentos: ${counter}`
}

// compare number function
function compareNumber() {
    const number = parseInt(inputNumber.value);

    if (number > 100 || number < 1) {
        writeMsg("El número debe estar entre 1 y 100");
    }
    else if (number > random) {
        writeMsg("Demasiado Alto");
    }
    else if (number < random) {
        writeMsg("Demasiado bajo");
    }
    else if (number === random) {
        writeMsg("Has ganado campeona!!!");
    }
    else if (isNaN(number)) {
        writeMsg("Escribir un numero");
    }
};

// handleClickBtn function
let counter = 0;

function handleClickBtn() {
    let number = parseInt(inputNumber.value);

    if (!isNaN(number)) {
        compareNumber();
        incrementNumber(number);
    }
    inputNumber.value = "";
}

// reset btn
function resetAll() {
    counter = 0;
    random = getRandomNumber(100);
    inputNumber.value = "";
    writeMsg("Escribe un numero para jugar");
    textTried.innerHTML = `Numero de intentos: ${counter}`;
}

// keydown event
function pressEnter(event) {
    if (event.key === 'Enter') {
        handleClickBtn();
    }
}

// button event listener
document.addEventListener("keydown", pressEnter);
button.addEventListener("click", handleClickBtn);
reset.addEventListener('click', resetAll);




