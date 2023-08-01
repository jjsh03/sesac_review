let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let oper = document.getElementById('oper');
let result = document.getElementById('result');
let btn1 = document.getElementById('cal');
let btn2 = document.getElementById('reset');

btn1.addEventListener('click', function () {
  switch (oper.value) {
    case '+':
      result.value = Number(value1.value) + Number(value2.value);
      break;
    case '-':
      result.value = Number(value1.value) - Number(value2.value);
      break;
    case '*':
      result.value = Number(value1.value) * Number(value2.value);
      break;
    case '/':
      result.value = Number(value1.value) / Number(value2.value);
      break;
    // default:
    //   alert('Error');
  }
});

btn2.addEventListener('click', function () {
  value1.value = '';
  value2.value = '';
  oper.value = '';
  result.value = '';
});
