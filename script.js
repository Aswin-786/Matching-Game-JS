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

function flipCard() {
  console.log("clicked")
}