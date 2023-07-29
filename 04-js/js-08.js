// map(): 각 요소에 대해 연산한 결과를 모은 "새로운 배열" 반환
const abc = ['a', 'b', 'c', 'd'];
const mapAbc = abc.map((a) => a + '+');
console.log(mapAbc); // a+, b+,

// filter(): 주어진 함수의 조건을 통과하는 요소를 모아 "새로운 배열" 반환
const num = [1, 2, 3, 4, 5];
const filterNum = num.filter((i) => i >= 3);
console.log(filterNum); // 3,4,5

// find(): 특정 조건을 만족하는 첫번째 요소 반환
const animal = ['horse', 'pig', 'cow', 'chicken'];
const findAnimal = animal.find((x) => x.includes('o'));
console.log(findAnimal); // horse

// practice
const words = ['dog', 'cat', 'rabbit', 'apple', 'wow'];
// 1. 글자 수가 3개 초과인 단어만 필터링
const filterResult1 = words.filter((word) => word.length > 3);
console.log(filterResult1); // rabbit, apple

// 2. 글자에 'a' 문자가 포함되어 있는 단어만 필터링
const filterResult2 = words.filter((word) => word.includes('a'));
console.log(filterResult2); // cat, rabbit, apple
