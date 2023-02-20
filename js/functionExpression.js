'use strict';
console.log('functionExpression.js file was loaded');

// sukurti funkcija kuri sudeda 3 reiksmes. atspausdina ir grazina reiksme

function add(n1, n2, n3) {
  const sum = n1 + n2 + n3;
  console.log('sum ===', sum);
  return sum;
}

add(1, 2, 3);
