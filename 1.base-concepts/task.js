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
  let contributionIn = parseFloat(contribution); // предположим, что числа могут 
  let amountIn = parseFloat(amount);             // быть в общем случае - дробные.
  let countMonthsIn = parseInt(countMonths); // количество месяцев обычно число целое

      // ниже идут проверки на вводимые даные - должно быть число.
  if (Number.isNaN(percentIn)) {
    return console.log('Параметр \"Процентная ставка\" содержит неправильное значение ' + '<' + percent + '>');
  } else if (Number.isNaN(contributionIn)) {
    console.log(`Параметр \"Начальный взнос\" содержит неправильное значение <${contribution}>`);
    return; 
  } else if (Number.isNaN(amountIn)) {
    return `Параметр \"Общая стимость\" содержит неправильное значение <${amount}>`;
  } else { // пробовал разными способами пройти тест, вернув в нескольких "видах" строку, - не получается.
  let creditBody = amountIn - contributionIn; // вычисление тела кредита
  let percentMonth = percentIn / 12 / 100 ;
  let everyMonthPay = creditBody * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonthsIn) - 1)));
  let allAmount = everyMonthPay * countMonthsIn;
  
  allAmount = Number(allAmount.toFixed(2));

  console.log(allAmount);

  return allAmount;
  }
} 
