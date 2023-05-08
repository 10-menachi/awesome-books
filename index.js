// eslint-disable-next-line import/extensions
import { DateTime } from './node_modules/luxon/src/luxon.js';
// eslint-disable-next-line import/extensions
import Book from './book.js';
// eslint-disable-next-line import/extensions
import Library from './library.js';

const booksSection = document.querySelector('.books');
const form = document.querySelector('#form');
const title = document.querySelector('#book-title');
const author = document.querySelector('#author');

const library = new Library(booksSection);
library.books = library.getBooks();
library.showBooks();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { value: titleValue } = title;
  const { value: authorValue } = author;
  const book = new Book(library.books.length + 1, titleValue, authorValue);
  library.addBook(book);
  form.reset();
});

const listNav = document.querySelector('.list');
const addNav = document.querySelector('.add');
const contactNav = document.querySelector('.contact-nav');

const contact = document.querySelector('.contact-div');
const books = document.querySelector('.books');
const addBook = document.querySelector('.add-book');

const showContact = () => {
  contact.style.display = 'block';
  books.style.display = 'none';
  addBook.style.display = 'none';
};

const showBooks = () => {
  contact.style.display = 'none';
  books.style.display = 'block';
  addBook.style.display = 'none';
};

const showAddBook = () => {
  contact.style.display = 'none';
  books.style.display = 'none';
  addBook.style.display = 'block';
};

listNav.addEventListener('click', showBooks);
addNav.addEventListener('click', showAddBook);
contactNav.addEventListener('click', showContact);

const timeAndDate = document.querySelector('.time-and-date');
timeAndDate.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);