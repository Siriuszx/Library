const bookContainer = document.querySelector('.book-container');

const bookModal = document.querySelector('#book-dialog');
const openBookModal = document.querySelector('#open-modal');

const formBookTitle = document.querySelector('#book-title');
const formBookAuthor = document.querySelector('#book-author');
const formBookPageCount = document.querySelector('#book-page-count');
const formBookStatus = document.querySelector('#book-status');
const submitBtn = document.querySelector('.submit-new-book');

let myLibrary = [];

function Book(title, author, pageCount, status) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.status = status;
}

Book.prototype.toggleStatus = function() {
    this.status = !this.status;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createNewBook(title, author, pageCount, status) {
    return new Book(title, author, pageCount, status);
}

function updateBookList() {
    bookContainer.innerHTML = '';

    myLibrary.forEach(el => {
        bookContainer.appendChild(createNewBookEl(el.title, el.author, el.pageCount, el.status));
    });
}

function clearFrom() {
    formBookTitle.value = null;
    formBookAuthor.value = null;
    formBookPageCount.value = null;
    formBookStatus.checked = false;
}

function submitNewBookHandler(e) {
    let bookStatus = formBookStatus.value === 'on' ? true : false;
    let newBook = createNewBook(formBookTitle.value,formBookAuthor.value,formBookPageCount.value,bookStatus);
    addBookToLibrary(newBook);
    clearFrom();
    updateBookList();
}

function removeBook() {
    let parentEl = this.parentNode.parentNode;

    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === parentEl.getAttribute('data-title')) {
            myLibrary.splice(i, 1);
            parentEl.remove();
        }
    }
    updateBookList();
}

function toggleStatus() {
    let parentEl = this.parentNode.parentNode;
    
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === parentEl.getAttribute('data-title')) {
            myLibrary[i].toggleStatus();
        }
    }
    updateBookList();
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

    const newBookStatusTgl = document.createElement('input');
    newBookStatusTgl.setAttribute('type','checkbox');
    newBookStatusTgl.checked = status;
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

    newBookTitle.textContent = title;
    newBookAuthor.textContent = author;
    newBookPageCount.textContent = pageCount;
    newBookStatus.textContent = status;

    newBook.appendChild(newBookContents);
    newBook.appendChild(newBookControls);

    return newBook;
}

openBookModal.addEventListener('click', () => {
    bookModal.showModal();
});

submitBtn.addEventListener('click', submitNewBookHandler);

addBookToLibrary(createNewBook('Atmic Habits', 'James Clear', 320, true));
addBookToLibrary(createNewBook('Amic Habits', 'James Clear', 320, true));
addBookToLibrary(createNewBook('Atomi Habits', 'James Clear', 320, true));
addBookToLibrary(createNewBook('Atomic Habis', 'James Clear', 320, true));
addBookToLibrary(createNewBook('Atomic Habits', 'James Clear', 320, true));
updateBookList();
