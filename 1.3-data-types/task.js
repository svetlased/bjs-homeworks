"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);

    let lastDayYear = date.getFullYear();
    let lastDayMonth = date.getMonth();

    let today = new Date();
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth();
    

    let monthPayment
    let bodyCredit = amount - contribution;
    let time = (todayYear - lastDayYear)*12 + (lastDayMonth - todayMonth);
    monthPayment = bodyCredit * ((1/12 * percent) + (1/12 * percent)/(((1 + (1/12 * percent))**time) - 1));
    let totalAmount = time * monthPayment;

    return totalAmount.toFixed(2);
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    if (!name) {
        name = "Аноним";
    } 
    let greeting = `Привет, мир! Меня зовут ${name}`;
    return greeting;
}