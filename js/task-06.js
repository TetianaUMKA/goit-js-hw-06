// Напиcати скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які вже додані у вихідні файли завдання.

const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', (event) => {
    
    if (event.currentTarget.value.length != validationInput.getAttribute('data-length')) {
        validationInput.classList.add('invalid');

        if (validationInput.classList.contains('valid')) {
            validationInput.classList.remove('valid');
        }

    } else {
        validationInput.classList.add('valid');
        
        if (validationInput.classList.contains('invalid')) {
            validationInput.classList.remove('invalid');
        }
    }

});
