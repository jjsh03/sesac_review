// $(선택자).동작함수()

// val('값'): value
function getValue() {
  // js
  //   const inputVal = document.querySelector('input').value;
  //   alert(inputVal);

  // jquery
  const value = $('input').val();
  alert(value);
}

function setValue() {
  // js
  //   document.querySelector('input').value = 'Hello';

  // jquery
  $('input').val('Bye');
}

///////////////////////////
// css('css속성', '값'): style -> css설정 바꾸기
function changeCssJS() {
  const span = document.querySelector('span');
  span.style = 'font-size: 20px; color: blue';
} // js는 첫번째 요소만 변경, 모두 변경하려면 All + 반복문 설정

function changeCssJquery() {
  // case 1. 각각 적용
  //   $('span').css('font-size', '40px');
  //   $('span').css('color', 'green');

  // case 2. 여러 속성 한번에 적용
  $('span').css({
    fontSize: '40px',
    color: 'green',
  });
} // jquery는 span 요소 모두 변경

///////////////////////////
// attr('속성이름', '값'): 속성값 변경 및 추가
function changeAttrJS() {
  const link = document.querySelector('a');
  link.href = 'https://www.naver.com';
}
function changeAttrJquery() {
  $('a').attr('href', 'https://daum.net');
}

///////////////////////////
// text(): text변경
function changeTextJS() {
  const text = document.querySelector('.p-text');
  text.innerText = 'HELLO JS';
}

function changeTextJquery() {
  $('.p-text').text('HELLO JQUERY');
}

///////////////////////////
// html()
function changeHtmlJS() {
  const html = document.querySelector('.p-html');
  html.innerHTML = '<h3>JS</h3>';
}

function changeHtmlJquery() {
  $('.p-html').html('<h3>JQuery</h3>');
}

///////////////////////////
// 요소 추가하기
// append()
function appendJS() {
  const colors = document.querySelector('.colors');
  const newLi = document.createElement('li');
  newLi.innerText = 'JS: last child';
  colors.append(newLi);
}

function appendJquery() {
  $('.colors').append('<li>Jquery: last child</li>');
}

// prepend()
function prependJS() {
  const colors = document.querySelector('.colors');
  const newLi = document.createElement('li');
  newLi.innerText = 'JS: first child';
  colors.prepend(newLi);
}

function prependJquery() {
  $('.colors').prepend('<li>Jquery: first child</li>');
}

// before()
function beforeJS() {
  const colors = document.querySelector('.green');
  const newLi = document.createElement('li');
  newLi.innerText = 'JS: before green';
  colors.before(newLi);
}

function beforeJquery() {
  $('.green').before('<li>Jquery: before green</li>');
}

// after
function afterJS() {
  const colors = document.querySelector('.green');
  const newLi = document.createElement('li');
  newLi.innerText = 'JS: after green';
  colors.after(newLi);
}

function afterJquery() {
  $('.green').after('<li>Jquery: after green</li>');
}

////////////////////////
