// 15. 수들의 조합
// N개의 정수가 주어지면 그 숫자들 중 K개를 뽑는 조합의 합이 임의의 정수 M의 배수인 개수 는 몇 개가 있는지 출력

function solution(n, k, arr, m) {
  let answer = 0;
  //let tmp=Array.from({length:k}); //검증 코드(검증하고싶으면, 검증 코드 3줄 다 주석 풀기)
  function DFS(L, s, sum) {
    //종착점
    if (L === k) {
      if (sum % m === 0) answer++;
      //console.log(sum, tmp); //검증 코드
    } else {
      for (let i = s; i < n; i++) {
        // i는 index번호
        //tmp[L]=arr[i]; //검증 코드
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);
  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6)); // 2
