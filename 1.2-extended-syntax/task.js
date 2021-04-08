"use strict";
function getResult(a,b,c) {
    let d = [b**2 - 4 * a * c];
        
    if ( d > 0 ) {
        return [(- b + Math.sqrt(d)) / (a * 2), (- b - Math.sqrt(d)) / (a * 2)];
    } else if ( d === 0 ) {
        return [((-b)/2 * a)];
    } else {
        return [];
    }
}

function getAverageMark(marks){
    let sum;
    let averageMark;
    
    if (marks === []) {
        console.log(0);
    } else if (marks.length > 5){
        console.log("Считаются только последние 5 оценок");
        marks = marks.splice(0, 5);
    }
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return averageMark = sum / marks.length;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let today = new Date();
    let todayYear = today.getFullYear();
    let age = todayYear - dateOfBirthday.getFullYear();
    let result;

    if (age >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
    
    return result;
}