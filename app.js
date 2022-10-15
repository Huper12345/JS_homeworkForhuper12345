let a = prompt ( "Введите фигуру. Варинаты: Куб", "Куб" );

switch (a) {
    case "Куб":
        calcVcube(a);
    
}

function calcVcube(a) {
    let b = prompt ("Введите чему равно ребро куба", "1");

    alert(`Обьем куба (V) =  ${b ** 3}`);
}