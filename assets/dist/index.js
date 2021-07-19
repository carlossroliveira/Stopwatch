"use strict";
const elementStart = document.querySelector('[data-start]');
const elementReset = document.querySelector('[data-reset]');
const elementStop = document.querySelector('[data-stop]');
const elementValue = document.querySelector('[data-value]');
const teste = document.querySelectorAll('.blocks');
const handleColor = (activeColor, removeColorOne, removeColorTwo) => {
    elementValue.classList.add(activeColor);
    elementValue.classList.remove(removeColorOne);
    elementValue.classList.remove(removeColorTwo);
};
function myPauseFunction() {
    teste.forEach((element) => {
        element.classList.add('breack');
    });
}
elementStart.addEventListener('click', () => handleColor('activeColor', 'stopColor', 'resetColor'));
elementReset.addEventListener('click', () => handleColor('resetColor', 'activeColor', 'stopColor'));
elementStop.addEventListener('click', myPauseFunction);
