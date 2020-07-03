/*
    MODAL OPEN-AND-CLOSE FEATURE IMPLEMENTATION
*/

const modalConatianer = document.querySelector('.modal-container');
const openbutton = document.querySelector('.add-book');
const closeButton = document.querySelector('.close-icon');

function openAndClose(param) {
	param.classList.toggle('open-modal');
}

openbutton.addEventListener('click', () => openAndClose(modalConatianer));

closeButton.addEventListener('click', () => openAndClose(modalConatianer));

/*
    THE BOOK ARRAY, BOOK CONSTRUCTOR AND ADDBOOK FUNCTION ALL LIVE HERE!
*/

const titleContainer = document.getElementById('title');
const authourContainer = document.getElementById('authour');
const pagesContainer = document.getElementById('pages');
const statusContainer = document.getElementById('read');
const bookHolder = document.querySelector('.book-holder');

let bookTitle;
let bookAuthour;
let bookPages;
let bookStatus;
let bookIndex;

const bookArray = [];

function Book(title, authour, pages, readStatus) {
	this.title = title;
	this.authour = authour;
	this.pages = pages;
	this.readStatus = readStatus;
}

function addBookToArray() {
	const newBook = new Book(bookTitle, bookAuthour, bookPages, bookStatus);
	bookArray.push(newBook);
}

/* 
	STAGE AND DISPLAY A BOOK TO THE ARRAY SECTION
*/

const renderButton = document.querySelector('.form-add');

function stageBook() {
	bookTitle = titleContainer.value;
	bookAuthour = authourContainer.value;
	bookPages = pagesContainer.value;
	bookStatus = statusContainer.checked;

	titleContainer.value = '';
	authourContainer.value = '';
	pagesContainer.value = '';

	if (statusContainer.checked) statusContainer.checked = false;
}

function displayBook() {
	bookIndex = bookArray.length - 1;

	const bookConatiner = document.createElement('div');
	bookConatiner.classList.toggle('book-container');
	bookConatiner.setAttribute('data-index', bookIndex);

	const bookTitle = document.createElement('div');
	bookTitle.classList.toggle('first');
	bookTitle.textContent = bookArray[bookIndex].title;
	bookConatiner.appendChild(bookTitle);

	const bookAuthour = document.createElement('div');
	bookAuthour.classList.toggle('second');
	bookAuthour.textContent = bookArray[bookIndex].authour;
	bookConatiner.appendChild(bookAuthour);

	const bookPages = document.createElement('div');
	bookPages.classList.toggle('third');
	bookPages.textContent = bookArray[bookIndex].pages;
	bookConatiner.appendChild(bookPages);

	const bookStatus = document.createElement('div');
	bookStatus.classList.toggle('fourth');
	bookStatus.textContent = 'read';

	if (bookArray[bookIndex].readStatus) {
		bookStatus.classList.toggle('read');
	} else {
		bookStatus.classList.toggle('not-read');
	}

	bookStatus.addEventListener('click', () => {
		if (bookStatus.classList.contains('read')) {
			return bookStatus.classList.toggle('not-read');
		}
		if (bookStatus.classList.contains('not-read')) {
			return bookStatus.classList.toggle('read')
		}
	});

	if (bookTitle.textContent === '' || bookPages.textContent === '' || bookAuthour.textContent === '') {
		alert('Invalid entry!!')
		return
	}
	bookConatiner.appendChild(bookStatus);

	const deleteContainer = document.createElement('div');
	deleteContainer.classList.toggle('fifth');

	const deleteIcon = document.createElement('img');
	deleteIcon.setAttribute('src', 'img/delete.svg');

	deleteIcon.classList.toggle('delete');
	deleteIcon.addEventListener('click', () => {
		bookArray.splice(bookIndex, 1);
		bookConatiner.remove();
	});

	deleteContainer.appendChild(deleteIcon);
	bookConatiner.appendChild(deleteContainer);

	bookHolder.appendChild(bookConatiner);
}

renderButton.addEventListener('click', () => {
	stageBook();
	addBookToArray();
	displayBook();
});
