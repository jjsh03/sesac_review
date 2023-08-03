$(document).ready(function () {
  let thisDay;

  // 달력 날짜 -> text
  $('td').on('click', function () {
    // 날짜 -> 변수 저장
    thisDay = $(this);
    console.log(thisDay.text());
    // 변수값 -> #date 인풋값 출력
    $('#date').val(thisDay.text());
  });

  // 내용입력 -> 작성클릭 -> 달력에 추가
  $('#submit').on('click', function () {
    // 인풋값 -> 변수 저장
    let content = $('#content').val();
    console.log(content);
    // 변수값 -> 해당 날짜 밑에 추가
    thisDay.append(`<div>${content}</div>`);
    $('#content').val('');
    $('#date').val('');
  });
});
