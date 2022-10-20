"use strict";

let obj1 = {
	firstName: "Витя",
	lastName: "Киселёв",
	age: 45,
	children: null,
	dates: {
		birthday: '26.01.1977',
		wedding: '05.09.2000',
		graduationFromUniversity: '07.06.2003',
	},
}


function showObject(obj) {
    let mes = "";

    for(let key in obj ) {
        
        if (typeof obj[key] == "string") {
            mes = key + " - " + "'" + obj[key] + "'";
        } else {
            mes = key + " - " + obj[key];
        }
        
        if(typeof obj[key] == "object") {
            
            for(let keyProp in obj[key]) {
                mes = key + "-" + keyProp + " - " + "'" + obj[key][keyProp] + "'";
                console.log(mes)
            }
        }
        console.log(mes)
    }
}
showObject(obj1);