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
