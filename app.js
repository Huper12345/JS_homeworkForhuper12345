"use strict";


function replaceStringNumber(value) {
    if( typeof value === "string" || value === null || typeof value === "boolean" ) {
        value = parseInt(value) || Number(value);
        return value;
    } 

    else if (Number.isNaN(value)) {
        return 0;
    } 
    
    else {
        return "Что то пошло не так!"
    }

}