# 함수 구현하기

<br>

## 🔮 들어가기 앞서
1. 주어진 문제를 해석하고 푸는 것은 자유입니다.
   - 꼭 자신만의 방식대로 바꿔주세요.
   - 현재 함수 선언문을 화살표 함수로 바꿔 작성하세요.
   - 클래스 문법으로 해결하셔도 됩니다.
2. ES6+의 문법만 사용하세요.
3. "왜 이렇게 구현했는지"에 대해 대답할 줄 알아야 합니다.
4. 예외처리가 가능하다면 최대한 구현하세요.
5. 주어지는 입력 예제는 전부가 아닙니다.
   - 많은 형태를 구현해봅시다.

<br>

## ▶️ 1회차
> [문제 파일 바로 가기](https://github.com/FECrash/JavascriptCrash-Making/blob/main/_initial/02_Functions/01/index.js)

<br>
<hr>

### 📝 입력 예제
```js
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

<br>

### 📌 배열 뒤집기
```js
/**
* 1. 배열 뒤집기
*    - 예상 결과 > [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
*
* @param {Array} arr
* @returns {Array}
*/
function solution1(arr) {
  return arr;
}

console.log(solution1(numArray));
```

<br>

### 📌 평균 구하기
```js
/**
 * 2. 평균 구하기
 *    - 예상 결과 > 5.5
 *
 * @param {Array} arr
 * @returns {Number}
 */
function solution2(arr) {
  return arr;
}

console.log(solution2(numArray));
```

<br>

### 📌 최대-최소값 구하기
```js
/**
 * 3. 최대값-최소값 구하기
 *    - 예상 결과 > 10, 1
 *
 * @param {Array} arr
 * @returns {Number}
 */
function solution3(arr) {
  return arr;
}

console.log(solution3(numArray));
```

<br>

### 📌 누적합
```js
/**
 * 4. 누적합
 *    - 예상 결과 > 55
 *
 * @param {Array} arr
 * @returns {Number}
 */
function solution4(arr) {
  return arr;
}

console.log(solution4(numArray));
```

<br>
<hr>

### 📝 입력 예제
```js
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
```

<br>

### 📌 배열 정렬하기
```js
/**
 * 5. 배열 정렬하기
 *    - 1) 아이디 순
 *    - 2) 점수 순
 *    - 3) 등급(+, 0, -) 순
 * 
 * 
 * 
 *    - 예상 결과 > [        
                      [ 'AI0001', 'F' ],
                      [ 'AI5543', 'C0' ],
                      [ 'AI5543', 'D+' ],
                      [ 'CA0055', 'D+' ],
                      [ 'DB0001', 'B-' ],
                      [ 'DS7651', 'A+' ],
                      [ 'DS7651', 'A0' ],
                      [ 'DS7651', 'B+' ],
                      [ 'OS1808', 'B-' ],
                      [ 'OS1808', 'B-' ]
                    ]
 *
 * @param {Array} arr
 * @returns {Array}
 */
function solution5(arr) {
  return arr;
}

console.log(solution5(requireSortArray));
```

<br>
<hr>

### 📝 입력 예제
```js
const duplicateArray = [
  'a',
  () => console.log(1),
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
  () => console.log(1),
  2,
];
```

<br>

### 📌 중복된 요소의 개수 구하기
```js
/**
 * 6. 중복된 요소의 개수 구하기
 *    - 예상 결과 > 5
 *
 * @param {Array} arr
 * @returns {Number}
 */
function solution6(arr) {
  return arr;
}

console.log(solution6(duplicateArray));
```

<br>

### 📌 중복 요소 제거하기
```js
/**
 * 7. 중복 요소 제거하기
 *    - 예상 결과 > [
                      'a',
                      '() => console.log(1)',
                      'c',
                      'd',
                      1,
                      '{"name":"amy","age":16}',
                      3,
                      4,
                      '[1,2,3,4]',
                      2
                    ]
 *
 * @param {Array} arr
 * @returns {Array}
 */
function solution7(arr) {
  return arr;
}

console.log(solution7(duplicateArray));
```

<br>

### 📌 중첩 배열 평탄화
```js
/**
 * 8. 중첩 배열 평탄화
 *    - 예상 결과 > [
                      'a',
                      [Function],
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
                      1,
                      2,
                      3,
                      4,
                      [Function],
                      2
                    ]
 *
 * @param {Array} arr
 * @returns {Array}
 */
function solution8(arr) {
  return arr;
}

console.log(solution8(duplicateArray));
```

<br>
<hr>
<br>

### 📌 로또 구현하기
```js
/**
 * 9. 로또 구현하기
 *    - 1부터 ~ 45까지 6개의 랜덤한 숫자를 출력하는 프로그램을 작성해주세요.
 *    - 중복된 숫자가 존재하면 안 됩니다.
 *
 * @returns {Number || Array || String}
 */
function solution9() {
  return [];
}

console.log(solution9());
```

<br>
