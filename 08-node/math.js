// math module

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const division = (a, b) => a / b;

// 객체로 감싸서 내보내기
module.exports = {
  add,
  subtract,
  multiply,
  division,
};
