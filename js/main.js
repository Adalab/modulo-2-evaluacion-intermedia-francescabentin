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
let counter = 0;

button.addEventListener("click", (event) => {
event.preventDefault();
const number = parseInt(guessNumber.value);
counter++;

if (number > 100 || number < 1 ) {
    textHint.innerHTML = "El número debe estar entre 1 y 100";
}
else if (number > random ) {
    textHint.innerHTML = "Demasiado Alto";
    
}
    else if (number < random ) {
    textHint.innerHTML = "Demasiado bajo";
    
}
    else if (number === random ) {
    textHint.innerHTML = "Has ganado campeona!!!";
    counter = 0;
}
    else if (isNaN(number)) {
    textHint.innerHTML = "Escribir un numero";
}
   

textTried.innerHTML = `Numero de intentos: ${counter}`
});


