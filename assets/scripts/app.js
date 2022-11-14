const addMovieModal = document.getElementById('add-modal');
const headerAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = document.querySelector('.btn--passive');
const addMovieButton = document.querySelector('.btn--success');
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const renderNewElement = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class='movie-element__image'>
      <img src=${imageUrl} alt=${title} />
    </div>
    <div class='movie-element__info'>
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieHandler = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieHandler();
  clearMovieInput();
};

const backdropClickHandler = () => {
  toggleMovieHandler();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Invalid input values (rating between 1 and 5).');
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  toggleMovieHandler();
  clearMovieInput();
  renderNewElement(newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};

headerAddMovieButton.addEventListener('click', toggleMovieHandler);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
addMovieButton.addEventListener('click', addMovieHandler);
