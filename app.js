"use strict";

const Person = {

    personConstructor: function (name, amount, _quantitative) {
        this.name = name;
        this.amount = amount;
        this.quantitative = quantitativeDiscount;
        this.personal = discountValue;
        return this;
    }

}

const person1 = new Person.personConstructor("Vasya", "24500", "5");

const person2 = new Person.personConstructor("Nikolay", "35500", "8");

const person3 = new Person.personConstructor("Masha", "55000", "20");

const person4 = new Person.personConstructor("Volodya", "11000", "12");


// Personal Discount

const getVasyaDiscount = discountValue.bind(person1);

const getNikolayDiscount = discountValue.bind(person2);

const getMashaDiscount = discountValue.bind(person3);

const getVolodyaDiscount = discountValue.bind(person4);

// calcPersonalDisount by Sum

function discountValue() {
    if ( this.amount < 15000) {
        return calcDiscountValue(10);
    } else if (this.amount >= 15000 && this.amount < 50000) {
        return calcDiscountValue(15);
    } else if (this.amount >= 50000) {
        return calcDiscountValue(20);
    } else  {
        return calcDiscountValue(20);
    }

}

function calcDiscountValue (value) {
    let personalDiscont = ((100 - value) / 100)
        return personalDiscont.toFixed(2);
}

// Discounts in Regions

const discountInPoland = calcDiscountValue(3);

const discountInGrece = calcDiscountValue(6);

const discountInHungary = calcDiscountValue(4.3)

const discountInUSA = calcDiscountValue(10);

// calc Quantative discount by items buy

function quantitativeDiscount() {
    if (this.quantitative < 3) {
        return calcDiscountValue(3);
    } else if (this.quantitative >= 3 && this.quantitative < 10) {
        return calcDiscountValue(8);
    } else if (this.quantitative >= 10) {
        return calcDiscountValue(10)
    } else {
        return calcDiscountValue(10);
    }
}

// Person quantitative

const getVasyaQuantative = quantitativeDiscount.bind(person1);

const getNikolayQuantative = quantitativeDiscount.bind(person2);

const getMashaQuantative = quantitativeDiscount.bind(person3);

const getVolodyaQuantative = quantitativeDiscount.bind(person4);

function calcAllDiscount(value) {
    return function(personal) {
        return function(regional) {
            return function(quantitative) {
                let result = ((value * personal) * regional) * quantitative;
                return result.toFixed(0)
            }
        }
    }
}

// Common discount in Countries

const commonDiscountinPoland = calcAllDiscount(discountInPoland);

const commonDiscountinGreece = calcAllDiscount(discountInGrece);

const commonDiscountinHugrary = calcAllDiscount(discountInHungary);

const commonDiscountinUSA = calcAllDiscount(discountInUSA);


// All buySum in Regions

const allDiscountVasyainPoland = commonDiscountinPoland(person1.amount)(getVasyaDiscount())(getVasyaQuantative());
const allDiscountVasyainGreece = commonDiscountinGreece(person1.amount)(getVasyaDiscount())(getVasyaQuantative());
const allDiscountVasyainHungrary = commonDiscountinHugrary(person1.amount)(getVasyaDiscount())(getVasyaQuantative());
const allDiscountVasyainUSA = commonDiscountinUSA(person1.amount)(getVasyaDiscount())(getVasyaQuantative());

const allDiscountNikolayinPoland = commonDiscountinPoland(person2.amount)(getNikolayDiscount())(getNikolayQuantative());
const allDiscountNikolayinGreece = commonDiscountinGreece(person2.amount)(getNikolayDiscount())(getNikolayQuantative());
const allDiscountNikolayinHungrary = commonDiscountinHugrary(person2.amount)(getNikolayDiscount())(getNikolayQuantative());
const allDiscountNikolayinUSA = commonDiscountinUSA(person2.amount)(getNikolayDiscount())(getNikolayQuantative());


const allDiscountMashainPoland = commonDiscountinPoland(person3.amount)(getMashaDiscount())(getMashaQuantative());
const allDiscountMashainGreece = commonDiscountinGreece(person3.amount)(getMashaDiscount())(getMashaQuantative());
const allDiscountMashainHungrary = commonDiscountinHugrary(person3.amount)(getMashaDiscount())(getMashaQuantative());
const allDiscountMashainUSA = commonDiscountinUSA(person3.amount)(getMashaDiscount())(getMashaQuantative());

const allDiscountVolodyainPoland = commonDiscountinPoland(person4.amount)(getVolodyaDiscount())(getVolodyaQuantative());
const allDiscountVolodyainGreece = commonDiscountinGreece(person4.amount)(getVolodyaDiscount())(getVolodyaQuantative());
const allDiscountVolodyainHungrary = commonDiscountinHugrary(person4.amount)(getVolodyaDiscount())(getVolodyaQuantative());
const allDiscountVolodyainUSA = commonDiscountinUSA(person4.amount)(getVolodyaDiscount())(getVolodyaQuantative());


let message = prompt ("Добро пожаловать в систему лояльности, введите данные пользователя.\nВарианты: Vasya, Nikolay, Masha, Volodya", "Vasya");

switch(message) {
    case "Vasya":
        alert(`${showPerson(person1)}\nОбщая cумма покупки + скидка региона:\nПольша: ${allDiscountVasyainPoland}$\nГреция: ${allDiscountVasyainGreece}$\nВенгрия: ${allDiscountVasyainHungrary}$\nСША: ${allDiscountVasyainUSA}$`);
        break;
    case "Nikolay":
        alert(`${showPerson(person2)}\nОбщая cумма покупки + скидка региона:\nПольша: ${allDiscountNikolayinPoland}$\nГреция: ${allDiscountNikolayinGreece}$\nВенгрия: ${allDiscountNikolayinHungrary}$\nСША: ${allDiscountNikolayinUSA}$`);
        break;
    case "Masha":
        alert(`${showPerson(person3)}\nОбщая cумма покупки + скидка региона:\nПольша: ${allDiscountMashainPoland}$\nГреция: ${allDiscountMashainGreece}$\nВенгрия: ${allDiscountMashainHungrary}$\nСША: ${allDiscountMashainUSA}$`);
        break;
    case "Volodya":
        alert(`${showPerson(person4)}\nОбщая cумма покупки + скидка региона:\nПольша: ${allDiscountVolodyainPoland}$\nГреция: ${allDiscountVolodyainGreece}$\nВенгрия: ${allDiscountVolodyainHungrary}$\nСША: ${allDiscountVolodyainUSA}$`);
        break;

    case "Моя скидка":
        let prompt 
    default :
        alert("Неверное имя пользователя. Повторите попытку");
}

function showPerson(person) {
    return ( `Имя покупателя: ${person.name}\nСумма покупки: ${person.amount}$\n${showDiscountinParsent(person)}\n` )
}

function showDiscountinParsent(person) {
    return `Персональная скидка: ${((1 - person.personal()) * 100).toFixed(0)}%\nСкидка от суммы купленных товаров ${((1 - person.quantitative()) * 100).toFixed(0)}%`
}