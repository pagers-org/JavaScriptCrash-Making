/**
 * 1. 주어진 문제를 해석하고 푸는 것은 자유입니다.
 *    - 꼭 자신만의 방식대로 바꿔주세요.
 *    - 현재 함수 선언문을 화살표 함수로 바꿔 작성하세요.
 *    - 클래스 문법으로 해결하셔도 됩니다.
 * 2. ES6+의 문법만 사용하세요.
 * 3. "왜 이렇게 구현했는지"에 대해 대답할 줄 알아야 합니다.
 * 4. 예외처리가 가능하다면 최대한 구현하세요.
 */

// =========================================================
const numbers = ['01012345678', '0212345678', '0311234567'];

/**
 * 1. 숫자 문자열 포맷팅하기
 *    - 예상 결과 > ['010-1234-5678', '02-1234-5678', '031-123-4567']
 *
 * @param {Array} arr
 * @returns {Array}
 */
function solution1(arr) {
  return arr;
}

console.log(solution1(numbers));
// =========================================================

// =========================================================
const inputString = require('fs').readFileSync('./text.txt').toString();

/**
 * 2. 문자열에서 중복되는 단어가 몇개 있는지 체크하기
 *    - 단어는 공백 기준으로 체크합니다.
 *    - 예: 단어가 단어가 단어가 중복되네요 => {단어가:3, 중복되네요:1};
 *
 * @param {String} str
 * @returns {String}
 */
function solution2(str) {
  const words = str.split(' ');
  return words.reduce((acc, cur) => {
    const withoutEscape = cur.split('\n');
    withoutEscape.forEach(elem => {
      console.log(elem);
      acc[elem] = (acc[elem] || 0) + 1;
    });
    return acc;
  }, {});
}

console.log(solution2(inputString));
// =========================================================

// =========================================================
const unzipedString = 'aaabbbacccadfsaaffgaabssppp';

/**
 * 3. 연속된 문자 개수를 문자열과 합쳐 반환하기
 *    - 예상 결과 > a3b3a1c3a1d1f1s1a2f2g1a2b1s2p3
 *
 * @param {String} str
 * @returns {String}
 */
function solution3(str) {
  let answer = '';
  let dupStr = '';
  let dupCount = 0;
  for (let i = 0; i <= str.length; i++) {
    if (i === str.length) {
      answer += dupStr + dupCount;
      break;
    }
    if (str[i] !== dupStr) {
      if (i !== 0) answer += dupStr + dupCount;
      dupStr = str[i];
      dupCount = 1;
      continue;
    }
    dupCount++;
  }
  return answer;
}

console.log(solution3(unzipedString));
// =========================================================

// =========================================================
const uglyStringArray = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

/**
 * 4. 대소문자 맞게 변환하기
 *    - 예상 결과 > [
                    'London',
                    'Manchester',
                    'Birmingham',
                    'Liverpool',
                    ]
 *
 * @param {Array} arr
 * @returns {Array}
 */
function solution4(arr) {
  return arr.reduce((acc, cur) => {
    return (acc = [
      ...acc,
      cur.slice(0, 1).toUpperCase() + cur.slice(1).toLowerCase(),
    ]);
  }, []);
}

console.log(solution4(uglyStringArray));
// =========================================================

// =========================================================
const oldHashArray = [
  'MAN675847583748sjt567654;Manchester Piccadilly',
  'GNF576746573fhdg4737dh4;Greenfield',
  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
  'SYB4f65hf75f736463;Stalybridge',
  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield',
];

/**
 * 4. 옳은 문자열로 반환하기
 *    - 예상 결과 > [
                      'MAN: Manchester Piccadilly',
                      'GNF: Greenfield',
                      'LIV: Liverpool Lime Street',
                      'SYB: Stalybridge',
                      'HUD: Huddersfield',
                    ]
 *
 * @param {Array} arr
 * @returns {Array}
 */
function solution5(arr) {
  return arr.reduce((acc, cur) => {
    let rightString = '';
    for (let i = 0; i < cur.length; i++) {
      if (!isNaN(parseInt(cur[i]))) {
        i = cur.indexOf(';', i);
        rightString += ': ';
        continue;
      }
      rightString += cur[i];
    }
    return (acc = [...acc, rightString]);
  }, []);
}

console.log(solution5(oldHashArray));
// =========================================================
