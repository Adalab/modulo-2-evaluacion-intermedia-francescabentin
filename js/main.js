"use strict";

// html elements

const guessNumber = document.querySelector(".js-inputNumber");
const button = document.querySelector(".js-btn");
const textHint = document.querySelector(".js-hint");
const textTried = document.querySelector(".js-tried");

// random number function

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const random = getRandomNumber(100);
console.log(random);

// add click event to button

button.addEventListener("click", () => {

const number = parseInt(guessNumber.value);
let counter = 0;

if (number > random ) {
    textHint.innerHTML = "Demasiado Alto";
    counter++;
}
    else if (number < random ) {
    textHint.innerHTML = "Demasiado bajo";
    counter++;
}
    else if (number === random ) {
    textHint.innerHTML = "Has ganado campeona!!!";
    counter = 0;
}
    else if (isNaN(number)) {
    textHint.innerHTML = "Escribir un numero";
}
    else if (number > 100 || number < 1 ) {
    textHint.innerHTML = "El número debe estar entre 1 y 100";
}

textTried.innerHTML = `Numero de intentos: ${counter}`
});


