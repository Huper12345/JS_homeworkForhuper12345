"use strict";

const phonePrice = 23;
const phoneAccesories = 5;

const tax = (phonePrice / 100) * 20;

let phoneSum = phonePrice + phoneAccesories + tax;

calcPhonesum();
proposeBuyphone();

function proposeBuyphone() {
    let message = confirm( 'Желаете купить телефон?' );

if (message == true) {
    buyPhone();
} else {
    alert( "Очень жаль! Когда будете готовы возвращайтесь." )
}
}

function buyPhone() {
    let balance = +prompt( 'Введите баланс банкоского счета', 1 );

    if (balance / phoneSum > 1) {
        
        let possibleBuy = balance / phoneSum;
        let message = confirm ( `Вы можете купить ${possibleBuy.toFixed(0)} телефонов. Желаете продолжить?` );

        if (message == true) {
            for ( let i = 0; i < balance ; balance = balance - phoneSum ) {
                if ( balance < phoneSum) {
                    alert( `Поздравляем с покупкой. Остаток баланса = ${showPrice(balance)}` );
                    
                    if (balance > phoneAccesories) {
                        
                        let buyAddaccesories = confirm ( 'Желаете купить дополнительные аксесуары на остаток денег?');
                        
                        if(buyAddaccesories == true) {

                            let acsessories = balance / phoneAccesories;
                           
                            for (let i = 0; i < balance; balance = balance - phoneAccesories) {
                                if (balance < phoneAccesories) {
                                    alert( `Вы купили еще ${Math.floor(acsessories)} аксесуара. Остаток баланса ${showPrice(balance)}` );
                                }
                            }
                        }
                    }
                }
            }

        } else {
            alert( 'Надеемся вы передумаете! Увидимся в следующий раз.' );
        }

   } else if (balance / phoneSum < 1) {
    alert( 'К сожалению у Вас не хватает денег. Попробуйте в другой раз.' );

   } else {
    alert( `Ошибка ввода данных. Повторите попытку` );
   } 
}

function calcPhonesum() {
    alert( 
    `Общая сумма покупки = ${showPrice(phoneSum)}. 
     Стоимость телефона = ${showPrice(phonePrice)}. 
     Стоимость аксесуаров = ${showPrice(phoneAccesories)}. 
     Налог = ${showPrice(tax)}.` );
}

function showPrice(value) {
    return value.toFixed(2) + "$";
}