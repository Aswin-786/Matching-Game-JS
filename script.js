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