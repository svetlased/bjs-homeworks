class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix(){
        return this.state*= 1.5;
    }
    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }
    get state() {
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}
class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Задача 2 

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(books) {
        if (books.state > 30) {
            this.books.push(books);
        }
    }
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++){
            if (this.books[i][type] === value) {
                return this.books[i];
            } 
            return null;
        }
    }
    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++){
            if (bookName === this.books[i].name) {
                this.books.splice(i, 1);
                return this.books[i];
            }
            return null;
        } 
    }
}
const myLibrary = new Library('Полка в гостиной');
myLibrary.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
myLibrary.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
myLibrary.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
myLibrary.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(myLibrary);
console.log(myLibrary.findBookBy("releaseDate", 1924).name);

console.log("Количество книг до выдачи: " + myLibrary.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Мурзилка");
console.log("Количество книг после выдачи: " + myLibrary.books.length); //Количество книг после выдачи: 3