"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    console.log(typeof percent, contribution, amount, date);
    if (typeof percent !== 'number'){
        return `Параметр percent содержит неправильное значение ${percent}`;
    } else if (typeof contribution !== 'number'){
        return `Параметр contribution содержит неправильное значение ${contribution}`;
    } else if (typeof amount !== 'number'){
        return `Параметр percent содержит неправильное значение ${percent}`;
    }
    // percent = Number(percent);
    // contribution = Number(contribution);
    // amount = Number(amount);
    console.log(percent, contribution, amount, date)

    let today = new Date();

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
    let greeting = `Привет, мир! Меня зовут ${name}.`;
    return greeting;
}