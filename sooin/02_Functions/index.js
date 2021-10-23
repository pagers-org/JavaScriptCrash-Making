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
 * 1. 숫자 문자열 포맷팅하기 배열 또는 정규표현식으로
 *    - 예상 결과 > ['010-1234-5678', '02-1234-5678', '031-123-4567']
 *
 * @param {Array} arr
 * @returns {Array}
 */

function solution1(arr) {
  const totalArr = [];

  if (arr[0][2] === '0') {
    const localNum2 =
      arr[0].slice(0, 3) + '-' + arr[0].slice(3, 7) + '-' + arr[1].slice(6, 11);
    totalArr.push(localNum2);
    if (arr[1][1] === '2') {
      const localNum1 =
        arr[1].slice(0, 2) +
        '-' +
        arr[1].slice(2, 6) +
        '-' +
        arr[1].slice(6, 10);
      totalArr.push(localNum1);
      if (arr[2][2] === '1') {
        const localNum3 =
          arr[2].slice(0, 3) +
          '-' +
          arr[2].slice(3, 6) +
          '-' +
          arr[2].slice(6, 10);
        totalArr.push(localNum3);
        return totalArr;
      }
      return totalArr;
    }
    return totalArr;
  }
}
console.log(solution1(numbers));
// =========================================================

// =========================================================
const inputString = require('fs').readFileSync('./text.txt').toString();

/**
 * 2. 문자열에서 중복되는 단어가 몇개 있는지 체크하기 힌트 : split > for문
 *    - 단어는 공백 기준으로 체크합니다.
 *    - 예: 단어가 단어가 단어가 중복되네요 => {단어가:3, 중복되네요:1};
 *
 * @param {String} str
 * @returns {String}
 */
function solution2(str) {
  str.split(' ');
  return str;
}

// console.log(solution2(inputString));
// =========================================================

// =========================================================
const unzipedString = 'aaabbbacccadfsaaffgaabssppp';

/**
 * 3. 연속된 문자 개수를 문자열과 합쳐 반환하기 for로 구현
 *    - 예상 결과 > a3b3a1c3a1d1f1s1a2f2g1a2b1s2p3
 *
 * @param {String} str
 * @returns {String}
 */

// console.log(solution3(unzipedString));
// =========================================================

// =========================================================
const uglyStringArray = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

/**
 * 4. 대소문자 맞게 변환하기 최대한 간결하게 짜보기
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
const arr1 = uglyStringArray.flatMap(x => x.toLowerCase());
const arr2 = arr1.flatMap(x => x[0].toUpperCase());
const resultArr = [];
const london = arr2[0] + arr1[0].slice(1, arr1[0].length);
const manche = arr2[1] + arr1[1].slice(1, arr1[1].length);
const birm = arr2[2] + arr1[2].slice(1, arr1[2].length);
const liver = arr2[3] + arr1[3].slice(1, arr1[3].length);
resultArr.push(london);
resultArr.push(manche);
resultArr.push(birm);
resultArr.push(liver);
console.log(resultArr);

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
const reSult = [];
// man
const rr1 = oldHashArray[0];
const reg = /[0-9]/g;
const newArray1 = rr1.replace(reg, '');
const reg2 = /;/g;
const newArray1_1 = newArray1.replace(reg2, ': ');
console.log(newArray1_1);

//gnf
const rr2 = oldHashArray[1];
const newArray2 = rr2.replace(reg, '');
const newArray2_2 = newArray2.replace(reg2, ': ');
console.log(newArray2_2);

//liv
const rr3 = oldHashArray[2];
const newArray3 = rr3.replace(reg, '');
const newArray3_3 = newArray3.replace(reg2, ': ');
console.log(newArray3_3);

//syb
const rr4 = oldHashArray[3];
const newArray4 = rr4.replace(reg, '');
const newArray4_4 = newArray4.replace(reg2, ': ');
console.log(newArray4_4);

//hud
const rr5 = oldHashArray[4];
const newArray5 = rr5.replace(reg, '');
const newArray5_5 = newArray5.replace(reg2, ': ');
console.log(newArray5_5);

// =========================================================
