// 클래스(틀)를 이용해 객체를 생산하기
const house1 = new House('1996', 'UN Village', '9');
console.log('house1 >>', house1); // House { year: '1996', name: 'UN Village', window: '9' }
console.log(typeof house1); // object
console.log(house1.year); // 1996
house1.getAge(); // UN Village은 건축한지 27년 되었어요!
house1.getWindow(); // UN Village의 창문은 9개 입니다!

// house2: 2007년에 지어진 "자이" 이름이고, 창문은 10개
const house2 = new House('2007', '자이', '10');
house2.getAge(); // 자이은 건축한지 16년 되었어요!
house2.getWindow(); // 자이의 창문은 10개 입니다!

// 클래스 상속
class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    // super: 부모 객체에서 상속 받아옴 = 상속한 부모 클래스의 생성자를 호출
    super(year, name, window);
    this.floor = floor;
    this.windowMaker = windowMaker;
  }

  getAptInfo() {
    return `${this.year}에 지어진 ${this.name} 아파트의 
        총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}이다.`;
  }

  // 오버라이딩(overriding)
  // 부모 클래스에 정의되어 있는 메서드 이름을 동일하게 쓰되, 내용은 다를 때
  getWindow() {
    return `${this.name} 아파트의 ${this.window}개의 창문은 ${this.windowMaker}회사에서 생산되었습니다.`;
  }
}

const apt1 = new Apartment(2022, '래미안', 3, 20, 'KCC');
console.log(apt1);
console.log(apt1.getAptInfo());
console.log(apt1.getWindow());
console.log(apt1.getAge());

// Quiz
// 부모 클래스 Shape
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

// Shape을 상속받는 직사각형 클래스
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getSqrt() {
    return Math.sqrt(this.getArea());
  }
}

const rec = new Rectangle(3, 4);
console.log(rec.getArea());
console.log(rec.getSqrt());

// Shape을 상속받는 삼각형 클래스
class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

const tri = new Triangle(3, 4);
console.log(tri.getArea());

// Shape을 상속받는 원 클래스
class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

const cir = new Circle(2, 2, 5);
console.log(cir.getArea());
