// 10. 순열 구하기
// 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력
function solution(m, arr) {
  let answer = [];
  n = arr.length;
  let ch = Array.from({ length: n }, () => 0); // 사용했는지 체크하는 배열(중복 방지!)
  let tmp = Array.from({ length: m }, () => 0); // 뽑은것 넣는 배열
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice()); // 깊은복사
    } else {
      for (let i = 0; i < n; i++) {
        // ch[i]가 0일때(중복되지 않을 때) 사용 가능
        if (ch[i] === 0) {
          ch[i] = 1; // 사용하면 1으로 바꿈
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0; // 빽해서(D((L+1)-1)) 다시 돌아오는 지점에서는 0으로 초기화시켜줌
        }
      }
    }
  }
  DFS(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
