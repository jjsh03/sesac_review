// 11. 팩토리얼
// DFS 풀이: 시간복잡도는 O(n)
function solution(n) {
  let answer;
  function DFS(n) {
    if (n === 1) return 1;
    else return n * DFS(n - 1); // 호출
  } // 여기가 끝나는 라인
  answer = DFS(n); // DFS 호출(재귀)
  return answer;
}

console.log(solution(5)); // 120

// 이전 문제풀이: 시간복잡도 O(n) 동일
function fact(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
}
function solution1(n) {
  var answer = 0;
  for (let num = 1; num <= 10; num++) {
    if (n >= fact(num)) {
      answer = num;
    }
  }
  return answer;
}

console.log(fact(5)); // 120
