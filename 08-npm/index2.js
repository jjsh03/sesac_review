// http 모듈로 웹 서버 생성

const http = require('http');
const fs = require('fs'); // 파일 관련 내장 모듈
const server = http.createServer(function (request, response) {
  try {
    // index2.html 파일 불러오기
    const data = fs.readFileSync('./index3.html');
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(data);
    response.end();
  } catch {
    // error시 404.html 파일 불러오기
    const error404 = fs.readFileSync('./404.html');
    response.writeHead(404, { 'content-type': 'text/html; charset=utf8' });
    response.write(error404);
    response.end();
  }
});

const PORT = 8080;

// 서버 실행
server.listen(PORT, function () {
  console.log(`server listening on ${PORT} port`);
});
