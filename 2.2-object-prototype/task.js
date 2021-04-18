function isPalindrome() {
    let result = this.split('').reverse().join('');
    if (result.toLowerCase() === this.toLowerCase()) {
        return true;
    } else {
        return false;
    }
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
    birthday = Date([Number(birthday[0]), Number((+birthday[1])-1), Number(+birthday[2])]);
    let diff = birthday - now;
    let age = diff / 31536000000;
    return age >= 18;
}