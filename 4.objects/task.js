'use strict'
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student('Пётр', 'мужской', 21);
let student2 = new Student('Василиса', 'женский', 19);
let peter = new Student('Peter', 'male', 17);


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

// console.log(peter);

Student.prototype.addMarks = function (...marks) {
    //console.log("Хочу добавить оценки.");
    if (this.marks) {  //console.log("Добавляю оценки.", marks);
        this.marks.push(...marks);
    } /*else {
        return console.log("Добавление оценок невозможно, пользователь (студент) отчислен.");
    }*/
}

/*
 //Метод "Student.prototype.addMarks" реализован через "цепочку логических "И" "
 Student.prototype.addMarks = function (...marks) {
    this.marks && this.marks.push(...marks); 
}*/


/*  //Метод "Student.prototype.addMarks" реализован через оператор опциональной последовательности
 Student.prototype.addMarks = function (...marks) {
    this.marks?.push(...marks); // правильно ли применен оператор опциональной последовательности? Ответ преподавателя - правильно.
}
*/

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) { // А как еще можно описать проверку на наличие массива?
        return 0;
    } else {        /** закомментированны код ниже две попытки поиска решения. Надо правильно установить условие:
                        1) отсутствие (неналичие) массива оценок = true ИЛИ 2) длина массива равна нулю = true , тогда вернуть 0 */
                    //console.log('Среднее - ', this.marks.reduce((accum, item) => accum + item, 0) / this.marks.length, this.marks.length);
                    //console.log('АККУМ - ', this.marks.reduce((accum, item) => accum + item));
                //   let average = this.marks.reduce((accum, item) => accum + item) / this.marks.length;
                    //console.log(average, " - среднее отдельно")
                //   return average;  }} // 
            // код ниже - функционал поиска среднего арифметического с делением на длину массива внутри коллбэка. 
            // Хотя мне более изящным кажется решение 01 на 65 строке. 
        let averageMark = this.marks.reduce((acc, item, idx, arr) => {
            acc += item;
            if (idx === arr.length - 1) {
                return acc / arr.length;
            }
            return acc
        }, 0);
        return averageMark;
    }
} 

/* // Решение 01
Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {
        return 0;
    } else {  //если длина массива marks будет нулевой, ход программы сюда не попадет.
        return this.marks.reduce((accum, item) => accum + item) / this.marks.length; 
    }
}
*/

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
