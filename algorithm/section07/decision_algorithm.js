// 1. 이분검색
function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b); // 오름차순 정렬
  let lt = 0,
    rt = arr.length - 1; // lt, rt는 idx
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1; // answer=idx
      break;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));

// 2. 뮤직비디오
function count(songs, capacity) {
  let cnt = 1,
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      // sum(현재누적용량) + x(곡용량) > 디스크 용량
      cnt++; // 디스크 하나 더 필요
      sum = x;
    } else sum += x; // 누적용량
  }
  return cnt; // 필요한 장
}

function solution1(m, songs) {
  let answer;
  let lt = Math.max(...songs);
  // 배열 인자의 max = lt
  let rt = songs.reduce((a, b) => a + b, 0);
  // a+b 누적값 = rt
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution1(3, arr1));

// 3. 마구간 정하기
function count(stable, dist) {
  let cnt = 1,
    ep = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}
function solution2(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
  return answer;
}

let arr2 = [1, 2, 8, 4, 9];
console.log(solution2(3, arr2));
