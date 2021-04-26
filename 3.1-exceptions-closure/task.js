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
        if (!(a + b > c && a + c > b && b + c > a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c; 
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea(){
        let semiPerim = this.getPerimeter() * 0.5;
        return Number(Math.sqrt(semiPerim * (semiPerim - this.a) * (semiPerim - this.b) * (semiPerim - this.c)).toFixed(3));
    }
}
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(err) {
        return {
        getArea() {
            return 'Ошибка! Треугольник не существует';
          },
          getPerimeter() {
            return 'Ошибка! Треугольник не существует';
          }
        }
    }
}
    