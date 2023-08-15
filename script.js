const bookContainer = document.querySelector('.book-container');

const bookModal = document.querySelector('#book-dialog');
const openBookModal = document.querySelector('#open-modal');

const formBookTitle = document.querySelector('#book-title');
const formBookAuthor = document.querySelector('#book-author');
const formBookPageCount = document.querySelector('#book-page-count');
const formBookStatus = document.querySelector('#book-status');
const submitBtn = document.querySelector('.submit-new-book');

let myLibrary = [];
// Last deleted uid?

function Book(title, author, pageCount, status) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.status = status;
}

Book.prototype.toggleStatus = function () {
    this.status = !this.status;
};

function addBookToLibrary(title, author, pageCount, status) {
    let newBook = new Book(title, author, pageCount, status);
    myLibrary.push(newBook);
    bookContainer.appendChild(createNewBookEl(newBook, myLibrary.length)); // UID TODO
}

function clearFrom() {
    formBookTitle.value = null;
    formBookAuthor.value = null;
    formBookPageCount.value = null;
    formBookStatus.checked = false;
}

function submitNewBookHandler(e) {
    //TODO
    let bookStatus = formBookStatus.value === 'on' ? true : false;
    let newBook = createNewBook(formBookTitle.value, formBookAuthor.value, formBookPageCount.value, bookStatus, myLibrary.length);
    addBookToLibrary(newBook);
    clearFrom();
}

function removeBook() {
    let bookEl = this.parentNode.parentNode;
    myLibrary.splice(Number(bookEl.getAttribute('data-uid')), 1);
    bookEl.remove();
}

function toggleStatus() {
    //TODO
}

function createNewBookEl(book, uid) {
    const newBook = document.createElement('div');
    newBook.classList.add('book');
    newBook.setAttribute('data-title', book.title);
    newBook.setAttribute('data-author', book.author);
    newBook.setAttribute('data-page-count', book.pageCount);
    newBook.setAttribute('data-read-status', book.status);
    newBook.setAttribute('data-uid', uid);

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

    const newBookStatusTgl = document.createElement('input');
    newBookStatusTgl.setAttribute('type', 'checkbox');
    newBookStatusTgl.checked = book.status;
    newBookStatusTgl.classList.add('book-status-toggle');
    newBookStatusTgl.addEventListener('click', toggleStatus);

    newBookContents.appendChild(newBookTitle);
    newBookContents.appendChild(newBookAuthor);
    newBookContents.appendChild(newBookPageCount);
    newBookContents.appendChild(newBookStatus);
    newBookContents.appendChild(newBookStatusTgl);

    const newBookControls = document.createElement('div');
    newBookControls.classList.add('book-controls');

    const controlsRemoveBtn = document.createElement('button');
    controlsRemoveBtn.classList.add('remove-book');
    controlsRemoveBtn.textContent = 'Remove'
    controlsRemoveBtn.addEventListener('click', removeBook);

    newBookControls.appendChild(controlsRemoveBtn);

    newBookTitle.textContent = book.title;
    newBookAuthor.textContent = book.author;
    newBookPageCount.textContent = book.pageCount;
    newBookStatus.textContent = book.status;

    newBook.appendChild(newBookContents);
    newBook.appendChild(newBookControls);

    return newBook;
}

openBookModal.addEventListener('click', () => {
    bookModal.showModal();
});

submitBtn.addEventListener('click', submitNewBookHandler);

addBookToLibrary('Atmiwec Hdfabits', 'James Clear', 320, true);
addBookToLibrary('Atmic Hafifts', 'James Clear', 320, true);
addBookToLibrary('Atmfc Hbits', 'James Clear', 320, true);
addBookToLibrary('Atsic abitfs', 'James Clear', 320, true);
addBookToLibrary('Atqwemic Habits', 'James Clear', 320, true);

