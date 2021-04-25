function parseCount(valuePars) {
    if (Number.parseInt(valuePars) === NaN) {
      throw new Error("Невалидное значение");
      }
      return Number.parseInt(valuePars);
}
function validateCount(valueForPars) {
    try {
        parseCount(valueForPars);
    } catch(err) {
        return err;
    }
    parseCount(valueForPars);
}

class Triangle {
    constructor(a, b, c) {
        if (a + b !== c || a + c !== b || b + c !== a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea(){
        let semiPerim = getPerimeter() * 0.5;
        let square = Math.sqrt(semiPerim * (semiPerim - this.a) * (semiPerim - this.b) * (semiPerim - this.c));
        return square.toFixed(3);
    }
}
function getTriangle(a, b, c) {
    try {
        return new Triangle;
    } catch {
        return {getArea, getPerimeter}
    }

}