"use strict";

let n = prompt 
( `Введите функцию. Варинаты:\nОбъём Куба (1);\nОбъём параллелепипеда (2);\nОбъём прямоугольного параллелепипеда (3);\nОбъём призмы (4);\nОбъём пирамиды(5) ;`, `1` 
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
    
    default :
        showError();
        break;

}

function calcVcube() {
    
    let b = +prompt ("Введите чему равно ребро куба (b)", 1);

    if (b >= 1) {
        
        let v = b ** 3;
        let s = 6 * (b * b);
        let d = b * Math.sqrt(3);
        
        alert( 
            `Обьем куба (V) =  ${v}\nПлощадь поверхности (S) = ${s}n\Длинна диагонали (D) = ${d}` 
            );
    } else {
        showError();
    }
}

function calcVparalelp() {
    
    let a = +prompt( "Введите длинну основания паралеллепипеда (a)", 1 );
    let b = +prompt ( "Введите ширину основания параллелепипеда (b)", 1 );
    let h = +prompt( "Введите высоту параллелепипеда (h)", 1 )

    let v = (a * b) * h;
    let s = 2 * (a * b) + (2 * ((a * b) + (a * h)));

    if (a && b && h >= 1) {
        alert( `Объём (V) параллелепипеда = ${v}. Площадь поверхности (S) = ${s}` );
    } else {
        showError();
    }
}

function calcVPparalelp () {
    
    let a = +prompt ( "Введите ширину прямоугольного параллелепипеда (a)", 1);
    let b = +prompt ( "Введите длинну прямоугольного параллелепипеда (b)", 1);
    let h = +prompt ( "Введите высоту прямоугольного паралеллепипеда (h)", 1 );

    let v = a * b * h
    let s = ( 2 * a * b ) + ( 2 * a * h ) + ( 2 * b * h); // Площадь поверхности
    let d = Math.sqrt( (a ** 2) + (b ** 2) + (h ** 2) ); // Длинна диагонали

    if (a && b && h >= 1) {
        alert( `
        Объём (V) прямоугольного параллелепипеда = ${v}\nПлощадь поверхности (S) = ${s}\nДлинна диагонали (D) = ${d}`
        );
    } else {
        showError();
    }
}

function calcVprizm() {

    let a = +prompt ( "Введите длинну стороны основания трапецивидной призмы (a - UP)", 1);
    let b = +prompt ( "Введите длинну стороны основания трапецивидной призмы (b - DOWN)", 1);
    let c = +prompt ( "Введите длинну стороны основания трапецивидной призмы (с)", 1);
    let g = +prompt ( "Введите длинну стороны основания трапецивидной призмы (g)", 1);

    let hf = +prompt ( "Введите длинну высоты основания трапецивидной призмы (hf)", 1);
    let h = +prompt( "Введите высоту призмы (h)", 1 )

    if (a && h && b && hf >= 1) {
        
        let sb = (a + b + c + g) * h // s бок
        let sf = ((a + b) / 2) * hf; //Площадь основания
        let v = (sf * h);
        let s = sb + (2 * sf); // Площадь поверхности

        alert( `Объём (V) призмы = ${v}. Площадь поверхности (S) = ${s}` );
    } else {
        showError();
    }
}

function calcVpyr() {

    let a = +prompt( "Введите длинну основания Четырехугольной пирамиды (a)", 1 );
    let b = +prompt ( "Введите ширину основания Четырехугольной пирамиды (b)", 1 );
    let h = +prompt( "Введите высоту Четырёхугольной пирамиды (h)", 1 )
        
    let sf = a * b;
    let s = (a * b) + (2 * ((a * b) + (a * h)));

    if (a && h && b >= 1) {
        alert( `Объём (V) Четырехугольной пирамиды = ${(sf / 3) * h}. Площадь поверхности (S) = ${s}` );
    } else {
        showError();
    }
}

function showError() {
    alert( "Ошибка, возможно вы ввели неправильное значение. Повторите попытку" );
}
