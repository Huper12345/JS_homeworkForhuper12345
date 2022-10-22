"use strict";


function replaceStringNumber(value) {
    if( value === "") {
        value = Number(value)
        return value;
    }
    
    if( typeof value === "string" || value === null || typeof value === "boolean" ) {
        value = parseInt(value);
        return value;
    } 

    else if (value !== value) {
        return 0;
    } 
    
    else {
        return "Ошибка, тип данных не строка!"
    }

}