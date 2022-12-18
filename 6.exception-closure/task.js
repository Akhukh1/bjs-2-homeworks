function parseCount(numberOfUnits) {
    let parsNumber = Number.parseFloat(numberOfUnits);
    if (isNaN(parsNumber)) {
      throw new Error('Невалидное значение');
    }
    return parsNumber;
}

function validateCount(parsNumber) {
  try {
    return parseCount(parsNumber);
  } catch (error) {
    return error;
  } 
}

class Triangle {

  constructor(a, b, c) {
    if (a + b <= c ||
      a + c <= b ||
      b + c <= a) {
        throw new Error('Треугольник с такими сторонами не существует');
    }

    this.a = a;
    this.b = b;
    this.c = c;
    
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    let semiPerimeter = this.perimeter / 2; 
    let square = Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));
    return Number(square.toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },
      get area() {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }

}



parseCount(12);

parseCount(012);

// parseCount("ыфва");

parseCount(12);
parseCount(012);
// parseCount("ыфва");

const triangle = new Triangle(2,5,5);
console.log(triangle);

const triangle2 = new Triangle(6,10,15);
console.log(triangle2);
