function isPalindrome() {
    let result = this.toLowerCase().replace(/ /g, '').split("");
    return result.join("") === result.reverse().join("");
}
// или 
// function isPalindrome() {
// return this == this.split('').reverse().join('');
// }

String.prototype.isPalindrome = isPalindrome;


function getAverageMark(marks) {
    // код для задачи №2 писать здесь

    if (marks.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return Math.round(sum / marks.length);
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    const now = new Date();
    const data = new Date(birthday.split('-'));
    const parsedBirthday = Date([Number(data[0]), Number((+data[1])-1), Number(+data[2])]);
    let diff = parsedBirthday - now;
    let age = diff / (86400000 * 365.25);
    return age >= 18;
}