/* ===== Start Warinig ============================== */
const elementAlert = document.querySelector('[data-alert]') as HTMLDivElement;
const elementClose = document.querySelector('[data-close]') as HTMLDivElement;

const Modal = {
  handleWarning(
    classOneWarning: string,
    classTwoWarning: string,
    classThreeWarning: string,
  ): void {
    elementAlert.classList.add(classOneWarning);
    elementAlert.classList.add(classTwoWarning);
    elementAlert.classList.remove(classThreeWarning);
  },

  handleTime(classOneTime: string, classTwoTime: string): void {
    setTimeout(() => {
      elementAlert.classList.remove(classOneTime);
      elementAlert.classList.add(classTwoTime);
    }, 4000);
  },

  handleClose(classOneClose: string, classTwoClose: string): void {
    elementAlert.classList.remove(classOneClose);
    elementAlert.classList.add(classTwoClose);
  },

  handleRemoveAll(classOneRemoveAll: string): void {
    elementAlert.classList.remove(classOneRemoveAll);
  },
};

elementClose.addEventListener('click', () => Modal.handleClose('show', 'hide'));
/* ===== End Warinig ============================== */

/* ===== Start Main ============================== */
const elementStart = document.querySelector('[data-start]') as HTMLButtonElement;
const elementReset = document.querySelector('[data-reset]') as HTMLButtonElement;
const elementStop = document.querySelector('[data-stop]') as HTMLButtonElement;

const elementValue = document.querySelector('[data-value]') as HTMLDivElement;
const blocks = document.querySelectorAll('.blocks');
const blockMain = document.querySelector('.blockMain') as HTMLElement;

const handleColor = (
  activeColorStopWatch: string,
  removeColorOneStopWatch: string,
  removeColorTwoStopWatch: string,
): void => {
  elementValue.classList.add(activeColorStopWatch);
  elementValue.classList.remove(removeColorOneStopWatch);
  elementValue.classList.remove(removeColorTwoStopWatch);
};

const forAnimation = (
  activeColorAnimation: string,
  removeColorOneAnimation: string,
  removeColorTwoAnimation: string,
): void => {
  blocks.forEach((elements) => {
    elements.classList.add(activeColorAnimation);
    elements.classList.remove(removeColorOneAnimation);
    elements.classList.remove(removeColorTwoAnimation);
  });
};

/* ===== Start Color Stopwatch ============================== */
elementStart.addEventListener('click', () => handleColor('startColorStopWatch', 'stopColorStopWatch', 'resetColorStopWatch'));

elementStop.addEventListener('click', () => {
  if (blockMain?.classList.contains('startColorStopWatch')) {
    handleColor('stopColorStopWatch', 'startColorStopWatch', 'resetColorStopWatch');
  } else {
    Modal.handleWarning('show', 'showAlertOne', 'hide');
    Modal.handleRemoveAll('showAlertTwo');
    Modal.handleTime('show', 'hide');
  }
});

elementReset.addEventListener('click', () => {
  if (blockMain?.classList.contains('startColorStopWatch') || blockMain?.classList.contains('stopColorStopWatch')) {
    handleColor('resetColorStopWatch', 'startColorStopWatch', 'stopColorStopWatch');
  } else {
    Modal.handleWarning('show', 'showAlertTwo', 'hide');
    Modal.handleRemoveAll('showAlertOne');
    Modal.handleTime('show', 'hide');
  }
});
/* ===== Start Color Stopwatch ============================== */

/* ===== Start Color Spinner ============================== */
elementStart.addEventListener('click', () => forAnimation('startColorAnimation', 'stopColorAnimation', 'resetColorAnimation'));
elementStop.addEventListener('click', () => forAnimation('stopColorAnimation', 'startColorAnimation', 'resetColorAnimation'));
elementReset.addEventListener('click', () => forAnimation('resetColorAnimation', 'startColorAnimation', 'stopColorAnimation'));
