//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = md5(args); // получаем правильный хеш c помощью функции md5
        console.log(`-*-*-*- hash : ${hash} -*-*-*-`);
        let index = null;
        console.log(cache);
        let objectInCache = cache.find((item) => {
            console.log(`item ЭТО ${item}`);
            console.log(`item.hash ЭТО ${item.hash}`);
            return item.hash === hash;}); // ищем элемент, хеш которого равен нашему хешу
                console.log(` objectInCache - ${objectInCache} -*-*-*-*-`);
        if (objectInCache) { // если элемент найден
            console.log("Из кэша: " + objectInCache.hash); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
            return "Из кэша: " + objectInCache.hash;
        }

        let result = func(...args); // в кеше результата нет — придётся считать
        cache.push({hash: md5(args), value: result}) ; // добавляем элемент с правильной структурой
        if (cache.length > 5) { 
        cache.shift() // если слишком много элементов в кеше, надо удалить самый старый (первый) 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
    return wrapper;  
}
/*
//Задача № 2
function debounceDecoratorNew(func, delay) {
  
}
*/