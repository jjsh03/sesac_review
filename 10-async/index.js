// setTimeout(code, delay): delay(밀리초) 동안 기다리다가 code 함수를 실행

// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000);
// console.log(3);

// 편의점에 들어가서 음료수를 사고 나오는 상황
// function goMart() {
//   console.log('마트에 가서 어떤 음료를 살지 고민한다');
// }

// function pickDrink() {
//   // 3초 기다린 후에 코드 실행(= 3초동안 고민함)
//   setTimeout(function () {
//     console.log('고민 끝!!');
//     product = '닥터 페퍼';
//     price = 2000;
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명: ${product},  가격: ${price}`);
// }

// let product;
// let price;
// goMart();
// pickDrink();
// pay(); // 상품명: undefined,  가격: undefined

///////////////////////////////////////////////////////////
// 1. 콜백함수를 이용해 비동기 처리
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다');
}

function pickDrink(callback) {
  // *callback 매개변수: 콜백함수를 의미
  // 3초 기다린 후에 코드 실행(= 3초동안 고민함)
  setTimeout(function () {
    console.log('고민 끝!!');
    product = '닥터 페퍼';
    price = 2000;
    callback(product, price); // *매개변수로 넘긴 콜백함수 실행
  }, 3000);
}

let product;
let price;
goMart();
pickDrink(function (product, price) {
  console.log(`상품명: ${product},  가격: ${price}`); // 상품명: 닥터 페퍼,  가격: 2000
});
