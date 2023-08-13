// 구조 분해 할당
// 1. 배열 구조 분해 할당
// - 배열 구조 분해 할당시 "순서" 중요(변수 이름 중요하지 않음)
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);
const [x, y, z, alpha] = arr2;
console.log(x, y, z, alpha); // alpha자리는 undefined

let num1 = 1;
let num2 = 3;
console.log('swap 전 >', num1, num2); // 1,3
[num2, num1] = [num1, num2];
console.log('swap 후 >', num1, num2); // 3,1

const lists = ['apple', 'grape'];
[f1, f2, f3 = 'orange'] = lists;
console.log(f1, f2, f3); // apple grape orange

// 2. 객체 구조 분해 할당
// - 변수를 선언하는 순서는 중요하지 않음
// - "키 값"과 "변수명"이 일치해야함
const obj = {
  title: '엘리멘탈',
  content: '재밌어요',
  num: 5,
};
// 객체 구조 분해 쓰지 않았을 때
console.log(obj.title, obj.content, obj.num, '번 봤어요');

// 객체 구조 분해 쓰고 싶다면
// key 가 존재하지 않을 때를 대비하여 = 연산자를 이용하면 default 값 할당 가능
const { num, title, content, star = 1000 } = obj;
console.log(title, content, num, star);

const { n1, h1, c1 } = obj;
console.log(n1, h1, c1); // undefined undefined undefined

// 콜론(:)을 이용하면 새 변수명으로 바꿔서 저장할 수 있다.
const { title: t2, num: n2, content: c2 } = obj;
console.log(t2, n2, c2);

////////////////////////////////////
// Quiz
function getInfo(lecture) {
  // TODO: 구조 분해 할당을 사용하여 값 추출
  const { name, part, leader } = lecture;

  // TODO: 출력 문장 생성
  const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader}입니다.`;

  return output;
}

const lectureInfo = {
  name: 'SESAC x CODINGOn',
  part: 'WEB',
  leader: 'Sean',
};

const result = getInfo(lectureInfo);
console.log(result);
