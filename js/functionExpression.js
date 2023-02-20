'use strict';
console.log('functionExpression.js file was loaded');

// sukurti funkcija kuri sudeda 3 reiksmes. atspausdina ir grazina reiksme

// del js hoisting mes galim iskviesti funkcija pries ja deklaruodamis
add(3, 2, 3);

// function deklaration
function add(n1, n2, n3) {
  const sum = n1 + n2 + n3;
  console.log('sum ===', sum);
  return sum;
}

add(1, 2, 3);

// function expression
// addExpression(10, 20, 30); // kvieciam tik po inicializacijos

const addExpression = function (n1, n2, n3) {
  const sum = n1 + n2 + n3;
  console.log('sum expression ===', sum);
  return sum;
};
addExpression(10, 20, 30);

// anonimine arrow funkcija =========================================
// '=>' tas pats kaip ir 'return'
const addExpressionArrow = (n1, n2, n3) => {
  const sum = n1 + n2 + n3;
  console.log('sum addExpressionArrow ===', sum);
  return sum;
};
addExpressionArrow(5, 5, 5);

// jei musu funkcija iskart grazina reiksme galime ja sutrumpinti i viena eilute
// const sumArrow = (n1, n2, n3) => {
//   return n1 + n2 + n3;
// };

const sumArrow = (n1, n2, n3) => n1 + n2 + n3;

console.log(sumArrow(1, 5, 6));
