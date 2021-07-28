import stopWatch from './stop-watch';
import { Modal } from './warinig';
stopWatch();

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
elementStart.addEventListener('click', () =>
  handleColor('startColorStopWatch', 'stopColorStopWatch', 'resetColorStopWatch'),
);

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
  if (
    blockMain?.classList.contains('startColorStopWatch') ||
    blockMain?.classList.contains('stopColorStopWatch')
  ) {
    handleColor('resetColorStopWatch', 'startColorStopWatch', 'stopColorStopWatch');
  } else {
    Modal.handleWarning('show', 'showAlertTwo', 'hide');
    Modal.handleRemoveAll('showAlertOne');
    Modal.handleTime('show', 'hide');
  }
});
/* ===== Start Color Stopwatch ============================== */

/* ===== Start Color Spinner ============================== */
elementStart.addEventListener('click', () =>
  forAnimation('startColorAnimation', 'stopColorAnimation', 'resetColorAnimation'),
);
elementStop.addEventListener('click', () =>
  forAnimation('stopColorAnimation', 'startColorAnimation', 'resetColorAnimation'),
);
elementReset.addEventListener('click', () =>
  forAnimation('resetColorAnimation', 'startColorAnimation', 'stopColorAnimation'),
);
