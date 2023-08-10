// http 모듈 서버 만들기

const http = require('http');
const fs = require('fs'); // 파일 관련 내장 모듈
const server = http.createServer(function (request, response) {
  response.writeHead(200, { 'content-type': 'text/html; charset=utf8' }); // 응답 헤더
  // { 'content-type': 'text/html; charset=utf8' }: 한글로 본문 작성시에도 깨지지 않게끔
  response.write('<h1>Hello, Node.js!</h1>'); // 응답 본문
  response.end('<p>My first node server!  우아아아</p>'); // 응답 본문 작성 후에 응답 종료
});

const PORT = 8000;

// 서버 실행
server.listen(PORT, function () {
  // listen(port, callback)
  console.log(`server listening on ${PORT} port`);
});
