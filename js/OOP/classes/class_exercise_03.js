class BookStore {
  constructor(books) {
    this.books = [...books];
  }

  print() {
    for (const book of this.books) {
      book.print();
    }
  }
}

class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }

  print() {
    console.log(`${this.name} by ${this.author}`);
  }
}

const c = new Book("Data Structures", "Reema Thareja");
const java = new Book("Intro Java", "Y. Daniel Liang");
const cPlusPlus = new Book("Intro C++", "Y. Daniel Liang");
const javaScript = new Book("DAS", "Sammie Bae and Phil Nash");

console.log(c);
console.log(cPlusPlus);
console.log(java);
console.log(javaScript);

const listBooks = [javaScript, java, c, cPlusPlus];

const books = new BookStore(listBooks);

books.print();
