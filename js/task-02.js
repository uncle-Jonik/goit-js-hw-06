const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

//виправив
const allElements = [];

const ingredientsCreateEl = ingredients.forEach((element) => {
  const createLiEl = document.createElement("li");
  createLiEl.textContent = element;
  allElements.push(createLiEl);
});

ulEl.append(...allElements);
