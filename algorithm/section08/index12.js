// 13. 수열 추측하기(순열, 조합의 경우수 응용)
function solution(n, f) {
  let answer,
    flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0)); //1<=n<=10
  let ch = Array.from({ length: n + 1 }, () => 0); //중복 허용 안될때 만들어주기
  let p = Array.from({ length: n }, () => 0); //조합
  let b = Array.from({ length: n }, () => 0); //콤비네이션값 미리 저장

  // 조합 수
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }

  function DFS(L, sum) {
    // 답이 있을 때 stop
    if (flag) return;

    // 순열 완성 되었을 때
    if (L === n && sum === f) {
      answer = p.slice(); // 깊은 복사
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        // 체크하면서 순열 돌아감
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0; // 체크 풀어주기
        }
      }
    }
  }

  // b배열 만들어줌(콤비네이션 값)
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));

// 방법 2. push/pop 사용
function solution1(n, f) {
  let answer,
    flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0)); //1<=n<=10
  let ch = Array.from({ length: n + 1 }, () => 0);
  let p = [];
  let b = Array.from({ length: n }, () => 0);
  //조합 수
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }
  function DFS(L, sum) {
    // 순열 완성 되었을 때
    if (L === n && sum === f) {
      if (flag) return;
      answer = p.slice(); //깊은 복사
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        //순열 돌아감
        if (ch[i] === 0) {
          ch[i] = 1;
          p.push(i); //push
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0; //체크 풀어주기
          p.pop(); //pop(반드시 해줘야함)
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);
  return answer;
}

console.log(solution1(4, 16));
