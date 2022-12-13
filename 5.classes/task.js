class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount= pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    let oldState = this.state;
    this.state = oldState * 1.5;
  }

  set state(newState) {
    if (newState <=0) {
      this._state = 0; 
    } else if (newState >=100) {   
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
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
  }
  type = "magazine";
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
  }
  type = "book";
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
  }
  type = "novel";
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
  }
  type = "fantastic";
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
  }
  type = "detective";
}

class Library {

  constructor(name, ...books) {
    this.name = name;
    this.books = books;
  }

  addBook(book) {
    if (book.state > 30){
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let indexBook in this.books) {
      if (this.books[indexBook][type] === value) {
        return this.books[indexBook];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    console.log(bookName);
    for (let indexBook in this.books) {
      if (this.books[indexBook].name === bookName) {
        let delBook = this.books.splice(indexBook, 1);
        return delBook[0];
      }
    }
    return null;
  }

}

let library = new Library('Библиотека ВГУ');
let printItem = new PrintEditionItem('Типовой школьный журнал', 2019, 102);
let caravanHistory = new Magazine('Караван историй', 2022, 102);
let murderInTheRueMorgue = new DetectiveBook('Эдгар Аллан По', 'Убийство на улице Морг', 1919, 102);
let nightOfFire = new FantasticBook('Дуглас Пенелопа', 'Ночь Огня', 2022, 327);
let singingInTheThorns = new NovelBook('Колин Маккалоу', 'Поющие в терновнике', 2020, 640);

library.addBook(printItem);
library.addBook(caravanHistory);
library.addBook(murderInTheRueMorgue);
library.addBook(nightOfFire);
library.addBook(singingInTheThorns);

let beginLibrary = library

const firstBook = library.findBookBy("releaseDate", 1919);
console.log(firstBook.name);

const secondBook = library.giveBookByName('Поющие в терновнике');
console.log(secondBook);
console.log(library.books);

singingInTheThorns.state = 10;

singingInTheThorns.fix();
console.log(singingInTheThorns.state);

library.addBook(singingInTheThorns);
console.log(library);


class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
  }

  addMark(subMark, subName) {
    if (subMark < 2 || subMark > 5) {
      return;
    }
    if (!this.marks?.[subName]) {
      this.marks[subName] = [subMark];
    } else {
      this.marks[subName].push(subMark);
    }
  }

  getAverageBySubject(subject) {
    if (!this.marks?.[subject]) {
      return 0;
    }
    let averageSub = this.marks[subject].reduce((acc, item, index, arr) => 
    acc + item / arr.length ,0);
    return averageSub;
  }

  getAverage() {
    let subjectArr = Object.keys(this.marks);
    if (subjectArr.length === 0) {
      return 0;
    }
    let sumAvarege = 0;
    console.log(subjectArr);
    for (let subject of subjectArr) {
      sumAvarege = sumAvarege + this.getAverageBySubject(subject);
    }
    return sumAvarege / subjectArr.length;
  }

}










