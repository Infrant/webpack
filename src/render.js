export const dateCalcRender = () => {
  return `
    <form id="datecalc">
      <h3>Калькулятор дат</h3>
      <label>
        <strong>Первая дата:</strong>
        <input type="date" name="firstDate" />
      </label>
      <label>
        <strong>Вторая дата:</strong>
        <input type="date" name="secondDate" />
      </label>
      <button type="submit">Расчитать промежуток</button>
      <p id="datecalc__result"></p>
    </form>
    `;
};
export const timerRender = () => {
  return `
    <div id="timer">
      <h3>Таймер</h3>
      <input type="text" id="timer__value" value="10" />
      <button id="timer__start">Старт</button>
      <button id="timer__stop">Стоп</button>
      <p id="timer__counter"></p>
    </div>
`;
};
