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

const getRandom = getRandomNumber(100);
console.log(getRandom);

// add click event to button

button.addEventListener("click", () => {
    console.log(`el numero es ${guessNumber.value}`);
});
