const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector('#ingredients');

const elementsIngredients = ingredients.map(ingredient => {
  const elements = document.createElement('li');
  elements.classList.add('item');
  elements.textContent = ingredient;
  return elements;
})

ingredientsUl.append(...elementsIngredients)