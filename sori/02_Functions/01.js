// 배열 초기화
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 배열 뒤집기 : [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
const reverse = array => array.sort((a, b) => b - a);
console.log(reverse(arr));

// 평균 구하기 : 5.5
const average = array => array.reduce((p, c) => p + c, 0) / array.length;
console.log(average(arr));

// 최대값-최소값 구하기 : 1, 10
const min = Math.min.apply(0, arr);
const max = Math.max.apply(0, arr);
console.log(min, max);

// 누적합

// 중복 횟수

// 중첩 배열 평탄화

// 중복 요소 제거하기

// 로또 만들기

// 함수는 화살표 함수를 사용, const와 let으로 선언할 것
