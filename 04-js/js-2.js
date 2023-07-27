let text = 'Hello';
let text2 = 'World';
let age = 28;

console.log(text);
console.log(text2);
console.log(text + text2);
console.log(`${text} I'm sage, I'm ${age} years old.`);

let num = 18;
let num2 = 12;
console.log(num + num2);
console.log(num * num2);

let isPink = true;
let isBlue = false;
console.log(isPink, isBlue);

let x;
console.log(x);

const eng = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
];
console.log(eng);
console.log(eng[1]);
console.log(eng[0][2]);
console.log(eng[0][1] + eng[1][2] + eng[2][1] + eng[2][2]);

let cat = {
  name: 'Munzi',
  age: 7,
  isCute: true,
  mew: function () {
    return '야옹';
  },
};
console.log(cat);

console.log(typeof num);
console.log(typeof isPink);
