const elementStart = document.querySelector('[data-start]') as HTMLButtonElement;
const elementReset = document.querySelector('[data-reset]') as HTMLButtonElement;
const elementStop = document.querySelector('[data-stop]') as HTMLButtonElement;

const elementValue = document.querySelector('[data-value]') as HTMLDivElement;
const blocks = document.querySelectorAll('.blocks');

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

elementStart.addEventListener('click', () => handleColor('startColorStopWatch', 'stopColorStopWatch', 'resetColorStopWatch'));
elementStop.addEventListener('click', () => handleColor('stopColorStopWatch', 'startColorStopWatch', 'resetColorStopWatch'));
elementReset.addEventListener('click', () => handleColor('resetColorStopWatch', 'startColorStopWatch', 'stopColorStopWatch'));

elementStart.addEventListener('click', () => forAnimation('startColorAnimation', 'stopColorAnimation', 'resetColorAnimation'));
elementStop.addEventListener('click', () => forAnimation('stopColorAnimation', 'startColorAnimation', 'resetColorAnimation'));
elementReset.addEventListener('click', () => forAnimation('resetColorAnimation', 'startColorAnimation', 'stopColorAnimation'));
