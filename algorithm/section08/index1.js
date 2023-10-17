// 1. 재귀함수
// 값이 n인 숫자를 입력받아 1 ~ n까지 출력하는 함수를 작성하여라.
// 재귀와 스택을 사용하여 구현할 수 있다.
function solution(n) {
  function DFS(L) {
    if (L == 0) return;
    else {
      //stack 자료구조의 FILO 특성으로 인해 console.log는 바로 실행되지 않음
      //stack에 쌓인 작업이 들어온 순서 반대로 실행되며 1 2 3이 순서대로 출력
      DFS(L - 1);
      console.log(L); // 복귀 주소
    }
  }
  DFS(n);
}

solution(3); // 1 2 3
