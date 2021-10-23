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

const getHyphen = phone => {
  const formatted = [];

  for (let digit of phone) {
    if (digit.length === 11) {
      formatted.push(digit.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    } else if (digit.length === 10 && digit.indexOf('02') === 0) {
      formatted.push(digit.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3'));
    } else {
      formatted.push(digit.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
  }
  return formatted;
};

console.log(getHyphen(numbers));

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
const countWord = str => {
  const word = str.replace(/\r\n/g, '').split(' ');
  const counted = {};
  word.forEach(elem => (counted[elem] = (counted[elem] || 0) + 1));
  return counted;
};

console.log(countWord(inputString));
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
const solution3 = str => {
  return str;
};

console.log(solution3(unzipedString));
// =========================================================
// for문, slice, splice 활용 가능
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
  return arr;
}

console.log(solution4(uglyStringArray));
// =========================================================
// 실무에서 자주 사용
// 첫 글자만 대문자, 나머지는 소문자로 바꾸기
// 코드를 길게 짜지 말고 가독성이 좋고 간결하고 빠르게 동작하도록 최적화까지 해볼 것

// =========================================================
const oldHashArray = [
  'MAN675847583748sjt567654;Manchester Piccadilly',
  'GNF576746573fhdg4737dh4;Greenfield',
  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
  'SYB4f65hf75f736463;Stalybridge',
  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield',
];

/**
 * 5. 옳은 문자열로 반환하기
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
  return arr;
}

console.log(solution5(oldHashArray));
// =========================================================
