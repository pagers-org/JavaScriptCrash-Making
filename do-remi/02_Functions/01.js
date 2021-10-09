// 배열 초기화
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 배열 뒤집기
const reverse = arg => {
  let ret = [];
  for (let i = arg.length - 1; i >= 0; i--) {
    ret = [...ret, arg[i]];
  }
  return ret;
};
const reversed = reverse(arr);
console.log(`배열 뒤집기 : ${reversed}`);
// 평균 구하기
const avg = arg => {
  return arg.reduce((acc, now, idx, arr) => {
    if (idx === arr.length - 1) {
      return (acc + now) / arr.length;
    }
    return acc + now;
  });
};

const getAvg = avg(arr);
console.log(`평균 : ${getAvg}`);
// 최대값-최소값 구하기
const getMax = arg => {
  let MAX = arg[0];
  arg.forEach(val => {
    if (val > MAX) MAX = val;
  });
  return MAX;
};

const getMin = arg => {
  let MIN = arg[0];
  arg.forEach(val => {
    if (val < MIN) MIN = val;
  });
  return MIN;
};

const Max = getMax(arr);
const Min = getMin(arr);
console.log(`최대 : ${Max}`);
console.log(`최소 : ${Min}`);
// 누적합
const getSum = arg => {
  return arg.reduce((acc, now) => {
    return acc + now;
  });
};

const sum = getSum(arr);
console.log(`누적합 : ${sum}`);

// 배열 정렬하기
const requireSortArray = [
  ['DS7651', 'A0'],
  ['CA0055', 'D+'],
  ['AI5543', 'C0'],
  ['OS1808', 'B-'],
  ['DS7651', 'B+'],
  ['AI0001', 'F'],
  ['DB0001', 'B-'],
  ['AI5543', 'D+'],
  ['DS7651', 'A+'],
  ['OS1808', 'B-'],
];

const sorted = requireSortArray.sort((a, b) => {});
// 중복 횟수

// 중첩 배열 평탄화

// 중복 요소 제거하기

// 로또 만들기
