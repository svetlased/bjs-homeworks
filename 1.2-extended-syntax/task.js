"use strict";
function getResult(a,b,c) {
    let d = b**2 - 4 * a * c;
        
    if ( d > 0 ) {
        return [(- b + Math.sqrt(d)) / (a * 2), (- b - Math.sqrt(d)) / (a * 2)];
    } else if ( d === 0 ) {
        return [((-b)/2 * a)];
    } else {
        return [];
    }
}

function getAverageMark(marks){
    let sum = 0;
    
    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 5){
        marks = marks.splice(0, 5);
    }
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();;


    if (age >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
}