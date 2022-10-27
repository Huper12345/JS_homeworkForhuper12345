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

const tax1 = sumCurried(calcDiscount.call(person1, "personal"))(calcDiscount.call(person1, "regional"))(calcDiscount.call(person1, "quantitative"));
const tax2 = sumCurried(calcDiscount.call(person2, "personal"))(calcDiscount.call(person1, "regional"))(calcDiscount.call(person1, "quantitative"));
const tax3 = sumCurried(calcDiscount.call(person3, "personal"))(calcDiscount.call(person1, "regional"))(calcDiscount.call(person1, "quantitative"));
const tax4 = sumCurried(calcDiscount.call(person4, "personal"))(calcDiscount.call(person1, "regional"))(calcDiscount.call(person1, "quantitative"));
const tax5 = sumCurried(calcDiscount.call(person5, "personal"))(calcDiscount.call(person1, "regional"))(calcDiscount.call(person1, "quantitative"));
console.log(tax1(24500));


function calcDiscount(property) {
    let result = ((100 - this[property]) / 100 )
    return result.toFixed(2)
  }

  function showAm(amount) {
    return this[amount]
  }


console.log(calcDiscount.call(person5, "personal"));
console.log(calcDiscount.call(person5, "regional"));
console.log(calcDiscount.call(person5, "quantitative"));

console.log(showAm.call(person5, "amount"));

