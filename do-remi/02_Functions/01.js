// 배열 초기화

// 배열 뒤집기
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reverse = arg => {
  let ret = [];
  for (let i = arg.length - 1; i >= 0; i--) {
    ret = [...ret, arg[i]];
  }
  return ret;
};

const reversed = reverse(arr);
console.log(`-------------------------------\n`);
console.log(`배열 뒤집기 : ${reversed}\n`);

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
console.log(`-------------------------------\n`);
console.log(`평균 : ${getAvg}\n`);

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
console.log(`-------------------------------\n`);
console.log(`최대 : ${Max}`);
console.log(`최소 : ${Min}\n`);

// 누적합
const getSum = arg => {
  return arg.reduce((acc, now) => {
    return acc + now;
  });
};

const sum = getSum(arr);
console.log(`-------------------------------\n`);
console.log(`누적합 : ${sum}\n`);

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
  ['DS7651', 'A-'],
];
const grade = {
  '+': 0,
  0: 1,
  '-': 2,
};
const sorted = requireSortArray.sort((a, b) => {
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  if (a[0] === b[0]) {
    if (a[1][0] > b[1][0]) return 1;
    if (a[1][0] < b[1][0]) return -1;
    if (a[1][0] === b[1][0]) {
      if (grade[a[1][1]] > grade[b[1][1]]) return 1;
      if (grade[a[1][1]] < grade[b[1][1]]) return -1;
      else return 0;
    }
  }
});
console.log(`-------------------------------\n`);
console.log(`이름, 성적순 정렬 : \n`);
console.log(sorted);

// 중복 횟수
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

const Set = duplicateArray.reduce((acc, now) => {
  let idx = now;
  if (typeof now === 'function') idx = now.toString();
  if (typeof now === 'object') idx = JSON.stringify(now);
  acc[idx] = (acc[idx] || 0) + 1;
  return acc;
}, {});
console.log(`-------------------------------\n`);
console.log(`중복 횟수 카운트 : \n`);
console.log(Set);
console.log('\n');

// 중복 요소 제거하기
const deleteDup = duplicateArray.reduce((acc, now) => {
  if (
    acc.findIndex(elem => {
      if (typeof elem !== typeof now) return false;
      if (typeof elem === 'function') return elem.toString() === now.toString();
      if (typeof elem === 'object')
        return JSON.stringify(elem) === JSON.stringify(now);
      else return elem === now;
    }) === -1
  ) {
    return [...acc, now];
  }
  return acc;
}, []);

console.log(`-------------------------------\n`);
console.log(`중복 요소 제거 : \n`);
console.log(deleteDup);
console.log('\n');

// 중첩 배열 평탄화
const flatten = deleteDup.reduce((acc, now) => {
  return acc.concat(now);
}, []);

console.log(`-------------------------------\n`);
console.log(`중첩 배열 평탄화 : \n`);
console.log(flatten);
console.log('\n');
console.log(`-------------------------------\n`);

// 로또 만들기
