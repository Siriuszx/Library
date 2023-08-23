

class Book {
    constructor(title, author, pageCount, status) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.status = status;
    }

    toggleStatus() {
        this.status = !this.status;
    };
}

class LibraryController {
    myLibrary = [];
    
    selectBookNode(child) {
        return {
            bookEl: child.parentNode.parentNode,
            bookElIndex: Array.from(document.querySelectorAll('.book')).indexOf(child.parentNode.parentNode),
        };
    }

    removeBook() {
        let curBook = selectBookNode(this);

        myLibrary.splice(curBook.bookElIndex, 1);
        curBook.bookEl.remove();
    }

    toggleRead() {
        let curBook = selectBookNode(this);

        myLibrary[curBook.bookElIndex].toggleStatus();
    }

    addBook(title, author, pageCount, status) {
        let newBook = new Book(title, author, pageCount, status);

        myLibrary.push(newBook);
        bookContainer.appendChild(createNewBookEl(newBook));
    }

    clearFrom() {
        formBookTitle.value = null;
        formBookAuthor.value = null;
        formBookPageCount.value = null;
        formBookStatus.checked = false;
    }

    submitNewBookHandler(e) {
        let bookStatus = formBookStatus.value === 'on' ? true : false;

        addBook(formBookTitle.value, formBookAuthor.value, formBookPageCount.value, bookStatus);
        clearFrom();
    }

    createNewBookEl(book) {
        const newBook = document.createElement('div');
        newBook.classList.add('book');
        newBook.setAttribute('data-title', book.title);
        newBook.setAttribute('data-author', book.author);
        newBook.setAttribute('data-page-count', book.pageCount);
        newBook.setAttribute('data-read-status', book.status);

        const newBookContents = document.createElement('div');
        newBookContents.classList.add('book-contents');

        const newBookTitle = document.createElement('div')
        newBookTitle.classList.add('book-title');

        const newBookAuthor = document.createElement('div');
        newBookAuthor.classList.add('book-author');

        const newBookPageCount = document.createElement('div');
        newBookPageCount.classList.add('book-page-count');

        const newBookStatusTgl = document.createElement('input');
        newBookStatusTgl.setAttribute('type', 'checkbox');
        newBookStatusTgl.checked = book.status;
        newBookStatusTgl.classList.add('book-status-toggle');
        newBookStatusTgl.addEventListener('click', toggleRead);

        newBookContents.appendChild(newBookTitle);
        newBookContents.appendChild(newBookAuthor);
        newBookContents.appendChild(newBookPageCount);
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

        newBook.appendChild(newBookContents);
        newBook.appendChild(newBookControls);

        return newBook;
    }
}

class UIController {
    bookContainer = document.querySelector('.book-container');

    bookModal = document.querySelector('#book-dialog');
    openBookModal = document.querySelector('#open-modal');

    formBookTitle = document.querySelector('#book-title');
    formBookAuthor = document.querySelector('#book-author');
    formBookPageCount = document.querySelector('#book-page-count');
    formBookStatus = document.querySelector('#book-status');
    submitBtn = document.querySelector('.submit-new-book');

    constructor() {
        openBookModal.addEventListener('click', () => {
            bookModal.showModal();
        });
        submitBtn.addEventListener('click', submitNewBookHandler);
    }
}


addBook('Atmiwec Hdfabits', 'James Clear', 320, true);
addBook('Atmic Hafifts', 'James Clear', 320, true);
addBook('Atmfc Hbits', 'James Clear', 320, true);
addBook('Atsic abitfs', 'James Clear', 320, true);
addBook('Atqwemic Habits', 'James Clear', 320, true);

