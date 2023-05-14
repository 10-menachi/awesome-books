import Library from '../modules/library';

describe('Library', () => {
  const bookSection = document.createElement('div');
  test('Should retrieve books from local storage', () => {
    bookSection.classList.add('books');
    document.body.appendChild(bookSection);

    const books = [
      { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
      { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    ];

    localStorage.setItem('books', JSON.stringify(books));
    const lib = new Library(bookSection);
    const localStorageBooks = lib.getBooks();
    expect(localStorageBooks).toEqual(books);
  });

  afterEach(() => {
    document.body.removeChild(bookSection);
    localStorage.removeItem('books');
  });
});
