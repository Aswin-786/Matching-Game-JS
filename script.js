const cardAraay = [
  {
    name: 'cheeseburger',
    image: 'cow.png'
  },

  {
    name: 'fries',
    image: 'zebra.png'
  },

  {
    name: 'hotdog',
    image: 'dinozer.png'
  },

  {
    name: 'ice-cream',
    image: 'donkey.png'
  },

  {
    name: 'milkshake',
    image: 'monkey.png'
  },

  {
    name: 'pizza',
    image: 'elephant.png'
  },

  {
    name: 'cheeseburger',
    image: 'cow.png'
  },

  {
    name: 'fries',
    image: 'zebra.png'
  },

  {
    name: 'hotdog',
    image: 'dinozer.png'
  },

  {
    name: 'ice-cream',
    image: 'donkey.png'
  },

  {
    name: 'milkshake',
    image: 'monkey.png'
  },

  {
    name: 'pizza',
    image: 'elephant.png'
  }

]

// to get random
cardAraay.sort( () => 0.5 - Math.random())
console.log(cardAraay)

const grid = document.querySelector('.grid')

const result = document.getElementById('result')

let cardsChosen = []

let cardsChosenIds = []

const cardWon = []

// for setting the images to grid and to start 
const makeBox = () => {
  for (let i = 0; i < cardAraay.length; i++) {
    const box = document.createElement('img')
    box.setAttribute('src', 'blank.png')
    box.setAttribute('data-id', i)
    box.addEventListener('click', flipCard)
    console.log(box)
    console.log(grid)
    grid.appendChild(box)
    
  }
}

makeBox()

// to check the match when user selects
function checkMatch () {

  const boxs = document.querySelectorAll('img')

  if(cardsChosenIds[0] == cardsChosenIds[1]) {
    boxs[cardsChosenIds[0]].setAttribute('src', 'blank.png')
    boxs[cardsChosenIds[1]].setAttribute('src', 'blank.png')
    alert("Yeyy... Matched")
  }

  if(cardsChosen[0] == cardsChosen[1]) {
    alert("Yeyy... Matched")

    boxs[cardsChosenIds[0]].setAttribute('src', 'white.png')
    boxs[cardsChosenIds[1]].setAttribute('src', 'white.png')

    boxs[cardsChosenIds[0]].removeEventListener('click', flipCard)
    boxs[cardsChosenIds[1]].removeEventListener('click', flipCard)

    cardWon.push(cardsChosen)

  } else {
    boxs[cardsChosenIds[0]].setAttribute('src', 'blank.png')
    boxs[cardsChosenIds[1]].setAttribute('src', 'blank.png')
  }

  result.innerHTML = cardWon.length

  if(cardWon.length == (cardAraay.length / 2)) {
    result.innerHTML = "Congrats you found all"
  }

  cardsChosen = []
  cardsChosenIds = []
}

// change images when user selects image
function flipCard() {
  const boxId = this.getAttribute('data-id')
  
  cardsChosen.push(cardAraay[boxId].name)

  cardsChosenIds.push(boxId)
  this.setAttribute('src', cardAraay[boxId].image)
  if(cardsChosen.length == 2) {
    setTimeout( checkMatch, 500)
  }
}