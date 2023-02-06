"use strict";
function solveEquation(a, b, c) {
  let arr = [];

  if (a === 0) {
    return 'Уравнение не является квадратным';
  } else {
    let discriminant = b ** 2 - 4 * a * c;

    if (discriminant === 0) {
      arr = [- b / (2 * a)];
    } else if (discriminant > 0) {
      arr = [(- b + Math.sqrt(discriminant)) / (2 * a),
             (- b - Math.sqrt(discriminant)) / (2 * a),
            ]
    } /* скрипт для тестирования (tests.js) не верно работает,
         если в первом корне будет вычисляться 
         "минус" квадратный корень из дискриминанта.
      */ 
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // т.к. в начале уже установлено "use ctrict"; повторной активации строго режима не требуется
  let percentIn = parseFloat(percent); // преобрузуем переменные в числа
  let contributionIn = parseFloat(contribution);
  let amountIn = parseFloat(amount);
  let countMonthsIn = parseInt(countMonths);

  if (Number.isNaN(percentIn)) {
    return console.log('Параметр <процентная ставка> содержит неправильное значение ' + '<' + percent + '>');
  }

  if (Number.isNaN(contributionIn)) {
    console.log(`Параметр <первоначальный взнос> содержит неправильное значение <${contribution}>`);
    return; 
  }

  if (Number.isNaN(amountIn)) {
    return console.log(`Параметр <amount> содержит неправильное значение <${amount}>`);
  } // пробовал разными способами пройти тест, вернув в нескольких "видах" строку, - не получается.




} 