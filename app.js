let n = prompt 
( "Введите функцию. Варинаты: Объём Куба (1); Объём параллелепипеда (2) ; Объём прямоугольного параллелепипеда (3); Объём призмы (4) ; Объём пирамиды(5)", "1" 
);

switch (n) {
    case "1":
        calcVcube();
        break;
    
    case "2" :
        calcVparalelp();
        break;
    
    case "3" :
        calcVPparalelp();
        break;
    
    case "4" :
        calcVprizm();
        break;
    
    case "5" :
        calcVpyr();
        break;
    
}

function calcVcube() {
    
    let b = prompt ("Введите чему равно ребро куба", "1");

    if (b >= 1) {
        alert( `Обьем куба (V) =  ${b ** 3}` );
    } else {
        alert ( "Ошибка введите другое значение" );
    }
}

function calcVparalelp() {

    let s = prompt( "Введите площадь основания параллелепипеда", 1 );
    let h = prompt( "Введите высоту параллелепипеда", 1 )

    if (s && h >= 1) {
        alert( `Объём (V) параллелепипеда = ${s * h}` );
    } else {
        alert ( "Ошибка введите другое значение" );
    }
}

function calcVPparalelp () {
    
    let a = prompt ( "Введите ширину параллелепипеда", 1);
    let b = prompt ( "Введите длинну параллелепипеда", 1);
    let h = prompt ( "Введите высоту паралеллепипеда", 1 );

    if (a && b && h >= 1) {
        alert( `Объём (V) прямоугольного параллелепипеда = ${a * b * h}` );
    } else {
        alert ( "Ошибка введите другое значение" );
    }
}

function calcVprizm() {

    let s = prompt( "Введите площадь основания призмы", 1 );
    let h = prompt( "Введите высоту призмы", 1 )

    if (s && h >= 1) {
        alert( `Объём (V) призмы = ${s * h}` );
    } else {
        alert ( "Ошибка введите другое значение" );
    }
}

function calcVpyr() {
    let s = prompt( "Введите площадь основания пирамиды", 1 );
    let h = prompt( "Введите высоту пирамиды", 1 );

    if (s && h >= 1) {
        alert( `Объём (V) пирамиды = ${(s / 3) * h}` );
    } else {
        alert ( "Ошибка введите другое значение" );
    }
}