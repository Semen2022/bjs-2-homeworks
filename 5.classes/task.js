'use strict'
            /** Решение задачи №1. Печатное издание*/
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state *= 1.5;
    }

    set state(num) {
        // console.log('Значение state - ', num);
        if (num <= 0) {
            this._state = 0;
        }
        if (num >= 100) {
            this._state = 100;
        }
        if (num > 0 && num < 100) {
            this._state = num;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }

}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}


class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}


class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

/** Решение задачи №2. Библиотека */

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30){
            this.books.push(book);
        }
    }

        // Первый вариант решения поиска книги.
/*    findBookBy(type, value) {
        //console.log(this.books, value);
        let idx = this.books.findIndex((findBook) => findBook[type] === value);
        if (idx !== -1) {
            return this.books[idx];
        } else {
            return null;
        }
    }
    */
        // Второй вариант поиска книги
    findBookBy(type, value) {
        let findingBook = this.books.find(findBookItem => findBookItem[type] === value);
        return findingBook || null; 
    }

    giveBookByName(bookName) {
        let findBookIdx = this.books.findIndex(findBookItem => findBookItem.name === bookName);
        const readerFindBook = this.books[findBookIdx];
        if (findBookIdx !== -1) {
            this.books.splice(findBookIdx, 1); // пробовал присваивать в переменную удаленный массив, но значение не возвращалось...
            return  readerFindBook;
        } else {
            return null;
        }
    }
}