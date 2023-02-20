'use strict';
console.log('formHandle.js file was loaded');

// pasiimti reiksmes is formos

// nusitaikyti i forma ir inputus
const formEl = document.getElementById('userForm');
const emailEl = formEl.querySelector('#email');
const nameEl = formEl.querySelector('#name');
const ageEl = formEl.querySelector('#age');
// debugger;

// uzdeti formai ivykio submit pasiklausyma

formEl.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
  // eventas yra ivykio objektas
  // event.preventDefault() - sustabdyti numatytaji veiksma, siuo atveju perkovima ir duomenu issiuntima kitu budu
  // ivykus ivykiui mes sustabdysim forma
  event.preventDefault();
  console.log('formSubmitHandler ran');
  const newUserFromInputs = {
    email: emailEl.value,
    name: '',
    age: '',
  };
  console.log('newUserFromInputs ===', newUserFromInputs);
}
// sustabde forma nuo perkrovimo mes pasiimsim visu inputu reikmes
