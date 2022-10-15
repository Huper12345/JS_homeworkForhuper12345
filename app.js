let n = prompt 
( "Введите функцию. Варинаты: Объём Куба (1); Объём параллелепипеда (2) ; Объём прямоугольного параллелепипеда (3)", "1" 
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

