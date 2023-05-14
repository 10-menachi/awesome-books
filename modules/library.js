class Library {
  constructor(bookSection, title, author) {
    this.bookSection = bookSection;
    this.title = title;
    this.author = author;
    this.books = [];
  }

  getBooks = (savedBooks = []) => {
    if (localStorage.getItem('books')) {
      savedBooks = JSON.parse(localStorage.getItem('books'));
    }
    return savedBooks;
  };

  removeBook = (event, { index } = event.target.dataset) => {
    this.getBooks();
    this.books = this.books.filter((book, number) => number !== Number(index));
    localStorage.setItem('books', JSON.stringify(this.books));
    this.showBooks();
  };

  showBooks = (bookList = document.querySelector('#book-list')) => {
    this.getBooks();
    bookList.innerHTML = '';
    this.books.forEach((book, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><button data-index="${index}" class="btn-btn-danger delete">Delete</button></td>
      `;
      bookList.appendChild(row);
      this.setUpDeleteButtons();
    });
  };

  addBook = (book) => {
    this.getBooks();
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.showBooks();
  };

  setUpDeleteButtons = (deleteButtons = document.querySelectorAll('.delete')) => {
    deleteButtons.forEach((button) => {
      button.addEventListener('click', this.removeBook);
    });
  }
}
export default Library;
