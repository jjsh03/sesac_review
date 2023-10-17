// 2. 이진수 출력
// 10진수 N이 입력되면 2진수로 변환하여 출력
function solution1(n) {
  let answer = ''; // answer = 'string'으로 정의
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += n % 2; // 복귀 주소
    }
  }
  DFS(n);
  return answer;
}

console.log(solution1(11));
