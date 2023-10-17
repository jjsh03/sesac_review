// 4. 부분집합 구하기
// 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력
function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0); // ch는 길이가 n+1이고 0으로 초기화된 배열
  // v를 부분집합에 참여시키겠다 or 시키지 않겠다
  function DFS(v) {
    if (v === n + 1) {
      // v가 배열 길이 만큼 커지면 부분집합 종료
      let tmp = ''; // 반드시 여기서 초기화
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + ' ';
      }
      // 공집합 제거 후 출력(tmp.length>0)
      if (tmp.length > 0) answer.push(tmp.trim()); // trim을 사용해서 양끝 공백을 제거
    } else {
      // v를 포함 시키는 경우
      ch[v] = 1;
      DFS(v + 1); //왼쪽으로 뻗음

      // v를 포함 시키지 않는 경우
      ch[v] = 0;
      DFS(v + 1); // 오른쪽으로 뻗음
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3)); // [ '1 2 3', '1 2', '1 3', '1', '2 3', '2', '3' ]
