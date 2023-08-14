const bookContainer = document.querySelector('.book-container');

let myLibrary = [];

function Book(title, author, pageCount, status) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.status = status;
}

function addBookToLibrary(book) {
    bookContainer.appendChild(book);
}

function createNewBookEl(title, author, pageCount, status) {
    const newBook = document.createElement('div');
    newBook.classList.add('book');
    newBook.setAttribute('data-title', title);
    newBook.setAttribute('data-author', author);
    newBook.setAttribute('data-page-count', pageCount);
    newBook.setAttribute('data-read-status', status);

    const newBookContents = document.createElement('div');
    newBookContents.classList.add('book-contents');

    const newBookTitle = document.createElement('div')
    newBookTitle.classList.add('book-title');

    const newBookAuthor = document.createElement('div');
    newBookAuthor.classList.add('book-author');

    const newBookPageCount = document.createElement('div');
    newBookPageCount.classList.add('book-page-count');

    const newBookStatus = document.createElement('div');
    newBookStatus.classList.add('book-read-status');

    newBookContents.appendChild(newBookTitle);
    newBookContents.appendChild(newBookAuthor);
    newBookContents.appendChild(newBookPageCount);
    newBookContents.appendChild(newBookStatus);

    const newBookControls = document.createElement('div');
    newBookControls.classList.add('book-controls');

    const controlsRemoveBtn = document.createElement('button');
    controlsRemoveBtn.classList.add('remove-book');
    controlsRemoveBtn.textContent = 'Remove'

    newBookControls.appendChild(controlsRemoveBtn);

    newBookTitle.textContent = title;
    newBookAuthor.textContent = author;
    newBookPageCount.textContent = pageCount;
    newBookStatus.textContent = status;

    newBook.appendChild(newBookContents);
    newBook.appendChild(newBookControls);

    return newBook;
}

addBookToLibrary(createNewBookEl('Atomic Habits', 'James Clear', 320, true));

