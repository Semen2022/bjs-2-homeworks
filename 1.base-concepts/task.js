"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  if (a === 0) {
    return 'Уравнение не является квадратным';
  } else {
    let discriminant = b ** 2 - 4 * a * c;

    if (discriminant === 0) {
      arr = [- b / (2 * a)];
    } else if (discriminant > 0) {
      arr = [(- b - Math.sqrt(discriminant)) / (2 * a),
       (- b + Math.sqrt(discriminant)) / (2 * a),
      ]
    }
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}