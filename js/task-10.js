// Написати скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
//  Створити функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
// 1. Розміри найпершого <div> - 30px на 30px.
// 2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3.Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('#controls input');
const dataCreateBtn = document.querySelector('button[data-create]');
const dataDestroyBtn = document.querySelector('button[data-destroy]');
const boxesStoreDiv = document.querySelector('#boxes');

const createBoxes = amount => {
  const boxesArray = [];
  
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');

    box.style.height = `${30 + 10 * i}px`;
    box.style.width = `${30 + 10 * i}px`;
    box.style.background = getRandomHexColor();

    boxesArray.push(box);

  }

  return boxesArray;
};

dataCreateBtn.addEventListener('click', () => {
  const boxes = createBoxes(inputNumber.value);
  boxesStoreDiv.append(...boxes);
});


const destroyBoxes = () => {
  boxesStoreDiv.innerHTML = '';
};

dataDestroyBtn.addEventListener('click', () => {
  destroyBoxes();
});


