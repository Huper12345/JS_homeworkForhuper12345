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

const tax3 = sumCurried(0.95)(0.98)(0.85);

console.log(tax3(24500));