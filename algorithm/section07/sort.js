// 1. 선택정렬
function solution(arr1) {
  let answer = arr1;
  for (let i = 0; i < arr1.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[j] < arr1[idx]) idx = j;
      // 비교해서 작은 값을 idx로 바꾸기
    }
    [arr1[i], arr1[idx]] = [arr1[idx], arr1[i]];
    // 작은값 arr[idx]과 기존값 arr[i] 자리 바꾸기
  }
  return answer;
}

let arr1 = [13, 5, 11, 7, 23, 15];
console.log(solution(arr1));

// 2. 버블정렬
function solution(arr2) {
  let answer = arr2;
  for (let i = 0; i < arr2.length - 1; i++) {
    // j가 length까지 돌면 마지막은 자동으로 제일 앞으로 정해지기에
    // i는 length-1까지 돌아야함
    for (let j = 0; j < arr2.length - i - 1; j++) {
      // 마지막이 정해지면 그 값을 제외하고 돌아야하기에
      // lenght-i-1로 돌아야함
      if (arr2[j] > arr2[j + 1]) {
        [arr2[j], arr2[j + 1]] = [arr2[j + 1], arr2[j]];
      }
    }
  }
  return answer;
}

let arr2 = [13, 5, 11, 7, 23, 15];
console.log(solution(arr2));

// 2-1. 버블정렬 special
function solution(arr3) {
  let answer = arr3;
  for (let i = 0; i < arr3.length - 1; i++) {
    for (let j = 0; j < arr3.length - i - 1; j++) {
      if (arr3[j] > 0 && arr3[j + 1] < 0) {
        // 양수 && 음수면 자리 바꾸기
        [arr3[j], arr3[j + 1]] = [arr3[j + 1], arr3[j]];
      }
    }
  }
  return answer;
}

let arr3 = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr3));
