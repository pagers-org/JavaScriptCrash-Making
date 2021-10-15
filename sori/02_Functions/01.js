// =========================================================
// [1 ~ 4 대상 예제]
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. 배열 뒤집기 : [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
const reverse = array => array.sort((a, b) => b - a);
console.log(reverse(numArray));

// 2. 평균 구하기 : [5.5]
const average = array =>
  array.reduce((acc, cur) => acc + cur, 0) / array.length;
console.log(average(numArray));

// 3. 최대값-최소값 구하기 : [10, 1]
const max = Math.max(...numArray);
const min = Math.min(...numArray);
console.log(max, min);

// 4. 누적합 : [55]
const sum = array => array.reduce((acc, cur) => acc + cur, 0);
console.log(sum(numArray));
// =========================================================

// =========================================================
// 5. 대상 예제
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
// 배열 정렬하기 : 1. 아이디 순 2. 점수 순, 3. 등급 순(+,0)
// =========================================================

const sort = requireSortArray.sort((a, b) => {
  const grade = {
    '+': 1,
    '-': -1,
    [0]: 0,
  };
  return (
    a[0].localeCompare(b[0]) ||
    a[1][0].localeCompare(b[1][0]) ||
    grade[a[1][1]] - grade[b[1][1]]
  );
});

console.log(sort);

// =========================================================
// [6 ~ 8 대상 예제]
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

// 6. 중복 횟수 : 5

const count = duplicateArray.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

console.log(count);

// 7. 중복 요소 제거하기 : [
//   'a',
//   () => {
//     console.log(1);
//   },
//   'c',
//   'd',
//   1,
//   { name: 'amy', age: 16 },
//   3,
//   4,
//   [1, 2, 3, 4],
//   2,
// ]

const deleteDuplicated = duplicateArray.reduce((acc, cur) => {
  typeof cur === 'object' ? acc.add(JSON.stringify(cur)) : acc.add(cur);
  return acc;
}, new Set());

console.log(deleteDuplicated);

// 8. 중첩 배열 평탄화 : [
//   'a',
//   () => {
//     console.log(1);
//   },
//   'c',
//   'd',
//   1,
//   { name: 'amy', age: 16 },
//   3,
//   4,
//   1,
//   2,
//   3,
//   4,
//   2,
// ]
// =========================================================

const flatten = duplicateArray.reduce((acc, cur) => {
  cur instanceof Array ? (acc = [...acc, ...cur]) : acc.push(cur);
  return acc;
}, []);

console.log(flatten);

// =========================================================
// 9. 로또 만들기
// =========================================================
