let a = prompt ( "Введите функцию. Варинаты: Объём Куба; Объём параллелепипеда", "Объём куба" );

switch (a) {
    case "Объём куба":
        calcVcube(a);
        break;
    
    case "Объём параллелепипеда" :
        calcVparalelp(a);
        break;
    
}



function calcVcube(n) {
    
    let b = prompt ("Введите чему равно ребро куба", "1");

    if (b >= 1) {
        alert( `Обьем куба (V) =  ${b ** 3}` );
    } else {
        alert ( "Ошибка введите другое значение" );
    }
}

function calcVparalelp (a) {
    
    let n = prompt ( "Введите ширину параллелепипеда", 1);
    let b = prompt ( "Введите длинну параллелепипеда", 1);
    let h = prompt ( "Введите высоту паралеллепипеда", 1 );

    if (a && b && h >= 1) {
        alert( `Объём (V) параллелепипеда = ${(n * b) * h}` );
    } else {
        alert ( "Ошибка введите другое значение" );
    }
}

