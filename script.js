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

const cardsChosen = []

const cardsChosenIds = []


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

  if(cardsChosen[0] == cardsChosen[1]) {
    alert("Yeyy... Matched")

    boxs[cardsChosenIds[0]].setAttribute('src', 'white.png')
    boxs[cardsChosenIds[1]].setAttribute('src', 'white.png')

    boxs[cardsChosenIds[0]].removeEventListener('click', flipCard)
    boxs[cardsChosenIds[1]].removeEventListener('click', flipCard)

  } else {
    boxs[cardsChosenIds[0]].setAttribute('src', 'blank.png')
    boxs[cardsChosenIds[1]].setAttribute('src', 'blank.png')
  }
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