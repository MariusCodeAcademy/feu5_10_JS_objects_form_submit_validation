'use strict';
console.log('object.js file was loaded');

// objektas
const user = {
  // key : value
  username: 'James',
  town: 'London',
  age: 45,
};

// where is the user from ?

const userTown = user.town;
console.log('userTown ===', userTown);
