// 8. 중복순열 구하기
// 1부터 N까지 번호가 적힌 구슬이 있을 때 중복을 허락하여 M번을 뽑아 일렬로 나열 하는 방법을 모두 출력
// 출력순서는 사전순으로 오름차순으로 출력
function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0); //길이가 m인 배열 0으로 초기화해서 생성
  function DFS(L) {
    // 몇중 for 문을 도는지 결정
    if (L === m) {
      answer.push(tmp.slice());
      // slice는 깊은복사 -> tmp[0,0] 을 다시 생성
      // 깊은복사 안하면 tmp[n,n]이 그대로 복사되어 마지막 값으로 모두 push됨
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i; // 넣고
        DFS(L + 1); // 다음 레벨로 넘어감
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(solution(3, 2));
