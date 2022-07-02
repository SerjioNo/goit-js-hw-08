import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = "feedback-form-state";

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

setFormOnReset();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
   formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
    setFormOnReset();
  }

function setFormOnReset() {
    const getData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!getData) {
        formData = {};
        return
    } 
            if (getData.message && !getData.email) {
                form.elements.message.value = getData.message;
                form.elements.email.value = "";
            } else if (getData.email && !getData.message) {
                form.elements.email.value = getData.email;
               form.elements.message.value = "";        
            } else {
                form.elements.message.value = getData.message;
                form.elements.email.value = getData.email;
            }
}
