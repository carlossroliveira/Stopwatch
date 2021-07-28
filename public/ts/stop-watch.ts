/* ===== Start StopWatch ============================== */
import Timer from 'easytimer.js';

const timer = new Timer();

const elementStart = document.querySelector('[data-start]') as HTMLButtonElement;
const elementReset = document.querySelector('[data-reset]') as HTMLButtonElement;
const elementStop = document.querySelector('[data-stop]') as HTMLButtonElement;

const hours = document.querySelector('[data-StopWOne]') as HTMLSpanElement;
const minutes = document.querySelector('[data-StopWTwo]') as HTMLSpanElement;
const seconds = document.querySelector('[data-StopWThree]') as HTMLSpanElement;

export default function stopWatch(): void {
  timer.addEventListener('secondTenthsUpdated', () => {
    hours.innerText = timer.getTimeValues().hours.toString().padStart(2, '0');
    minutes.innerText = timer.getTimeValues().minutes.toString().padStart(2, '0');
    seconds.innerText = timer.getTimeValues().seconds.toString().padStart(2, '0');
  });

  elementStart.addEventListener('click', () => {
    timer.start({
      precision: 'secondTenths',
    });
  });

  elementStop.addEventListener('click', () => {
    timer.pause();
  });

  elementReset.addEventListener('click', () => {
    timer.stop();
    hours.innerHTML = '00';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
  });
}
