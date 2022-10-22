"use strict";


function replaceStringNumber(value) {
    if( value === "") {
        return 0;
    }
    
    if( typeof value === "string" || value === null || typeof value === "boolean" ) {
        value = parseInt(value);
        return value;
    } 

    else if (Number.isNaN(value)) {
        return 0;
    } 
    
    else {
        return "Ошибка, тип данных не строка!"
    }

}