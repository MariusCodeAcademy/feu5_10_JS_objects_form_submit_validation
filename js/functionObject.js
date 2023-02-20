'use strict';
console.log('functionObject.js file was loaded');

const user = {
  username: 'James',
  town: 'London',
  age: 45,
  isOnline: true,
};

// funkcija kuri atspausdina "my name is James and Im from London"

function greeting(obj) {
  // "my name is James and Im from London"
  const finalOutput = `my name is ${obj.username} and Im from ${obj.town}`;
  console.log('finalOutput ===', finalOutput);
}

greeting(user);
