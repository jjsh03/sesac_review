for (let i = 0; i < 10; i++) {
  console.log('Hello', i + 1, 'World');
}
console.log('--------');

for (let i = 10; i > 0; i -= 1) {
  console.log('Hi', i);
}
console.log('--------');

let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log(sum);

const fruit = ['apple', 'banana', 'grapes', 'orange'];
console.log(fruit.length);
console.log(fruit[0]);
for (let f = 0; f < fruit.length; f++) {
  console.log(fruit[f]);
}

let sum2 = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sum2 = sum2 + i;
    console.log(i, sum2);
  }
}

// while

let idx = 0;
while (true) {
  console.log('Hello', idx);
  idx = idx + 1;
  if (idx === 10) {
    break;
  }
}

let mySum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    mySum = mySum + i;
  }
}
console.log(mySum);

for (let i = 0; i <= 10000; i++) {
  if (i % 13 && i % 2 === 1) {
    console.log(i);
  }
}

// let num = Number(prompt('enter number'));
// for (let i = 0; i <= 1000; i++) {
//   if (num % 13 === 0 && num % 2 === 1) {
//     console.log('yes');
//   } else {
//     console.log('no');
//   }
// }

for (let i = 2; i < 10; i++) {
  console.log(`---${i}단---`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
