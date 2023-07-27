if (5 > 3) {
  console.log('Hey');
}

// let num = Number(prompt('Number'));
// if (num > 10) {
//   console.log('more than 10');
// } else if (num === 10) {
//   console.log('It is 10!');
// } else {
//   console.log('less than 10');
// }

// if (num > 100 || num < 0) {
//   console.log('wrong number');
// } else if (num >= 90) {
//   console.log('A');
// } else if (num >= 80) {
//   console.log('B');
// } else if (num >= 70) {
//   console.log('C');
// } else if (num >= 60) {
//   console.log('D');
// } else {
//   console.log('F');
// }

// let userId = 'sage';
// let userPw = '0000';

// function userLogin() {
//   let inputId = prompt('ID');
//   let inputPw = prompt('Password');

//   if (userId === inputId) {
//     if (userPw === inputPw) {
//       return 'login success';
//     } else {
//       return 'fail:wrong PW';
//     }
//   } else if (inputId === '') {
//     return 'Please enter your ID';
//   } else {
//     return 'fail:wrong ID';
//   }
// }

// const result = userLogin();
// console.log(result);

// let a = 1;
// switch (a) {
//   case 1:
//   case 2:
//   case 3:
//     console.log('a <= 3');
//     break;
//   case 4:
//     console.log('a = 4');
//     break;
//   case 5:
//     console.log('a = 5');
//     break;
//   default:
//     console.log('??');
//     break;
// }

// let score = Number(prompt('enter your score'));
// console.log(parseInt(score / 10));
// switch (parseInt(score / 10)) {
//   case 10:
//     console.log('A+');
//     break;
//   case 9:
//     console.log('A');
//     break;
//   case 8:
//     console.log('B');
//     break;
//   case 7:
//     console.log('C');
//     break;
//   case 6:
//     console.log('D');
//     break;
//   default:
//     console.log('F');
//     break;
// }

let num = 4;
if (num % 2 === 1) {
  console.log('Odd');
} else {
  console.log('Even');
}

num % 2 === 1 ? console.log('Odd') : console.log('Even');

let name = 'sage';
if (name === 'sage') {
  console.log('Yes');
} else {
  console.log('Nope');
}

name === 'suhyeon' ? console.log('Yep') : console.log('No');

let now = new Date().getHours();
now >= 12 ? console.log('afternoon') : console.log('morning');
