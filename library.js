class Library {
  constructor(bookSection, title, author) {
    this.bookSection = bookSection;
    this.title = title;
    this.author = author;
    this.books = [];
  }

  getBooks = () => {
    let savedBooks = [];
    if (localStorage.getItem('books')) {
      savedBooks = JSON.parse(localStorage.getItem('books'));
    }
    return savedBooks;
  };

  showBooks = () => {
    this.books = this.getBooks();
    this.bookSection.innerHTML = '';
    this.books.forEach((book, index) => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
      bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <button data-index="${index}" class="btn-btn-danger delete">Delete</button>
      <hr>
    `;
      this.bookSection.appendChild(bookDiv);
    });

    const removeBook = (event) => {
      const { index } = event.target.dataset;
      this.getBooks();
      this.books = this.books.filter((book, i) => i !== Number(index));
      localStorage.setItem('books', JSON.stringify(this.books));
      this.showBooks();
    };

    const rBook = document.querySelectorAll('.delete');

    rBook.forEach((remove) => {
      remove.addEventListener('click', removeBook);
    });
  };

  addBook = (book) => {
    this.getBooks();
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.showBooks();
  };
}
export default Library;
