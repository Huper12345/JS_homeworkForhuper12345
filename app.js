let a = prompt ( "Введите функцию. Варинаты: Объём Куба (1); Объём прямоугольного параллелепипеда (3)", "1" );

switch (a) {
    case "1":
        calcVcube(a);
        break;
    
    case "3" :
        calcVPparalelp(a);
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

function calcVPparalelp (a) {
    
    let n = prompt ( "Введите ширину параллелепипеда", 1);
    let b = prompt ( "Введите длинну параллелепипеда", 1);
    let h = prompt ( "Введите высоту паралеллепипеда", 1 );

    if (a && b && h >= 1) {
        alert( `Объём (V) прямоугольного параллелепипеда = ${(n * b) * h}` );
    } else {
        alert ( "Ошибка введите другое значение" );
    }
}

