// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// 1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
let counterValue = 0;

// 2. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// 3. Оновлюй інтерфейс новим значенням змінної counterValue.
let visibleCounterResult = document.querySelector('#value');

const decreaseBtn = document.querySelector('button[data-action="decrement"]');
decreaseBtn.addEventListener('click', () => {
    counterValue -= 1;
    visibleCounterResult.textContent = counterValue;
});

const increaseBtn = document.querySelector('button[data-action="increment"]');
increaseBtn.addEventListener('click', () => {
    counterValue += 1;
    visibleCounterResult.textContent = counterValue;
});

