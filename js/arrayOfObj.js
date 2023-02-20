'use strict';
console.log('arrayOfObj.js file was loaded');

const cars = [
  { make: 'Ford', year: 2020 }, // 0
  { make: 'Audi', year: 2022 }, // 1
  { make: 'BMW', year: 2019 }, // 2
];

console.log('cars ===', cars);

console.log('cars[1] ===', cars[1]);

// gauti BMW metu value?

const bmwYear = cars[2].year;
console.log('bmwYear ===', bmwYear);

// atspausdini visus pavadinimus
for (let i = 0; i < cars.length; i++) {
  const carObj = cars[i];
  console.log(carObj.make);
}
