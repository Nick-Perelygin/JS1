const categories = document.querySelectorAll('.item')
console.log('Number of categories', categories.length)

console.log(``)

const animals = document.querySelectorAll('.item h2')[0]
console.log('Category', animals.textContent)

const elementsAnimals = document.querySelectorAll('.item:first-child ul li')
console.log('Element', elementsAnimals.length)

console.log(``)

const products = document.querySelectorAll('.item h2')[1]
console.log('Category', products.textContent)

const elementsProducts = document.querySelectorAll('.item:nth-child(2) ul li')
console.log('Element', elementsProducts.length)

console.log(``)

const technologies = document.querySelectorAll('.item h2')[2]
console.log('Category', technologies.textContent)

const elementsTechnologies = document.querySelectorAll('.item:last-child ul li')
console.log('Element', elementsTechnologies.length)