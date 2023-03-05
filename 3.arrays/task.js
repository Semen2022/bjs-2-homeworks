function compareArrays(arr1, arr2) {
    /*устанавливаем два условия, которые должны выполняться вместе, т.е. "логическое И "*/
    /** первое условие - сравниваем массивы по длине */
    /** второе условие - используя функцию высшего порядка - метод .every()
     * задаем в аргументе callback-функцию , в которую передаем элемент и его индекс.
     * Для каждого элемента первого массива сравниваем элемент второго массива 
     * на этой же позиции*/ 
    return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);  
}

function getUsersNamesInAgeRange(users, gender) {
    if ((users.length === 0 && gender === "мужской") || (gender !== "мужской" && gender !== "женский")) {
        return 0;
    }

    let result = users.filter(item => item.gender === gender).map(item => item.age).reduce((acc, item, idx, arr) => {
        acc += item;
        if (idx === arr.length - 1) {
            return acc / arr.length;
        }
        return acc;
    }, 0);
    return result;
}