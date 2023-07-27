function helloWorld() {
  console.log('Hello, world');
  console.log('Hi');
}
helloWorld(); // Hello, World Hi

function helloWorld2() {
  return 'Hello, World2';
  console.log('Hi'); // return 이후는 함수 실행 중단, 즉 코드 작성 의미 없음
}
console.log(helloWorld2()); // Hello, World2

const helloWorld3 = function () {
  console.log('Hello, World3');
};

const helloWorld4 = function () {
  return 'Hello, World4';
};

helloWorld3();
console.log(helloWorld4());

function hello1(text) {
  return text;
}

console.log(hello1('Hi'));
const apple = 'apple is red';
console.log(hello1(apple));
const num = 9;
console.log(hello1(num));

function hello2(text, name) {
  console.log(`${text} ${name}`);
}

hello2('bye', 'suhyeon');

function hello3(text, name) {
  return `${text} ${name}`;
}

console.log(hello3('bye', 'John!'));

const sum = (a, b) => a + b;
console.log(sum(5, 2));

const multi = (a, b) => {
  let result = a ** b;
  return result;
};
console.log(multi(3, 3));

const multiply = (a, b) => {
  let result = a * b;
  return result;
};
console.log(multiply(3, 7));

function square(num) {
  console.log(num ** 2);
}
square(4);
