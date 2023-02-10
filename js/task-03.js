const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//  Написати скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery
//  Використовуючи масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

const list = document.querySelector('.gallery');

const listElement = images.map((image) => `<li><img class='list-photo' src='${image.url}' width='320' alt='${image.alt}'></img></li>`).join('');

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.

list.insertAdjacentHTML('afterBegin', listElement);

// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const listPhotos = document.querySelectorAll('.list-photo');

list.style.display = 'flex';
list.style.justifyContent = 'center';
list.style.alignItems = 'center';
list.style.gap = '30px';
list.style.padding = '40px 0px';
list.style.listStyleType = 'none';

