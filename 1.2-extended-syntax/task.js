function getResult(a,b,c){
    "use strict";
    let d = b** + 4 * a * c;
    let x = [];
    
    if ( d < 0 ) {
        return x;
    } else if ( d === 0 ) {
        return x = [-b/2 * a ]
    } else {
        return x = [(- b + d) / (a * 2), (- b - d) / (a * 2)];
    }
}

function getAverageMark(marks){
    let sum = 0;
    let count = 0;
    
    if (marks === []) {
        return 0;
    } else if (marks.length > 5){
        console.log("Считаются только последние 5 оценок");
        marks = marks.splice(0, 4);
    }
    for (let i = 0; i< marks.length; i++) {
        count++;
        sum += marks[i];
        let averageMark = sum / count
    }
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let age = getFullYear(dateOfBirthday);
    let date = newDate(dateOfBirthday);
    let result;
    if (age > 18) {
        result = `Не желаете ли олд-фэшн, ${name}`;
    } else {
        result = `Сожалею, ${name}`;
    }
    
    return result;
}