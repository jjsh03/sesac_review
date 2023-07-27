console.log('connected!');

let fruits = ['Apple', 'Banana', 'Mango']; // 변수 선언 + 할당
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango
console.log(fruits[0] + fruits[2]); // AppleMango

fruits = ['Banana', 'Mango', 'Orange']; // 재할당 -> let 변수값 재할당 가능
console.log(fruits[2]); // Orange
console.log(fruits[2] + fruits[0]); // OrangeBanana

const gender = ['female', 'male'];
console.log(gender);
gender = ['woman', 'man']; // error -> const 키워드 재할당 불가
