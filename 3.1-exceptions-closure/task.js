function parseCount(valuePars) {
    if (Number.isNaN(parseInt(valuePars))) {
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
    return parseCount(valueForPars);
}

class Triangle {
    constructor(a, b, c) {
        if (a + b < c && a + c < b && b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        // this.a = a;
        // this.b = b;
        // this.c = c;
    }
    getPerimeter() {
        return a + b + c;
    }
    getArea(){
        this.semiPerim = this.getPerimeter() * 0.5;
        let square = Math.sqrt(this.semiPerim * (this.semiPerim - this.a) * (this.semiPerim - this.b) * (this.semiPerim - this.c));
        return Number.square.toFixed(3);
    }
}
function getTriangle(a, b, c) {
    try {
        return new Triangle;
    } catch {
        return {getArea, getPerimeter}
    }

}