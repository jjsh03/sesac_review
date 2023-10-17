// 9. 동전교환
// 첫 번째줄: 동전의 종류개수 N(1<=N<=12)
// 두 번째 줄: N개의 동전의 종류(각 종류는 100원을 넘지 않는다), 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)
// 거슬러 줄 동전의 최소개수를 출력
function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > m) return; // sum > m이 되면, pop(이후 구하는 것 의미 없음)
    if (L >= answer) return; // answer을 구했을때 굳이 더 작거나 같은 L(동전개수)의 값이 있더라도 가지치기 중단, 답은 같지만 훨씬 시간 단축 가능
    if (sum === m) {
      //console.log(L, sum);
      answer = Math.min(answer, L);
    }
    //전체 탐색(깊이우선탐색)
    else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr)); // 3
