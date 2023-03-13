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