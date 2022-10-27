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
   
   return result.toFixed(0) 
}

function calcDiscount(discount) {
    let result = ((100 - this[discount]) / 100 )
    return result.toFixed(2)
}

function showProperty(property) {
    return this[property]
}

function showBuysum(person) {
    let result = `
    Cумма покупки = ${showProperty.call(person, "amount")}$\n
    Персональная скидка = ${showProperty.call(person, "personal")}% (${calcDiscount.call(person, "personal")})\n
    Региональная скидка = ${showProperty.call(person, "regional")}% (${calcDiscount.call(person, "regional")})\n
    Количественная скидка = ${showProperty.call(person, "quantitative")}% (${calcDiscount.call(person, "quantitative")})\n 
    Сумма покупки со скидкой = ${showAllDiscount(person)}$`;
    
    return alert(result);
}


showBuysum(person1);

