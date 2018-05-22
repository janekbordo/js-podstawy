'use strict';

let tablica = ['agata', 'michal', 'andrzej'];
console.log(tablica);

tablica[3]='stefan';

console.log(tablica);

tablica.push('monika');

console.log(tablica);


//usuwanie ostatniego elementu tablicy
let ostatni = tablica.pop();

console.log(ostatni);
console.log(tablica);

tablica.unshift('janek','piotrek');

console.log(tablica);