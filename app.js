"use strict";


const person1 = {
	name: 'Jack Truper',
    amount: '24500',
	personal: '5',
	regional: '2',
	quantitative: '15'
};

const person2 = {
	name: 'Mick Puper',
    amount: '27800',
	personal: '7',
	regional: '3',
	quantitative: '17'
};

const person3 = {
	name: 'Elly Oldbaby',
    amount: '23300',
	personal: '10',
	regional: '5',
	quantitative: '13'
};

const person4 = {
	name: 'John Black',
    amount: '22100',
	personal: '12',
	regional: '9',
	quantitative: '20'
};

const person5 = {
	name: 'Chang Yellow',
    amount: '20350',
	personal: '14',
	regional: '10',
	quantitative: '19'
};


const name = prompt( `Введите имя пользователя чтобы узнать данные о скидке\n
Список пользователей:\n
${showProperty.call(person1, "name")}\n
${showProperty.call(person2, "name")}\n
${showProperty.call(person3, "name")}\n
${showProperty.call(person4, "name")}\n
${showProperty.call(person5, "name")}\n
`, "John Black" )

switch(name) {
	case `${showProperty.call(person1, "name")}` :
		showBuysum(person1)
		break;
	case `${showProperty.call(person2, "name")}` :
		showBuysum(person2)
		break;
	case `${showProperty.call(person3, "name")}` :
		showBuysum(person3)
		break;
	case `${showProperty.call(person4, "name")}` :
		showBuysum(person4)
		break;
	case `${showProperty.call(person5, "name")}` :
		showBuysum(person5)
		break;
	default :
		alert("Неверное имя покупателя. Повторите попытку.")
}


function sumCurried(value) {
    return function(personal) {
        return function(regional) {
            return function(quantitative) {
                return ((value * personal) * regional) * quantitative;
            }
        }
    }
}

function showAllDiscount(person) {
   
    let result = sumCurried(showProperty.call(person, "amount"))
   (calcDiscount.call(person, "personal"))
   (calcDiscount.call(person, "regional"))
   (calcDiscount.call(person, "quantitative"))
   
   return result.toFixed(0); 
}

function calcDiscount(discount) {
    let result = ((100 - this[discount]) / 100 )
    return result.toFixed(2);
}

function showProperty(property) {
    return this[property];
}

function showBuysum(person) {
    let result = `
	Имя покупателя : ${showProperty.call(person, "name")}\n
    Cумма покупки = ${showProperty.call(person, "amount")}$\n
    Персональная скидка = ${showProperty.call(person, "personal")}% (${calcDiscount.call(person, "personal")})\n
    Региональная скидка = ${showProperty.call(person, "regional")}% (${calcDiscount.call(person, "regional")})\n
    Количественная скидка = ${showProperty.call(person, "quantitative")}% (${calcDiscount.call(person, "quantitative")})\n 
    Сумма покупки со скидкой = ${showAllDiscount(person)}$`;
    
    return alert(result);
}
