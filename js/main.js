/*
    MODAL OPEN-AND-CLOSE FEATURE IMPLEMENTATION
*/

const modalConatiner = document.querySelector('.modal-container');
const openbutton = document.querySelector('.add-book');
const closeButton = document.querySelector('.close-icon');

function openAndClose(param) {
	modalConatiner.classList.toggle('open-modal');
}

openbutton.addEventListener('click', openAndClose);

closeButton.addEventListener('click', openAndClose);
