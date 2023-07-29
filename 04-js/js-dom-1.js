///////
// 객체 리터럴(object literal), 딕셔너리
// : key-value 쌍으로 이루어진 데이터 구조

// js에서 객체는 여러 의미
// type of [] -> object, typeof {} -> object
// 이 때의 객체는 광범위한 의미의 "객체"

// 원시 타입(기본 자료형): pass by value, "값"을 복사해 전달
let num1 = 1;
let num2 = num1;
console.log(num1, num2); // 1 1
console.log(num1 === num2); // true

num1 = 5;
console.log(num1 === num2); // false

// 객체 자료형: pass by reference, "참조값"을 저장해 전달
const numbers1 = { one: 1, two: 2 };
const numbers2 = numbers1;
console.log(numbers1, numbers2); // { one: 1, two: 2 } { one: 1, two: 2 }

numbers1.three = 3;
console.log(numbers1, numbers2); // {one: 1, two: 2, three: 3} {one: 1, two: 2, three: 3}

const obj1 = { name: 'sage', birth: 1996 };
const obj2 = { name: 'sage', birth: 1996 };
console.log(obj1 === obj2); // false -> 같은값이지만 참조값이 다름

// obj1 = { hi: 'hi' }; // error -> const로 obj1을 이미 선언 했기 때문에 주소 재할당은 불가
obj1.hobby = 'movie'; // 주소 안에 요소들은 추가/삭제/수정 가능
console.log(obj1); // {name: 'sage', birth: 1996, hobby: 'movie'}

console.log('--------------');
///////////////////////

// 1. Date 객체: 시간, 날짜
console.log(new Date()); // new Date(): 현재 일시
console.log(new Date(0)); // new Date(timestamp): 1970-01-01부터 밀리초 흘러간 날
console.log(new Date('2023', '6', '20', '5', '32', '19')); // new Date('년','월(0~11)','시','분','초')

// practice | date
// Date 객체를 이용해 오늘 요일을 얻고 if or switch 구문 이용해서 평일/주말인지 콘솔창에 출력하는 코드 작성
let today = new Date();
console.log(today.getDay());
// if
if (today.getDay() === 0 || today.getDay() === 6) {
  console.log('weekend');
} else {
  console.log('weekday');
}
// switch
switch (today.getDay()) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log('weekday');
  case 0:
  case 6:
    console.log('weekend');
}

/////////////////////////
// 2. math 객체: 수학적인 상수와 함수
// 속성
console.log(Math.E); // 자연로그
console.log(Math.PI); // 파이
console.log(Math.SQRT2); // 2의 제곱근
//메서드
console.log(Math.min(500, 200, 3, 5, 9)); // 3 -> 요소 중에 min
console.log(Math.max(500, 200, 3, 5, 9)); // 500 -> 요소 중에 max
console.log(Math.round(5.6302)); // 6 -> 반올림;
console.log(Math.ceil(5.6302)); // 6 -> 올림;
console.log(Math.floor(5.6302)); // 5 -> 내림;
console.log(Math.random()); // 0 <= x < 1 사이의 난수
// Math.random(응용 예시)
// 0 ~ 9
console.log(Math.floor(Math.random() * 10)); // 0 <= x < 10
// 0 ~ 10
console.log(Math.floor(Math.random() * 11)); // 0 <= x < 11

// practice | math
// 1 ~ 100 랜덤
console.log(Math.ceil(Math.random() * 100)); // ceil
console.log(Math.floor(Math.random() * 100) + 1); // floor + 1
// 20 ~ 22
console.log(Math.ceil(Math.random() * 3) + 19); // ceil + 19
console.log(Math.floor(Math.random() * 3) + 20); // floor + 20
