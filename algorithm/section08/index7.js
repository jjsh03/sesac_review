// 7. 최대점수 구하기(이진트리 DFS)
// 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지는 N개의 문제
// 제한 시간 M안에 N개의 문제 중 얻을 수 있는 최대 점수를 출력
function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = ps.length; //pt.length 해도 됨
  function DFS(L, sum, time) {
    if (time > m) return; //시간 제한 (없으면 전체 다 품)
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  }

  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt)); // 41
