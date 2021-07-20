"use strict";
const elementStart = document.querySelector('[data-start]');
const elementReset = document.querySelector('[data-reset]');
const elementStop = document.querySelector('[data-stop]');
const elementValue = document.querySelector('[data-value]');
const blocks = document.querySelectorAll('.blocks');
const handleColor = (activeColorStopWatch, removeColorOneStopWatch, removeColorTwoStopWatch) => {
    elementValue.classList.add(activeColorStopWatch);
    elementValue.classList.remove(removeColorOneStopWatch);
    elementValue.classList.remove(removeColorTwoStopWatch);
};
const forAnimation = (activeColorAnimation, removeColorOneAnimation, removeColorTwoAnimation) => {
    blocks.forEach((elements) => {
        elements.classList.add(activeColorAnimation);
        elements.classList.remove(removeColorOneAnimation);
        elements.classList.remove(removeColorTwoAnimation);
    });
};
elementStart.addEventListener('click', () => handleColor('startColorStopWatch', 'stopColorStopWatch', 'resetColorStopWatch'));
elementStop.addEventListener('click', () => handleColor('stopColorStopWatch', 'startColorStopWatch', 'resetColorStopWatch'));
elementReset.addEventListener('click', () => handleColor('resetColorStopWatch', 'startColorStopWatch', 'stopColorStopWatch'));
elementStart.addEventListener('click', () => forAnimation('startColorAnimation', 'stopColorAnimation', 'resetColorAnimation'));
elementStop.addEventListener('click', () => forAnimation('stopColorAnimation', 'startColorAnimation', 'resetColorAnimation'));
elementReset.addEventListener('click', () => forAnimation('resetColorAnimation', 'startColorAnimation', 'stopColorAnimation'));
