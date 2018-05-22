'use strict';

//komentarze w javascript za pomoca cmd 

//console.log(); - KOMENTARZ LINIOWY
/*

console.log();   ---- KOMENTARZ BLOKOWY
*/


//zmienne

let liczba = 10;
let Liczba = 20;

//wielkosc liter ma znaczenie
//duze litery sa zarezerwowane dla klas 

console.log(liczba);
console.log(Liczba);

//funkcja loguje do konsoli

function logujDoKonsoli(){
    console.log('123');
}

logujDoKonsoli();

//funkcja dodaje do siebie 3 elementy

function dodaj(par1, par2, par3){
    return par1+par2+par3;
}

dodaj(1,2,3);

function odejmij (a,b,c){
    console.log(a+b-c);
}

odejmij(dodaj(1,2,3),32,10);

//zasieg parametrow

function ZmienWartosc(){
    liczba = 30;
    console.log(liczba);
}


console.log(liczba);
ZmienWartosc();
console.log(liczba);


