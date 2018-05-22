'use strict';

let osoba = {
    name : 'Marcin',
    height: '170',
    print: function(){console.log(this.name)}
}

//console.log(osoba.name + ' ' + osoba.height);

osoba.print();

//aby dodac nowe pole do obiektu, podajemy nazwe zmienne pod ktora trzymamy obiekt, kropke i nazwe nowego klucza wraz z przypisana wartoscia, nmozemy przypisywac rowniez metody

osoba.weight = 60;
osoba.wyswietlaDane = function(){
    console.log(this.name + ' ' + this.height + ' ' + this.weight);
}

osoba.wyswietlaDane();

//aby utworzyc klase uzywamy slowa kluczowego class, podajemy nazwew klasy (z duzej litery), otwieramy nawias klamrowy i definiujemy constructor(ktory jest potrzebny do utworzenia obiekty z klasy). nastepnie mozemy zdefiniowac metody

class Osoba {
    constructor(imie, nazwisko){
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    WyswietlDaneOsobowe(){
        console.log(this.imie + ' ' + this.nazwisko);
    }
}

let janek = new Osoba('Janek', 'B');
let krzysztof = new Osoba('Krzysztof', 'G');

janek.height = 198;

janek.WyswietlDaneOsobowe();


let zmienna = Math.round((Math.random() *99) + 1);

console.log(zmienna);