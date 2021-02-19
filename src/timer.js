import { dateCalcRenderBtn } from './main.js';
export const timer = (start) => {
  let current = start;
  const timerCounter = document.querySelector('#timer__counter');
  const timerStopBtn = document.querySelector('#timer__stop');
  const timerSound = new Audio('./audio/timer.mp3');
  dateCalcRenderBtn.addEventListener('click', () => {
    clearInterval(timerId);
  });
  timerStopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    timerCounter.innerHTML = '';
  });

  function startTimer() {
    timerCounter.innerHTML = current + ' c';
    if (current == 0) {
      timerSound.play();
      clearInterval(timerId);
      timerCounter.innerHTML = '';
    }
    current--;
  }
  startTimer();
  let timerId = setInterval(startTimer, 1000);
};
