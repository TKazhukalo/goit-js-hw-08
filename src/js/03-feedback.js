const STOREGE_KEY = 'feedback - form - state';
import throttle from "lodash.throttle";
const formData = {};
const formEl = document.querySelector('.feedback-form');
const messageEl = document.querySelector('textarea');
const inputEl = document.querySelector('input');
formEl.addEventListener('submit', onFormSubmit);
messageEl.addEventListener('input', throttle(onTextareaInput,500) );
formEl.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
    const formDataString = JSON.stringify(formData);
    const formDataParse = JSON.parse(formDataString);
    console.log(formDataParse);
})
populateTextarea();
function onFormSubmit(evt) {
    evt.preventDefault();
   
    console.log('Отправить форму');

    localStorage.removeItem(STOREGE_KEY);
        evt.currentTarget.reset();
}

function onTextareaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(STOREGE_KEY, message);
}


function populateTextarea() {
    const savedMessage = localStorage.getItem(STOREGE_KEY);
    if (savedMessage) {
        messageEl.value = savedMessage;
    }
}