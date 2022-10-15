let a = prompt ( "Введите функцию. Варинаты: Объём Куба", "Объём куба" );

switch (a) {
    case "Объём куба":
        calcVcube(a);
    
}

function calcVcube(a) {
    let b = prompt ("Введите чему равно ребро куба", "1");

    alert(`Обьем куба (V) =  ${b ** 3}`);
}