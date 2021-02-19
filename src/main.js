import { diffDates, diffToHtml } from './datecalc.js'; // 1
import { formatError } from './utils.js'; // 2
import { dateCalcRender, timerRender } from './render.js';
import { timer } from './timer.js';
import '../styles/style.css';
import '../audio/timer.mp3';
export const dateCalcRenderBtn = document.querySelector('#datecalc__render');
const containerEl = document.querySelector('#container');
dateCalcRenderBtn.addEventListener('click', () => {
  containerEl.innerHTML = dateCalcRender();
  const dateCalcForm = document.getElementById('datecalc');
  const dateCalcResult = document.getElementById('datecalc__result');
  dateCalcForm.addEventListener('submit', handleCalcDates);
  function handleCalcDates(event) {
    dateCalcResult.innerHTML = '';
    event.preventDefault();
    let { firstDate, secondDate } = event.target.elements;
    (firstDate = firstDate.value), (secondDate = secondDate.value);
    if (firstDate && secondDate) {
      const diff = diffDates(firstDate, secondDate);
      dateCalcResult.innerHTML = diffToHtml(diff);
    } else
      dateCalcResult.innerHTML = formatError(
        'Для расчета промежутка необходимо заполнить оба поля'
      );
  }
});
const timerRenderBtn = document.querySelector('#timer__render');
timerRenderBtn.addEventListener('click', () => {
  containerEl.innerHTML = timerRender();
  const timerStartBtn = document.querySelector('#timer__start');
  const timerValue = document.querySelector('#timer__value');
  const timerCounterMain = document.querySelector('#timer__counter');
  timerStartBtn.addEventListener('click', () => {
    const userNumber = +[...timerValue.value]
      .filter((el) => typeof +el === 'number' && !isNaN(+el))
      .join('');
    if (timerCounterMain.textContent == '' && userNumber !== 0) {
      timer(parseInt(userNumber));
    }
  });
});
