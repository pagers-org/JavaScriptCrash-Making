// =========================================================
// [1 ~ 4 대상 예제]
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. 배열 뒤집기 : [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
const getReversedArray = (type, arr) => {
  const _arr = Array.from(arr);
  switch (type) {
    case 'for': {
      const returnArray = [];
      for (let i = _arr.length - 1; i >= 0; i--) {
        returnArray.push(_arr[i]);
      }
      return returnArray;
    }
    case 'reverse': {
      return _arr.reverse();
    }
    case 'sort': {
      return _arr.sort((a, b) => b - a);
    }
    case 'reduce': {
      return _arr.reduce((acc, current) => {
        acc.unshift(current);
        return acc;
      }, []);
    }
    default:
      return _arr;
  }
};
console.log(getReversedArray('sort', numArray));

// 2. 평균 구하기 : [5.5]
const getAverage = (type, arr) => {
  const _arr = Array.from(arr);

  let sum = 0;

  switch (type) {
    case 'for': {
      for (let num of _arr) {
        sum += num;
      }
      return sum / _arr.length;
    }
    case 'forEach': {
      _arr.forEach(num => {
        sum += num;
      });
      return sum / _arr.length;
    }
    case 'reduce': {
      return (
        _arr.reduce((acc, currentNum) => acc + currentNum, 0) / _arr.length
      );
    }
    default:
      return _arr;
  }
};
console.log(getAverage('for', numArray));

// 3. 최대값-최소값 구하기 : [10, 1]
const getMaxAndMinNumber = (type, arr) => {
  const _arr = Array.from(arr);

  let MIN = Number.MAX_SAFE_INTEGER;
  let MAX = Number.MIN_SAFE_INTEGER;

  switch (type) {
    case 'for': {
      for (let num of _arr) {
        if (MIN > num) MIN = num;
        if (MAX < num) MAX = num;
      }
      return [MAX, MIN];
    }
    case 'forEach': {
      _arr.forEach(num => {
        if (MIN > num) MIN = num;
        if (MAX < num) MAX = num;
      });
      return [MAX, MIN];
    }
    case 'spread': {
      return [Math.max(..._arr), Math.min(..._arr)];
    }
    default:
      return _arr;
  }
};
console.log(getMaxAndMinNumber('forEach', numArray));

// 4. 누적합 : [55]
// =========================================================
const getPrefixSum = (type, arr) => {
  const _arr = Array.from(arr);

  let totalSum = 0;

  switch (type) {
    case 'for': {
      for (let num of _arr) {
        totalSum += num;
      }
      return totalSum;
    }
    case 'forEach': {
      _arr.forEach(num => {
        totalSum += num;
      });
      return totalSum;
    }
    case 'reduce': {
      return _arr.reduce((acc, currentNumber) => acc + currentNumber, 0);
    }
    default:
      return _arr;
  }
};
console.log(getPrefixSum('forEach', numArray));

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
const sortedArray = Array.from(requireSortArray).sort((a, b) => {
  const order = { '+': -1, '-': 1, [0]: 0, [undefined]: 0 };
  return (
    a[0].localeCompare(b[0]) ||
    a[1][0].localeCompare(b[1][0]) ||
    order[a[1][1]] - order[b[1][1]]
  );
});

console.log(sortedArray);

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
const getDuplicated = (type, arr) => {
  const _arr = Array.from(arr);
  // 집합의 특성을 활용하여 작성했지만,
  // 객체를 사용할 경우 주석을 따라가면 됩니다.
  // Set, Map 모두 효과는 동일합니다.
  switch (type) {
    case 'for': {
      const uniqueArray = [];
      let count = 0;
      for (let item of arr) {
        if (typeof item === 'object') {
          item = JSON.stringify(item);
        } else if (typeof item === 'function') {
          item = item.toString();
        }

        if (uniqueArray.indexOf(item) === -1) {
          uniqueArray.push(item);
        } else {
          count++;
        }
      }

      return count;
    }
    case 'forEach': {
      // let uniqueProperty = {};
      let uniqueProperty = new Set();
      _arr.forEach(item => {
        if (typeof item === 'object') {
          // const stringItem = JSON.stringify(item);
          // uniqueProperty[stringItem] = stringItem;
          uniqueProperty.add(JSON.stringify(item));
        } else if (typeof item === 'function') {
          // const stringItem = item.toString();
          // uniqueProperty[stringItem] = stringItem;
          uniqueProperty.add(item.toString());
        } else {
          // uniqueProperty[item] = item;
          uniqueProperty.add(item);
        }
      });
      // return _arr.length - Object.keys(uniqueProperty).length;
      return _arr.length - uniqueProperty.size;
    }
    case 'reduce': {
      const uniqueProperty = _arr.reduce((acc, currentItem) => {
        if (typeof currentItem === 'object') {
          acc.add(JSON.stringify(currentItem));
        } else if (typeof currentItem === 'function') {
          acc.add(currentItem.toString());
        } else {
          acc.add(currentItem);
        }
        return acc;
      }, new Set());
      return _arr.length - uniqueProperty.size;
    }
    default:
      return _arr;
  }
};
console.log(getDuplicated('for', duplicateArray));

// 7. 중복 요소 제거하기
const removeToDuplicates = (type, arr) => {
  const _arr = Array.from(arr);
  switch (type) {
    case 'for': {
      const uniqueArray = [];
      for (let item of arr) {
        if (typeof item === 'object') {
          item = JSON.stringify(item);
        } else if (typeof item === 'function') {
          item = item.toString();
        }

        if (uniqueArray.indexOf(item) === -1) {
          uniqueArray.push(item);
        }
      }

      return uniqueArray;
    }
    case 'forEach': {
      let uniqueProperty = new Set();
      _arr.forEach(item => {
        if (typeof item === 'object') {
          uniqueProperty.add(JSON.stringify(item));
        } else if (typeof item === 'function') {
          uniqueProperty.add(item.toString());
        } else {
          uniqueProperty.add(item);
        }
      });
      return [...uniqueProperty];
    }
    case 'reduce': {
      const uniqueProperty = _arr.reduce((acc, currentItem) => {
        if (typeof currentItem === 'object') {
          acc.add(JSON.stringify(currentItem));
        } else if (typeof currentItem === 'function') {
          acc.add(currentItem.toString());
        } else {
          acc.add(currentItem);
        }
        return acc;
      }, new Set());
      return [...uniqueProperty];
    }
    default:
      return _arr;
  }
};
console.log(removeToDuplicates('reduce', duplicateArray));

// 8. 중첩 배열 평탄화
const setFlatToArray = (type, arr) => {
  const _arr = Array.from(arr);
  switch (type) {
    case 'flat': {
      return duplicateArray.flat();
    }
    case 'forEach': {
      let targetIndex = 0;
      let targetItem = null;
      _arr.forEach((item, index) => {
        if (item instanceof Array) {
          [targetIndex, targetItem] = [index, item];
        }
      });

      _arr.splice(targetIndex, 1, ...targetItem);

      return _arr;
    }
    case 'reduce': {
      const flattedArray = duplicateArray.reduce((acc, currentItem) => {
        if (currentItem instanceof Array) {
          acc = [...acc, ...currentItem];
        } else {
          acc.push(currentItem);
        }
        return acc;
      }, []);
      return flattedArray;
    }
    default:
      return _arr;
  }
};

console.log(setFlatToArray('forEach', duplicateArray));
// =========================================================

// =========================================================
// 9. 로또 만들기
class Lotto {
  constructor() {
    this.reset();
  }

  reset() {
    this._lottoArray = [];
    this._drawnNumbers = [];
  }

  start() {
    while (this._lottoArray.length < 6) {
      const lottoNumber = this.lottoNumber;
      if (this._drawnNumbers.indexOf(lottoNumber) !== -1) continue;
      this._lottoArray.push(lottoNumber);
      this._drawnNumbers.push(lottoNumber);
    }

    console.log(this._lottoArray);

    this.end();
  }

  end() {
    console.log(`이번 로또 당첨 번호는 ${this._lottoArray.join('번 ')}입니다!`);
    this.reset();
  }

  get lottoNumber() {
    return Math.floor(Math.random() * 44) + 1;
  }
}

const lotto = new Lotto();
lotto.start();

// =========================================================
