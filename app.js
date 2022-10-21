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


showObject(obj1);


function showObject(obj) {
    let memory = "";
    
    checkObj(obj);

    function checkObj(objValue) {
        
        for (let key in objValue) {
            
            if ( objValue[key] == null) {
                objValue[key] = "null";
            }

            if (typeof objValue[key] === 'object') {
                memory = key + " - { ";
                console.log(memory);
                checkObj(objValue[key]);
    
            } else {
                memory = key + " - " + objValue[key] + " }";
                console.log(memory);
            }
        }
    }
}
