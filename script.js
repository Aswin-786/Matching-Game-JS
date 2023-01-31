const cardAraay = [
  {
    name: 'cheeseburger',
    image: 'cheeseburger.png'
  },

  {
    name: 'fries',
    image: 'fries.png'
  },

  {
    name: 'hotdog',
    image: 'hotdog.png'
  },

  {
    name: 'ice-cream',
    image: 'ice-cream.png'
  },

  {
    name: 'milkshake',
    image: 'milkshake.png'
  },

  {
    name: 'pizza',
    image: 'pizza.png'
  },

  {
    name: 'cheeseburger',
    image: 'cheeseburger.png'
  },

  {
    name: 'fries',
    image: 'fries.png'
  },

  {
    name: 'hotdog',
    image: 'hotdog.png'
  },

  {
    name: 'ice-cream',
    image: 'ice-cream.png'
  },

  {
    name: 'milkshake',
    image: 'milkshake.png'
  },

  {
    name: 'pizza',
    image: 'pizza.png'
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

function flipCard() {
  const boxId = this.getAttribute('data-id')
  
  cardsChosen.push(cardAraay[boxId].name)

  cardsChosenIds.push(boxId)
  this.setAttribute('src', cardAraay[boxId].image)
  if(cardsChosen.length == 2) {
    setTimeout( checkMatch, 500)
  }
}