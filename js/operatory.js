'use strict';

//operatory arytmetyczne

console.log(100 % 3);

let zmienna = 3;

console.log(++zmienna);
console.log(zmienna--);

//operatory porownania 

if (2 == '2') {

    //    w przypadku == sprawdzamy wartosci bez typu danych
    console.log('2== "2"');


}
//    w prypadku === sprawdzamy razem z typem danych
if (2 === '2') {

    console.log('2=="2"');
} else {
    console.log('2 !== "2"');
}

//operatory logiczne
if (2 == '2' && 3 == '3') {

    console.log('3=="3" i 2=="2"');
}

if (2 == '2' || 3 === '3') {

    console.log('2=="2" || 3==="3"');
}

let booleanowska = false;

if (!booleanowska) {

    console.log("Zaprzeczenie dla booleanowska=false");
}

//operatory warunkowe

let liczba = 250;
let wynik = (liczba < 0) ? 'zgoda' : 'taki chuj, nie jest mniejsza od 0';
console.log(wynik);

//instrukcje warunkowe
//switch

let kolor = 'czerwony';
switch(kolor){
    case 'niebieski':
        console.log('podales kolor niebieski');
        break;
    case 'zielony':
        console.log('podales kolor zielony');
        break;
    case 'czerwony':
        console.log('podales kolor czerwony');
        break;
    default:
        console.log('jestes daltonista');
}


