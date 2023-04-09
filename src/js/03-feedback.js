
import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback - form - state';

let formData = {};
const formEl = document.querySelector('.feedback-form');
const messageEl = document.querySelector('.feedback-form textarea');
const inputEl = document.querySelector('.feedback-form input');
formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onTextareaInput,500));
/*formEl.addEventListener('input', e => {
   
    const formDataString = JSON.stringify(formData);
    const formDataParse = JSON.parse(formDataString);
    localStorage.setItem(STOREGE_KEY, formDataString);
   // console.log(formDataParse);
   
})*/

populateFormData();
function onFormSubmit(evt) {
    evt.preventDefault();
    if (inputEl.value === '' || messageEl.value === '') {
return alert( 'Введіть дані');
  }
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
   
    localStorage.removeItem(STORAGE_KEY);
        evt.currentTarget.reset();
}

function onTextareaInput(evt) {
 //formData[evt.target.name] = evt.target.value.trim();
    formData = {
    email: inputEl.value,
        message: messageEl.value
    }  
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function populateFormData() {
 const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        messageEl.value = savedMessage.message || '';
        inputEl.value = savedMessage.email || '';
    }
 
}
