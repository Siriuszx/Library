const bookContainer = document.querySelector('.book-container');

let myLibrary = [];

function Book(title, author, pageCount, status) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.status = status;
}

// create new book obj --> create new book el based on book obj -->
// add new book to library arr and dom list

/*
Create a new book
Add it to the array as new Book object
Empty book container node
Loop through library array
    Create a new book DOM element
    Append it to the container
*/

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createNewBook(title, author, pageCount, status) {
    return new Book(title, author, pageCount, status);
}

function updateDOMBookList() {
    bookContainer.innerHTML = '';

    myLibrary.forEach(el => {
        bookContainer.appendChild(createNewBookEl(el.title, el.author, el.pageCount, el.status));
    });
}

function removeBook() {
    let parentEl = this.parentNode.parentNode;

    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === parentEl.getAttribute('data-title')) {
            myLibrary.splice(i, 1);
            parentEl.remove();   
        }
    }
    updateDOMBookList();
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

addBookToLibrary(createNewBook('Atmic Habits', 'James Clear', 320, true));
updateDOMBookList();
addBookToLibrary(createNewBook('Amic Habits', 'James Clear', 320, true));
addBookToLibrary(createNewBook('Atomi Habits', 'James Clear', 320, true));
addBookToLibrary(createNewBook('Atomic Habis', 'James Clear', 320, true));
addBookToLibrary(createNewBook('Atomic Habits', 'James Clear', 320, true));
updateDOMBookList();
