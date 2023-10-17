// 14. 조합 구하기
// 1부터 N까지 번호가 적힌 구슬이 있을때. 이 중 M개를 뽑는 방법의 수를 출력
// 중복을 허용하지 않는 문제이다. 즉, 뽑았던 수는 뽑으면 안되기 때문에 let i=s와 같이 작성
function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0); // 뽑은 기록
  function DFS(L, s) {
    if (L === m) {
      answer.push(tmp.slice()); // 깊은 복사되어서 들어감
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i; // L지점에서 i를 뽑았다는 기록
        DFS(L + 1, i + 1); // ex. D(0,1) -> i=1,2,3,4 -> i=1일때 D(0+1, 1+1) -> D(1,2)
      }
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));
