//Родительский класс Shape(Фигура)
class Shape {
  constructor() {
    // В базовом классе конструкторе нет необходимости в свойствах, но здесь можно определить общие методы.
  }

  //Метод чтоб рассчитать периметр
  calculatePerimeter() {
    throw new Error(
      "Метод calculatePerimeter() должен быть реализован в подклассе"
    );
  }

  //Метод чтоб рассчитать площадь
  calculateArea() {
    throw new Error("Метод calculateArea() должен быть реализован в подклассе");
  }
}

//ПРЯМОУГОЛЬНИК
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  //вычисляем периметр прямоугольника
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }

  //вычисляем площадь прямоугольника
  calculateArea() {
    return this.width * this.height;
  }
}

//КРУГ
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  //Вычисляем периметр круга
  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }

  //Вычисляем площадь круга
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

//ТРЕУГОЛЬНИК
class Triangle extends Shape {
  constructor(sideA, sideB, sideC) {
    super();
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  //Вычисляем периметр треугольника
  calculatePerimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  //Вычисляем площадь треугольника
  calculateArea() {
    const s = this.calculatePerimeter() / 2;
    return Math.sqrt(
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC)
    );
  }
}

const rectangle = new Rectangle(5, 4);
console.log("---Прямоугольник---");
console.log("Периметр:", rectangle.calculatePerimeter());
console.log("Площадь:", rectangle.calculateArea());

const circle = new Circle(3);
console.log("---Круг---");
console.log("Периметр:", circle.calculatePerimeter());
console.log("Площадь:", circle.calculateArea());

const triangle = new Triangle(3, 4, 5);
console.log("---Треугольник---");
console.log("Периметр:", triangle.calculatePerimeter());
console.log("Площадь:", triangle.calculateArea());
