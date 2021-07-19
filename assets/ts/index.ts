const elementStart = document.querySelector('[data-start]') as HTMLButtonElement;
const elementReset = document.querySelector('[data-reset]') as HTMLButtonElement;
const elementStop = document.querySelector('[data-stop]') as HTMLButtonElement;

const elementValue = document.querySelector('[data-value]') as HTMLDivElement;

const teste = document.querySelectorAll('.blocks') as unknown;

const handleColor = (
  activeColor: string,
  removeColorOne: string,
  removeColorTwo: string,
): void => {
  elementValue.classList.add(activeColor);
  elementValue.classList.remove(removeColorOne);
  elementValue.classList.remove(removeColorTwo);
};

function myPauseFunction(): void {
  teste.forEach((element: any) => {
    element.classList.add('breack');
  });
}

elementStart.addEventListener('click', () => handleColor('activeColor', 'stopColor', 'resetColor'));
elementReset.addEventListener('click', () => handleColor('resetColor', 'activeColor', 'stopColor'));
elementStop.addEventListener('click', myPauseFunction);
