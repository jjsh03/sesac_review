// spread(...) 연산자
// 반복 가능한 객체에 대해서 단일 요소로 압축을 해제하는 역할 (== 객체의 값을 펼친다!!)
// spread in array
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b];
console.log(spread); // [ 1, 2, 3, 4, 5 ]

// spread in string
const c = [...'HELLO'];
const d = 'HELLO'.split('');
console.log(c); // [ 'H', 'E', 'L', 'L', 'O' ]
console.log(d); // [ 'H', 'E', 'L', 'L', 'O' ]

// spread in object
const chip = {
  base: 'chip',
  company: 'lotte',
};

const potatoChip = {
  ...chip,
  //   base: 'chip',
  //   company: 'lotte',
  flavor: 'potato',
};

const sweetPotatoChip = {
  ...chip,
  //   base: 'chip',
  //   company: 'lotte',
  flavor: 'sweet potato',
};

console.log(chip);
console.log(potatoChip);
console.log(sweetPotatoChip);

// Quiz
const word1 = 'abc';
const word2 = 'xyz';
const words = [...word1, ...word2];
console.log(words);

// rest 파라미터
// 1. 함수에서 rest를 사용할 때
const values = [10, 20, 30, 40, 50];

function get(a, b, ...rest) {
  console.log('a >>', a); // 10
  console.log('b >>', b); // 20
  console.log('rest >>', rest); // [30, 40, 50]: a, b 빼고 나머지
}

get(...values);

// 2. 객체에서 rest를 사용할 때
const icecream = {
  company: 'lotte',
  flavor: 'choco',
  price: '1000',
};

const { flavor, ...rest } = icecream;
console.log(flavor); // choco
console.log(rest); // { company: 'lotte', price: '1000' }

// 3. 배열에서 rest를 사용할 때
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [one1, two1, ...rest2] = number;
console.log(one1); // 1
console.log(two1); // 2
console.log(rest2); // [ 3, 4, 5, 6, 7, 8, 9 ]
