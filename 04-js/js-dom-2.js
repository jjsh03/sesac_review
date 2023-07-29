//document 속성
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);

// document 객체를 이용해 HTML 요소 선택
console.log(document.getElementById('green')); // id로 선택
console.log(document.getElementsByClassName('pink')); // class 로 선택
console.log(document.getElementsByClassName('pink')[2]); // class 로 선택 중 [n]번째 요소
console.log(document.getElementsByTagName('div')); // 태그로 선택
console.log(document.getElementsByName('id')); // name으로 찾기
console.log(document.querySelector('.pink')); // css셀렉터 기준 첫번째 요소
console.log(document.querySelectorAll('.pink')); // css셀렉터 기준 모든 요소
console.log(document.querySelectorAll('.pink')[1]); // css셀렉터 기준 n번째 요소

const pinks = document.querySelectorAll('.pink');
for (let pink of pinks) {
  console.log(pink);
}
