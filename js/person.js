'use strict';
console.log('person.js file was loaded');

// taikytis i elementus
const mainForm = document.getElementById('personForm');
const firstnameEl = document.getElementById('firstname');
const lastnameEl = document.getElementById('lastname');
const ageEl = document.getElementById('age');
const isMarriedEl = document.getElementById('isMarried');
const townEl = document.getElementById('town');

const outputDiv = document.getElementById('output');

// perimti formos valdyma

mainForm.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
  // sustabdyti forma kad neperkrautu puslapio
  event.preventDefault();
  console.log('formSubmitHandler ivyko');

  // 2. pateikiant forma surinkti visu inputu informacija i nauja objekta.
  const newPersonObj = {};
  newPersonObj.firstname = firstnameEl.value;
  newPersonObj.lastname = lastnameEl.value;
  newPersonObj.age = ageEl.value;
  newPersonObj.isMarried = isMarriedEl.value;
  newPersonObj.town = townEl.value;
  console.log('newPersonObj created ===', newPersonObj);

  // 3. sukurti funkcija kuri naujai gauta objekta paverstu html ir patalpintu.
  personObjToHtml(newPersonObj);
}

/*
<div class="onePerson card">
  <h2>name surname</h2>
  <p>25 years old.</p>
  <p>name is married and from town</p>
</div>
*/
function personObjToHtml(obj) {
  console.log('personObjToHtml ivyko');
  // console.log('obj ===', obj);
  const divEl = document.createElement('div');
  divEl.classList.add('onePerson', 'card');
  crEL('h2', `${obj.firstname} ${obj.lastname}`, divEl);
  crEL('p', `${obj.age} years old.`, divEl);
  const marriedOrNot = obj.isMarried === 'no' ? 'not ' : '';
  crEL(
    'p',
    `${obj.firstname} is ${marriedOrNot}married and from ${obj.town}`,
    divEl
  );
  outputDiv.append(divEl);
}

// helper fn

function crEL(tagName, text, parentEl) {
  const newEl = document.createElement(tagName);
  newEl.textContent = text;
  parentEl.append(newEl);
}
// crEL('h2', 'name surname', divel)
