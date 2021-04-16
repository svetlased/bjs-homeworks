"use strict";
function getSolutions(a, b, c){
    let d =  b**2 - 4 * a * c;
    if (d < 0) {
        return { 
            D: d,
            roots:[] 
        };
    } else if (d === 0) {
        let x1 = (-b) / 2 * a;
        return {
            D: d,
            roots: [x1]
        }
    } else {
        let x1 = (- b + Math.sqrt(d)) / (a * 2);
        let x2 = (- b - Math.sqrt(d)) / (a * 2);
        return { 
            D: d,
            roots: [x1, x2]
        }
    }
}
function showSolutionsMessage( a, b, c ) {
    let result = getSolutions(a, b, c).D;
    let solutions = getSolutions(a, b, c).roots;

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\nЗначение дискриминанта: ${result}.`);
    if (!solutions.length) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (solutions.length === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${solutions[0]}`);
    } else if (solutions.length === 2) {
        console.log(`Уравнение имеет два корня. X₁ = ${solutions[0]},  X₂ = ${solutions[1]}`)
    }
}
showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);



// задача 2

function getAverageMark(marks){
    if (marks.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}
function getAverageScore(data) {
    let value = Object.values(data);
    let result = {};
        if (value.length >= 10) {
            return `Слишком много параметров`;
        } 
    for (let lessons in data) {
        result[lessons] = getAverageMark(data[lessons]);
    }
    if (data === {}) {
        result.average = 0;
    }
    result.average = getAverageMark(Object.values(result));
    return result;
}

// задача 3

function getDecodedValue(secret) {
    if (secret === 1) {
      return "Эмильо";
    } else if (secret === 0) {
      return "Родриго";
    }
}

function getPersonData(secretData) {
    let result1 = {};
    for (let prop in secretData) {
      result1.firstName = getDecodedValue(secretData[prop]);
      result1.lastName = getDecodedValue(secretData[prop]);
    }
    return result1;
};
