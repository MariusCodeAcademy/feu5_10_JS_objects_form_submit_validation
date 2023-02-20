'use strict';
console.log('object.js file was loaded');

// objektas
const user = {
  // key : value
  username: 'James',
  town: 'London',
  age: 45,
  isOnline: true,
};
console.log('user ===', user);

// where is the user from ?
// gauti objekto savybes reiksme
// objektas.savybesKey
const userTown = user.town;
console.log('userTown ===', userTown);

// what is the age using [] notation
const userSelectedKey = 'isOnline';
const userSelectedValue = user[userSelectedKey];
console.log('userSelectedValue ===', userSelectedValue);

// what is the age using [] notation
const userAge = user['age'];
console.log('userAge ===', userAge);

// prideti nauja savybe i user objeka
// objektas.naujosSavybeKey = naujosSavybesValue
user.lastname = 'Bond';
console.log('user ===', user);

// istrinti kazkokia savybe
// delete objektas.savybesKey
delete user.isOnline;

console.log('user after delete ===', user);

// for in loop =========================================

// for (let peopertyKey in objectName) {}

for (let key in user) {
  console.log('key ===', key);
  const value = user[key];
  console.log('value ===', value);
}
