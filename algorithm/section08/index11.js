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

//////////////////////////////
// 12. 조합의 경우수(메모이제이션)
// 자연수 n(3<=n<=33)과 r(0<=r<=n)이 입력될 때 조합수를 출력
// 메모이제이션을 사용할 때
function solution2(n, r) {
  let answer = [];
  let dy = Array.from(Array(35), () => Array(35).fill(0)); // 35행 35열 배열 만듦(n, r의 조건에 따라 넉넉잡아 dy를 35행 35열의 유사 배열)

  //console.log(dy); //표 확인
  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r]; // 이미 기록이 되어있는 값: 재귀해서 다시 계산 할 필요 없음
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
}
console.log(solution2(33, 19));

// 메모이제이션 사용하지 않을 때
function solution3(n, r) {
  let answer = [];

  function DFS(n, r) {
    if (n === r || r === 0) return 1;
    else return DFS(n - 1, r - 1) + DFS(n - 1, r);
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution3(33, 19)); // 시간 로딩이 너무 많이 걸림
