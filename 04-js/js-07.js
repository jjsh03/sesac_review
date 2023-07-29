let str1 = 'animal farm';
let str2 = '   Animal Farm   ';

console.log(str1[0]);
console.log(str1[0] + str1[7]);
console.log(str1[7] + str1[0] + str1[5] + str1[5] + ' ' + str1[2] + str1[1]); // fall in

console.log(str1.length); // 11
console.log(str2.length); // 17 공백 포함

console.log(str1.toUpperCase()); // ANIMAL FARM
console.log(str2.toLowerCase()); // animal farm

console.log(str2.trim());
console.log(str2.trim().length); // 11 공백제거 길이

console.log(str1.indexOf('i')); // 글자 위치(0부터)
console.log(str1.indexOf('y')); // 없는 글자는 -1 반환

console.log(str1.slice(3)); // mal farm 3번부터 끝까지
console.log(str1.slice(2, 8)); // imal f 2번부터 8번까지

console.log(str1.replace('f', 'p')); // animal parm 'f->p'
console.log(str1.replace('a', '*')); // *nimal parm
console.log(str1.replaceAll('a', '*')); // *nim*l f*rm

let date = '2023.07.29';
console.log(date.split('.')); // '2023' '07 '29' .을 기준으로 쪼개서 배열로 반환
console.log(date.split('3')); // '202' '.07.29'

console.log(date.repeat(3)); // date 3번 반복
console.log('hi'.repeat(5)); // hi 5번 반복

/////////////////////////////////////////////////////////
// 배열 내장 메서드
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['horse', 'pig', 'cow', 'chicken'];

// arr1[5] = 6; // arr1 배열 5번째에 6 추가
// console.log(arr1); // 1,2,3,4,5,6
// arr1[8] = 9; // 인덱스 건너뛰면 empty 추가
// console.log(arr1); // 1,2,3,4,5,6,empty*2,9

arr1.push(6); // 끝에 6 추가
console.log(arr1); // 1,2,3,4,5,6

arr1.pop(); // 끝에 요소 제거
console.log(arr1); // 1,2,3,4,5

arr2.unshift('dog'); // 맨 앞에 dog 추가
console.log(arr2); // dog, horse, pig, cow, chicken

arr2.shift(); // 맨 앞 요소 제거
console.log(arr2); // horse, pig, cow, chicken

console.log(arr1.includes(8)); // false arr1에 8이 있는지 검사
console.log(arr2.includes('pig')); // true

console.log(arr1.reverse()); // 5,4,3,2,1
console.log(arr1); // 5,4,3,2,1 >> 원본배열이 변경됨

console.log(arr2.join('-')); // horse-pig-cow-chicken -> '-'을 기준으로 병합

// 메서드 체이닝: 메서드 연결가능
console.log('hello'.split('').reverse()); // o,l,l,e,h
console.log('hello'.split('').reverse().join('')); // olleh

//////////////////////////
// 배열에서의 for/forEach

const arr3 = [1, 2, 5, 6, 7];
const alphabets = ['a', 'b', 'c', 'd'];

for (let a = 2; a < alphabets.length; a++) {
  console.log(arr3[a]);
} // 5, 6 -> alphabets 배열의 길이까지 arr3의 요소 2번째 'a'부터 하나씩 키우면서 반복

for (let alpha of alphabets) {
  console.log(alpha);
} // for of 사용 -> a, b, c, d

alphabets.forEach(function (alpha) {
  console.log(alpha);
}); // forEach(function('a')) 사용 'a'는 현재 반복되는 요소

alphabets.forEach((alpha, index, array) => {
  console.log(alpha, index, array);
}); // => 함수 사용 / alpha: 현재 반복되는 요소, index: 현재요소의 위치, array: 호출 배열

let numbers = [1, 2, 3, 4, 5, 6];
var sum1 = 0;
var sum2 = 0;
var sum3 = 0;

for (let i = 0; i < numbers.length; i++) {
  sum1 = sum1 + numbers[i];
  console.log(numbers[i], sum1);
}

for (let num of numbers) {
  sum2 = sum2 + num;
}
console.log(sum2);

numbers.forEach((num) => {
  sum3 = sum3 + num;
});

console.log(sum1, sum2, sum3);
