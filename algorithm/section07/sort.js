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

// 3. 삽입정렬
function solution(arr4) {
  let answer = arr4;
  for (let i = 0; i < arr4.length; i++) {
    let tmp = arr4[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr4[j] > tmp) arr4[j + 1] = arr4[j];
      else break; // arr4[j]가 tmp보다 크면 break
    }
    arr4[j + 1] = tmp;
  }
  return answer;
}

let arr4 = [11, 7, 5, 6, 10, 9];
console.log(solution(arr4));

// 3-1. 삽입정렬 (LRU)
function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  // length: size만큼 배열 초기화
  arr.forEach(x => {
    let pos = -1;

    // 현재 원소가 결과 배열에 이미 존재하는지 확인
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    // 현재 원소가 존재하면 위치를 저장

    if (pos === -1) {
      // miss
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      // hit (pos=i)
      for (let i = pos; i >= 1; i--) {
        // hit난 지점부터 땡기기
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });

  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
