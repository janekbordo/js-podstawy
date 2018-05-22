'use strict';

let tablica = ['agata', 'michal', 'andrzej'];
console.log(tablica);

tablica[3]='stefan';

console.log(tablica);

tablica.push('monika');

console.log(tablica);


//usuwanie ostatniego elementu tablicy - zwraca wartosc
let ostatni = tablica.pop();

console.log(ostatni);
console.log(tablica);

//dodawanie elementow na poczatku tablicy

tablica.unshift('janek','piotrek');

console.log(tablica);

//usuwanie elemntu na poczatku tablicy - zwraca wartosc

tablica.shift();

console.log(tablica);

//dlugosc tablicy

console.log(tablica.length);

//join w tablicy

console.log(tablica.join(' | '));

//odwracanie tablicy - reverse

console.log(tablica.reverse());
console.log(tablica);

//sortowanie tablicy 

console.log(tablica.sort());
console.log(tablica);


