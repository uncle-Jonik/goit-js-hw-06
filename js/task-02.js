const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')

const ingredientsCreateEl = ingredients.forEach(element => {
  const createLiEl = document.createElement('li')
  createLiEl.textContent = element
  ulEl.append(createLiEl)
})
console.log(ulEl);
