// 5. 합이 같은 부분집합
// N개의 원소로 구성된 자연수 집합이 주어지면, 이 집합을 두 개의 부분집합으로 나누었을 때
// 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 "YES"를 출력하고, 그렇지 않으면 "NO"를 출력
// 두 부분집합은 서로소 집합(Disjoint Set)이며, 두 부분집합을 합하면 원래의 집합

function solution(arr) {
  let answer = 'NO',
    flag = 0;
  let total = arr.reduce((a, b) => a + b, 0); // total: 누적+ 값
  let n = arr.length;
  function DFS(L, sum) {
    // 함수를 종료하는 기준
    if (flag) return; // flag=1(답 발견한 것이 있을 때) 함수 종료(답발견한 이후에는 재귀 반복할 의미 없음)

    // 판단
    if (L === n) {
      if (total - sum === sum) {
        answer = 'YES';
        flag = 1; // answer="YES"(답을 발견했을 때)
      }
    } else {
      DFS(L + 1, sum + arr[L]); // 포함했을 때
      DFS(L + 1, sum); // 포함하지 않았을 때
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr)); // YES
