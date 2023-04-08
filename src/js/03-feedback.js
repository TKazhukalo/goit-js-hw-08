
import throttle from "lodash.throttle";
const STOREGE_KEY = 'feedback - form - state';

const formData = {};
const formEl = document.querySelector('.feedback-form');
const messageEl = document.querySelector('textarea');
const inputEl = document.querySelector('input');
formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onTextareaInput,500));
/*formEl.addEventListener('input', e => {
   
    const formDataString = JSON.stringify(formData);
    const formDataParse = JSON.parse(formDataString);
    localStorage.setItem(STOREGE_KEY, formDataString);
   // console.log(formDataParse);
   
})*/

function onFormSubmit(evt) {
    evt.preventDefault();
    if (inputEl.value === '' || messageEl.value === '') {
return alert( 'Введіть дані');
  }
    console.log(JSON.parse(localStorage.getItem(STOREGE_KEY)));

    localStorage.removeItem(STOREGE_KEY);
        evt.currentTarget.reset();
}

function onTextareaInput(evt) {
     formData[evt.target.name] = evt.target.value;
   
    localStorage.setItem(STOREGE_KEY, JSON.stringify(formData));
}


function populateFormData() {
    const savedMessage = JSON.parse(localStorage.getItem(STOREGE_KEY));
    if (savedMessage) {
        messageEl.value = savedMessage.message;
        inputEl.value = savedMessage.email;
    }
}
populateFormData();