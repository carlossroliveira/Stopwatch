"use strict";
const elementAlert = document.querySelector('[data-alert]');
const elementClose = document.querySelector('[data-close]');
const Modal = {
    handleWarning(classOneWarning, classTwoWarning, classThreeWarning) {
        elementAlert.classList.add(classOneWarning);
        elementAlert.classList.add(classTwoWarning);
        elementAlert.classList.remove(classThreeWarning);
    },
    handleTime(classOneTime, classTwoTime) {
        setTimeout(() => {
            elementAlert.classList.remove(classOneTime);
            elementAlert.classList.add(classTwoTime);
        }, 4000);
    },
    handleClose(classOneClose, classTwoClose) {
        elementAlert.classList.remove(classOneClose);
        elementAlert.classList.add(classTwoClose);
    },
    handleRemoveAll(classOneRemoveAll) {
        elementAlert.classList.remove(classOneRemoveAll);
    },
};
elementClose.addEventListener('click', () => Modal.handleClose('show', 'hide'));
const elementStart = document.querySelector('[data-start]');
const elementReset = document.querySelector('[data-reset]');
const elementStop = document.querySelector('[data-stop]');
const elementValue = document.querySelector('[data-value]');
const blocks = document.querySelectorAll('.blocks');
const blockMain = document.querySelector('.blockMain');
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
elementStop.addEventListener('click', () => {
    if (blockMain === null || blockMain === void 0 ? void 0 : blockMain.classList.contains('startColorStopWatch')) {
        handleColor('stopColorStopWatch', 'startColorStopWatch', 'resetColorStopWatch');
    }
    else {
        Modal.handleWarning('show', 'showAlertOne', 'hide');
        Modal.handleRemoveAll('showAlertTwo');
        Modal.handleTime('show', 'hide');
    }
});
elementReset.addEventListener('click', () => {
    if ((blockMain === null || blockMain === void 0 ? void 0 : blockMain.classList.contains('startColorStopWatch'))
        || (blockMain === null || blockMain === void 0 ? void 0 : blockMain.classList.contains('stopColorStopWatch'))) {
        handleColor('resetColorStopWatch', 'startColorStopWatch', 'stopColorStopWatch');
    }
    else {
        Modal.handleWarning('show', 'showAlertTwo', 'hide');
        Modal.handleRemoveAll('showAlertOne');
        Modal.handleTime('show', 'hide');
    }
});
elementStart.addEventListener('click', () => forAnimation('startColorAnimation', 'stopColorAnimation', 'resetColorAnimation'));
elementStop.addEventListener('click', () => forAnimation('stopColorAnimation', 'startColorAnimation', 'resetColorAnimation'));
elementReset.addEventListener('click', () => forAnimation('resetColorAnimation', 'startColorAnimation', 'stopColorAnimation'));
