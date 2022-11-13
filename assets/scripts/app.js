const addMovieModal = document.getElementById('add-modal');
const headerAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = document.querySelector('.btn--passive');
const addMovieButton = document.querySelector('.btn--success');

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieHandler = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  toggleMovieHandler();
};

const backdropClickHandler = () => {
  toggleMovieHandler();
};

const addMovieHandler = () => {};

headerAddMovieButton.addEventListener('click', toggleMovieHandler);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
addMovieButton.addEventListener('click', addMovieHandler);
