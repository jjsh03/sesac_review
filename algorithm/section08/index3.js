// 3. 이진트리 순회(깊이 우선 탐색)
// 이진트리의 전위순회와 후위순회
// 왼: 부모노드x2, 오: 부모노드x2+1
// 전위순회: 부 -> 왼 -> 오
function solution2(v) {
  let answer = '';
  function DFS(v) {
    if (v > 7) return;
    else {
      console.log(v); //(부모출력) 전위순회는 출력을 '전위'에서 함
      DFS(v * 2); //왼쪽자식
      DFS(v * 2 + 1); //오른쪽자식
    }
  }
  DFS(v);
  return answer;
}

console.log(solution2(1));

// 중위순회: 왼 -> 부 -> 오
function solution3(v) {
  let answer = '';
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2); //왼쪽자식
      console.log(v); //(부모출력) 중위순회
      DFS(v * 2 + 1); //오른쪽자식
    }
  }
  DFS(v);
  return answer;
}

console.log(solution3(1));

// 후위순회: 왼 -> 오 -> 부
function solution4(v) {
  let answer = '';
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2); //왼쪽자식
      DFS(v * 2 + 1); //오른쪽자식
      console.log(v); //(부모출력) 후위순회
    }
  }
  DFS(v);
  return answer;
}

console.log(solution4(1));
