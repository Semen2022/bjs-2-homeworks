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