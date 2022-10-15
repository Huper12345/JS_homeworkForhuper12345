let a = prompt ( "Введите фигуру. Варинаты: Куб", "Куб" );

switch (a) {
    case "Куб":
        calcCub(a);
    
}

function calcCub(a) {
    let b = prompt ("Введите чему равно ребро куба", "1");

    alert(`Обьем куба =  ${b ** 3}`);
}