// Card array with name and image for each card
const cardArray = [
  { name: 'cow', image: 'cow.png' },
  { name: 'zebra', image: 'zebra.png' },
  { name: 'dinozer', image: 'dinozer.png' },
  { name: 'donkey', image: 'donkey.png' },
  { name: 'monkey', image: 'monkey.png' },
  { name: 'elephant', image: 'elephant.png' },
  { name: 'cow', image: 'cow.png' },
  { name: 'zebra', image: 'zebra.png' },
  { name: 'dinozer', image: 'dinozer.png' },
  { name: 'donkey', image: 'donkey.png' },
  { name: 'monkey', image: 'monkey.png' },
  { name: 'elephant', image: 'elephant.png' }
];

// Shuffle the cardArray to get random order of cards
cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const result = document.getElementById('result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

// Function to create card boxes on the grid and add click event listener
const createCardBoxes = () => {
  cardArray.forEach((card, i) => {
    const box = document.createElement('img');
    box.setAttribute('src', 'blank.png');
    box.setAttribute('data-id', i);
    box.addEventListener('click', flipCard);
    grid.appendChild(box);
  });
};

// Function to check if two selected cards are a match
const checkMatch = () => {
  const boxes = document.querySelectorAll('img');
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  if (cardsChosen[0] === cardsChosen[1]) {
    alert('Yeyy... Matched');

    // Set matched cards' images to white.png and remove click event listener
    boxes[optionOneId].setAttribute('src', 'white.png');
    boxes[optionTwoId].setAttribute('src', 'white.png');
    boxes[optionOneId].removeEventListener('click', flipCard);
    boxes[optionTwoId].removeEventListener('click', flipCard);

    // Add the matched cards to the cardsWon array
    cardsWon.push(cardsChosen);
  } else {
    // If the cards do not match, reset their images to blank.png
    boxes[optionOneId].setAttribute('src', 'blank.png');
    boxes[optionTwoId].setAttribute('src', 'blank.png');
  }

  result.textContent = cardsWon.length;

  // Check if all matches have been found
  if (cardsWon.length === cardArray.length / 2) {
    result.textContent = 'Congrats you found all';
    result.style.color = 'red';
  }

  // Reset the cards chosen arrays
  cardsChosen = [];
  cardsChosenIds = [];
};

// Function to handle the flip of the card when clicked
const flipCard = function () {
  const boxId = this.getAttribute('data-id');

  cardsChosen.push(cardArray[boxId].name);
  cardsChosenIds.push(boxId);
  this.setAttribute('src', cardArray[boxId].image);

  // Check if two cards have been chosen
  if (cardsChosen.length === 2) {
    // Wait 500ms before checking the match
    setTimeout(checkMatch, 500);
  }
};

// Create card boxes on the grid
createCardBoxes();

// Scrolling effects observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
