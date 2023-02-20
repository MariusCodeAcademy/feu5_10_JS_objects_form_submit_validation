'use strict';
console.log('person.js file was loaded');

// taikytis i elementus
const mainForm = document.getElementById('personForm');
const firstnameEl = document.getElementById('firstname');
const lastnameEl = document.getElementById('lastname');
const ageEl = document.getElementById('age');
const isMarriedEl = document.getElementById('isMarried');
const townEl = document.getElementById('town');

// perimti formos valdyma

mainForm.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
  // sustabdyti forma kad neperkrautu puslapio
  event.preventDefault();
  console.log('formSubmitHandler ivyko');

  // 2. pateikiant forma surinkti visu inputu informacija i nauja objekta.
}
