const categories = document.querySelectorAll('.item')
console.log('Number of categories', categories.length)
console.log(``)

categories.forEach(itemChild => {
    console.log(`Category`, itemChild.firstElementChild.textContent)
    console.log(`Element`, [...itemChild.lastElementChild.children].length)
    console.log(``)
})


