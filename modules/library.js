class Library {
  constructor(booksSection) {
    this.booksSection = booksSection;
    this.books = [];
  }

  getBooks = () => (localStorage.getItem('books')
    ? JSON.parse(localStorage.getItem('books'))
    : []);

  saveBooks = () => {
    localStorage.setItem('books', JSON.stringify(this.books));
  };

  addBook = (book) => {
    this.books.push(book);
    this.saveBooks();
    this.showBooks();
  };

  removeBook = (index) => {
    this.books = this.books.filter((book, i) => i !== Number(index));
    this.saveBooks();
    this.showBooks();
  };

  showBooks = () => {
    this.booksSection.innerHTML = '';
    this.books.forEach((book, index) => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
      bookDiv.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <button data-index="${index}" class="btn-btn-danger delete">Delete</button>
        <hr>
      `;
      this.booksSection.appendChild(bookDiv);
    });

    const rBook = document.querySelectorAll('.delete');
    rBook.forEach((remove) => {
      remove.addEventListener('click', (event) => {
        const { index } = event.target.dataset;
        this.removeBook(index);
      });
    });
  };
}

export default Library;