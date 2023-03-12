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

Student.prototype.addMarks = function (...marks) {
    this.marks?.push(...marks); // правильно применен оператор опциональной последовательности?
}

Student.prototype.getAverage = function () {
    // console.log("Массив оценок - ", this.marks)
    if (!this.marks) {
        return 0;
    } else {
        // console.log('Среднее - ', this.marks.reduce((accum, item) => accum + item) / this.marks.length, this.marks.length);
        // console.log('АККУМ - ', this.marks.reduce((accum, item) => accum + item));
    return this.marks.reduce((accum, item) => accum + item) / this.marks.length;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
