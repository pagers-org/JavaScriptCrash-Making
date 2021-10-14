// 배열 초기화

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 배열 뒤집기
const result = arr.reverse();
console.log(result);

/*
방법 2
const result = arr.sort((a,b) => a - b);
console.log(result);
*/

// 평균 구하기

const sum = arr.reduce((acc, cur) => acc + cur, 0);
const average = sum / arr.length;
console.log(average);

/*
방법 2
const avg = arr.reduce((acc, curr, index, array) => {
  if (index === array.length - 1) {
    return (acc + curr) / array.length;
  }
  return acc + curr;
}, 0);

console.log(avg);
*/

// 최대값-최소값 구하기
// 최대값
const max = arr.reduce((pre, cur) => (pre > cur ? pre : cur));
console.log(max);

// 최소값
const min = arr.reduce((pre, cur) => (pre < cur ? pre : cur));
console.log(min);

/*
방법 2---------------------------------
- 최대값
const max2 = Math.max.apply(null, arr);
console.log(max2);

- 최소값
const min2 = Math.min.apply(null, arr);
console.log(min2);

방법 3------------------------------------
- 최대값
const max3 = Math.max(...arr);

- 최소값
const min3 = Math.min(...arr);
*/

// 누적합

const totalNum = arr.reduce((acc, cur) => acc + cur, 0);
console.log(totalNum);

/*
방법 2
let total = 0;
arr.forEach(n => { 
  total += n;
})

console.log(total);
*/

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

requireSortArray.sort((a, b) =>
  a[1].toUpperCase().localeCompare(b[1].toUpperCase()),
);
console.log(requireSortArray);

const duplicateArray = [
  'a',
  () => {
    console.log(1);
  },
  'c',
  'd',
  1,
  { name: 'amy', age: 16 },
  3,
  4,
  'a',
  'c',
  3,
  { name: 'amy', age: 16 },
  [1, 2, 3, 4],
  () => {
    console.log(1);
  },
  2,
];

// 중복 횟수 4번

// 중복 요소 제거하기

const newArr = new Map();
for (const item of duplicateArray) {
  newArr.set(JSON.stringify(item), item);
}

const arrU = [...newArr.values()];

console.log(arrU);

// 중첩 배열 평탄화

const flat = arrU.flat(1);
console.log(flat);

// 로또 만들기
