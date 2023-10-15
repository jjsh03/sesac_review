// 1. 배열 정렬
function solution(arr) {
  let answer = [];
  let sortArr = arr.slice(); // 배열 복사
  sortArr.sort((a, b) => a - b); // 오름차순 정렬
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i])
      // 원본 배열과 정렬된 배열을 비교
      answer.push(i + 1); // 정렬되지 않은 원소의 반번호
  }
  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
// sortArr=[120, 125, 127, 130, 135, 135, 143, 152, 160]

// 2. 좌표정렬
function solution1(arr) {
  let answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0])
      // x좌표가 같으면
      return a[1] - b[1]; // y좌표로 오름차순
    else return a[0] - b[0]; // 아니라면 x좌표로 오름차순
  });
  return answer;
}

let arr1 = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution1(arr1));

// 3. 회의실 배정
function solution2(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1])
      // 끝시간이 같으면
      return a[0] - b[0]; // 시작 시간으로 정렬
    else return a[1] - b[1]; // 아니면 끝시간으로 정렬
  });
  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++; // 횟수 추가
      et = x[1]; // et에 회의 끝시간 삽입
    }
  }
  return answer;
}

let arr2 = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution2(arr2));

// 4. 결혼식
function solution3(times) {
  let answer = Number.MIN_SAFE_INTEGER; // 0해도 ㄱㅊ
  let T_line = []; // 타임라인 배열
  for (let x of times) {
    T_line.push([x[0], 's']);
    T_line.push([x[1], 'e']);
  }
  T_line.sort((a, b) => {
    if (a[0] === b[0])
      // 시간이 같으면
      return a[1].charCodeAt() - b[1].charCodeAt();
    // e로 정렬
    // charCodeAt(): 아스키나 유니코드로 리턴
    // s가 115, e가 101 => s가 e보다 큰 인덱스
    else return a[0] - b[0]; // 아니면 시간으로 정렬
  });
  let cnt = 0;
  for (let x of T_line) {
    if (x[1] === 's') cnt++; // s면 +1
    else cnt--; // e면 -1
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr3 = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution3(arr3));
