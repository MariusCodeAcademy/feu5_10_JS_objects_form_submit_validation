'use strict';
console.log('formHandle.js file was loaded');

// pasiimti reiksmes is formos

// Global user arr
const usersArray = [];

// nusitaikyti i forma ir inputus
const formEl = document.getElementById('userForm');
const emailEl = formEl.querySelector('#email');
const nameEl = formEl.querySelector('#name');
const ageEl = formEl.querySelector('#age');
// errors EL
const errorsEl = document.getElementById('errors');
const outputDiv = document.getElementById('app');
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
  // sukuriam nauja useri is formo inputu
  const newUserFromInputs = {
    email: emailEl.value,
    name: nameEl.value,
    age: ageEl.value,
  };
  console.log('newUserFromInputs ===', newUserFromInputs);

  // addUserToHTML(newUserFromInputs);
  // debugger;
  addUserToArray(newUserFromInputs);

  // reset form fields
  formEl.reset();
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

/*
<div class="oneUser">
  <h3>Email: james@bond.com</h3>
  <p>Name: James</p>
  <p>Age: 45 years old</p>
</div>
*/
function addUserToHTML(userObj) {
  const divEl = document.createElement('div');
  divEl.classList.add('oneUser', 'card');
  const inneDivContents = `
  <h3>Email: ${userObj.email}</h3>
  <p>Name: ${userObj.name}</p>
  <p>Age: ${userObj.age} years old</p>
  `;
  divEl.innerHTML = inneDivContents;
  outputDiv.append(divEl);
}

// pridejimas i pagrindini masyva is kurio piesim elementus
function addUserToArray(userObj) {
  usersArray.push(userObj);
  // console.log('usersArray ===', usersArray);
  renderCars();
}

function renderCars() {
  // clean out the container before regenerating
  outputDiv.innerHTML = '';
  for (let i = 0; i < usersArray.length; i++) {
    const oneUser = usersArray[i];
    addUserToHTML(oneUser);
  }
}
