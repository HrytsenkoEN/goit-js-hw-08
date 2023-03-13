// Відстежуй на формі подію input, і щоразу записуй у локальне сховище 
// об'єкт з полями email і message, у яких зберігай поточні значення 
// полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
//
//  Під час завантаження сторінки перевіряй стан сховища, і якщо там є 
// збережені дані, заповнюй ними поля форми. В іншому випадку поля 
// повинні бути порожніми.
// 
// Під час сабміту форми очищуй сховище і поля форми, а також виводь 
// у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// 
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 
// мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.


import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const formData = {};

updateForm();

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
};

function onFormSubmit(evt) {
    evt.preventDefault();
    const {
        elements: { email, message },
    } = evt.target;

    if (email.value === '' || message.value === '') {
        return window.alert('input fields not filled!');
    }
    console.log({ email: email.value, message: message.value });
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    delete formData.email;
    delete formData.message;
}

function updateForm() {
    if (localStorage.getItem(STORAGE_KEY) === null) {
        return;
    }
    const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

    Object.entries(savedForm).forEach(([name, value]) => {
        formData[name] = value;
        formEl.elements[name].value = value;
    });
}