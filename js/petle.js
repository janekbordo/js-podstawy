let tablica = [1, 150, 200, 300, 4325, 13524461];

//wyrazenie poczatkowe, warunek, wyrazenie modyfikujace

for (let i = 0; i < tablica.length; i++) {

    console.log('index[' + i + '] a element to:' + tablica[i]);
}

tablica.forEach(function (element, index) {
    console.log('index to: ' + index + ', a element to: ' + element);
});

//petla while

let liczba = 10;

//while(liczba>1){
//    console.log(liczba);
//    liczba--;
//}

do {
    console.log(liczba);
    liczba--;

} while (liczba > 10);


//let i = 0;
//
//while (true) {
//    /* pętla while wykonywała by się w nieskończoność (ponieważ warunek tej pętli był by zawsze prawdziwy), gdyby nie znajdująca się wewnątrz instrukcja break (dzięki czemu pętla będzie wykonywana dopóki wartość zmiennej i nie osiągnie co najmniej wartości 9) */
//    console.log("napis [i = " + i + "] ");
//    if (i++ >= 9) {
//        break
//    };
//}

//continue - pomija nam elementy niespelniajace warunku

for (var i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        continue;
    };
    /* jeśli wartość zmiennej i nie jest podzielna przez dwa to przejdź do kolejnej iteracji jeśli jest podzielna przez dwa to wypisz tą iterację */
    console.log(i + " ");
}


let jsonObj = {
    "employees": [
        {
            "firstName": "John",
            "lastName": "Doe"
    },
        {
            "firstName": "Anna",
            "lastName": "Smith"
    },
        {
            "firstName": "Peter",
            "lastName": "Jones"
    }
    ]
}


for (let i = 0; i < jsonObj.employees.length; i++) {
    console.log(jsonObj.employees[i].firstName + ' ' + jsonObj.employees[i].lastName);
}


console.log(jsonObj.employees[0].firstName);
