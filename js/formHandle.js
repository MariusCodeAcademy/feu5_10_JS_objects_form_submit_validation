'use strict';
console.log('formHandle.js file was loaded');

// pasiimti reiksmes is formos

// nusitaikyti i forma ir inputus
const formEl = document.getElementById('userForm');
const emailEl = formEl.querySelector('#email');
const nameEl = formEl.querySelector('#name');
const ageEl = formEl.querySelector('#age');
// errors EL
const errorsEl = document.getElementById('errors');
// debugger;

// uzdeti formai ivykio submit pasiklausyma

formEl.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
  // eventas yra ivykio objektas
  // event.preventDefault() - sustabdyti numatytaji veiksma, siuo atveju perkovima ir duomenu issiuntima kitu budu
  // ivykus ivykiui mes sustabdysim forma
  event.preventDefault();
  console.log('formSubmitHandler ivyko');

  // issivalom pries tai buvusias klaidas
  clearErrors();

  // if (emailEl.value === '' || nameEl.value === '' || ageEl.value === '') {
  //   // alert('prasom uzpildyti');
  //   showError();
  //   return;
  // }

  if ([emailEl.value, nameEl.value, ageEl.value].includes('')) {
    showError();
    return;
  }

  const newUserFromInputs = {
    email: emailEl.value,
    name: nameEl.value,
    age: ageEl.value,
  };
  console.log('newUserFromInputs ===', newUserFromInputs);
}
// sustabde forma nuo perkrovimo mes pasiimsim visu inputu reikmes

// jei reiksme neivesta, pranesam apie klaida

// function pranesti apie klaida
function showError() {
  const h2El = document.createElement('h2');
  h2El.textContent = 'Visi laukai privalomi';
  h2El.classList.add('singleError');
  errorsEl.append(h2El);
}

function clearErrors() {
  errorsEl.innerHTML = '';
}
