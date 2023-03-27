'use strict'
        // Решение задачи №1
function parseCount(arg) {
    let parsArg = null;

    if (typeof arg === 'number') {
        parsArg = arg;
    }
    if (typeof arg === 'string') {
        parsArg = Number.parseFloat(arg);
    }
    if (Number.isNaN(parsArg)) {
        throw new Error("Невалидное значение");
    }
    return parsArg;
}

function validateCount(params) {
    try{
        return parseCount(params);
    } catch(error) {
        console.log(error);
        return error;
    }
}

        // Решение задачи №2
/* // Вариант первый
class Triangle {
    constructor(sideA, sideB, sideC) {
        if (sideA > sideB + sideC || sideB > sideA + sideC || sideC > sideB + sideA) {
            throw new Error("Треугольник с такими сторонами не существует");
        } else {
            this.sideA = sideA;
            this.sideB = sideB;
            this.sideC = sideC;
        }
    }
    
    get perimeter() {
        return Number((this.sideA + this.sideB + this.sideC).toFixed(3));
    }
    get area(){
        let halfPerimetr = this.perimeter / 2;
        return Number((Math.sqrt(halfPerimetr * (halfPerimetr - this.sideA) * (halfPerimetr - this.sideB) * (halfPerimetr - this.sideC))).toFixed(3));
    }
}
*/

function getTriangle(a, b, c) {
    try {
        let newTriangle = new Triangle(a, b, c);
        return newTriangle;
    } catch(error) {
        const errorMessage = "Ошибка! Треугольник не существует";
        return {
            get area() {
                return errorMessage;
            },
            get perimeter() {
                return errorMessage;
            }
        }; // подскажите, в чем смысл этих двух get-теров еще и в return?
    } 
}

/*/
let trtr = new Triangle(300, 400, 500);
console.log(trtr, trtr.perimeter, trtr.area);
*/
        // Вариант второй
class Triangle {
    constructor(sideA, sideB, sideC) {
        let arrSidesTriangle = [sideA, sideB, sideC].sort((a, b) => a-b);
        if (arrSidesTriangle[2] > arrSidesTriangle[1] + arrSidesTriangle[0]) {
            console.log('мы не сможем построить такой треугольник');
            throw new Error("Треугольник с такими сторонами не существует");
        } else {
            this.sideA = sideA;
            this.sideB = sideB;
            this.sideC = sideC;
        }
        // console.log(arrSidesTriangle, arrSidesTriangle[2], arrSidesTriangle[1], arrSidesTriangle[0]);
    }

    get perimeter() {
        return Number((this.sideA + this.sideB + this.sideC).toFixed(3));
    }
    get area(){
        let halfPerimetr = this.perimeter / 2;
        return Number((Math.sqrt(halfPerimetr * (halfPerimetr - this.sideA) * (halfPerimetr - this.sideB) * (halfPerimetr - this.sideC))).toFixed(3));
    }
}

