"use strict";


function replaceStringNumber(value) {
    return parseFloat(value) || Number(value);
}

// А что если использовать Parsefloat? Можно избежать проблемы с числами вроде 1334.222323. 
// Насколько я понял отличия будут если записать экспоненциальную запись числа 1e5 например.