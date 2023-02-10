// 1. Підрахунок кількості категорій li.item в ul#categories та виведення у консоль
const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

// 2. Виведення в консоль тексту заголовку <h2> кожного li.item та кількостi <li>(елем), вкладених в кожній категорії.
categories.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);

});
