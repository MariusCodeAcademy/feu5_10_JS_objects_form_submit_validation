'use strict';
console.log('functionObject.js file was loaded');

const user = {
  username: 'James',
  town: 'London',
  age: 45,
  isOnline: true,
  makeGreeting: function () {
    // makeGreeting yra metodas. metodas yra funkcija objekto viduje
    // "my name is James and Im from London"
    // this === user
    const finalOutput = `my name is ${this.username} and Im from ${this.town}`;
    console.log('makeGreeting ===', finalOutput);
  },
};

user.makeGreeting();

// funkcija kuri atspausdina "my name is James and Im from London"

function greeting(obj) {
  // "my name is James and Im from London"
  const finalOutput = `my name is ${obj.username} and Im from ${obj.town}`;
  console.log('finalOutput ===', finalOutput);
}

greeting(user);
