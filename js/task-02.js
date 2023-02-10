const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElementArray = [];

ingredients.forEach((ingredient) => {
// 1. Створення окремого елемента <li> для кожного елементу масиву ingredients за допомогою методу document.createElement()
  const listElement = document.createElement('li');

// 2. Додавання назви інгредієнта, як його текстовий вміст
  listElement.textContent = ingredient;

// 3. Додасть елементу клас item
  listElement.classList.add('item');

  listElementArray.push(listElement);
});

// 4. Встановлення усіх <li> за одну операцію у список ul#ingredients
const list = document.querySelector('#ingredients');
list.append(...listElementArray);

