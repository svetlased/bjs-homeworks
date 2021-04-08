"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);
    let monthPayment
    let bodyCredit = amount - contribution;
    monthPayment = bodyCredit * ((1/12 * percent) + (1/12 * percent)/(((1 + (1/12 * percent))**time) - 1));
    let time = bodyCredit / monthPayment;
    monthPayment.toFixed(2);
    

    // return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}