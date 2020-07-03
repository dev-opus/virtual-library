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

let bookTitle = document.querySelector('#title');
let bookAuthour = document.querySelector('#authour');
let bookPages = document.querySelector('#pages');
let bookStatus = document.querySelector('#read');

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

