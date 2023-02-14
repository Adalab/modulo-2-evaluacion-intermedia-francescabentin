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

const minNumber = 1;
const maxNumber = 100;
const number = (guessNumber.value);
let counter = 0;

if (number > random ) {
    textHint.innerHTML = "Demasiado Alto";
}
    else if (number < random ) {
    textHint.innerHTML = "Demasiado bajo";
}
    else if (number === random ) {
    textHint.innerHTML = "Has ganado campeona!!!";
}
    else if (number < minNumber || number > maxNumber) {
    textHint.innerHTML = "El número debe estar entre 1 y 100";
}
    else if (isNaN(number)) {
    textHint.innerHTML = "Escribir un numero";
    }

}); 


