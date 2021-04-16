"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let today = new Date();
    console.log({ percent, contribution, amount, date });
    if (isNaN(percent) || percent <= 0 ){
        console.log( `Параметр percent содержит неправильное значение ${percent}`);
    } else if (isNaN(contribution) || contribution <= 0){
        console.log(`Параметр contribution содержит неправильное значение ${contribution}`);
    } else if (isNaN(amount) || amount <= 0 ) {
        console.log(`Параметр percent содержит неправильное значение ${percent}`);
    } else if ((date - today) <= 0) {
        console.log(`Параметр date содержит неправильное значение ${date}`);
    }


    let bodyCredit = amount - contribution;
    let indexP = percent / (12 * 100);
    let time = (date.getFullYear() - today.getFullYear())*12 + (date.getMonth() - today.getMonth());
    let monthPayment = bodyCredit * (indexP + indexP/(((1 + indexP)**time) - 1));
    let totalAmount = time * monthPayment;

    totalAmount.toFixed(2);
    totalAmount = Math.round(totalAmount * 100) / 100;
    console.log(totalAmount);

    return Number(totalAmount);
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    if (!name) {
        name = "Аноним";
    } 
    return `Привет, мир! Меня зовут ${name}.`
}