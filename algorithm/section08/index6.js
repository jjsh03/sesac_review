// 6. 바둑이 승차(이진트리 DFS)
// N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 트럭(최대용량: C)에 태울 수 있는 가장 무거운 무게를 구하라.
function solution(c, arr) {
  // c: 트럭용량, arr: 바둑이 무게 배열
  let answer = Number.MIN_SAFE_INTEGER; // max값 구해야하니까 가장 작은 숫자로 초기화
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > c) return; // 제한 (이 코드 없으면 전체 합 나옴)
    if (L === n) {
      // console.log(sum);
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]); // 포함하는 경우
      DFS(L + 1, sum); // 포함하지 않는 경우
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr)); // 242
