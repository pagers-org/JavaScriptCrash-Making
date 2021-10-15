let initialState = {
  coins: 0,
  currentCoin: 0,
  coffees: [
    { id: 1, kind: '블랙 커피', price: 700, remain: 9 },
    { id: 2, kind: '밀크티', price: 1500, remain: 5 },
    { id: 3, kind: '카푸치노', price: 2000, remain: 0 },
    { id: 4, kind: '라떼', price: 1300, remain: 1 },
    { id: 5, kind: '에이드', price: 1000, remain: 3 },
  ],
  message: 'success',
};

/**
 *
 * @param {넣은 코인} coin
 * @returns
 */
export const inputCoin = coin => {
  // 코인을 넣는 기능 구현
  return initialState;
};

/**
 *
 * @param {커피명} coffee
 * @param {커피의 인덱스} index
 * @returns
 */
export const selectCoffee = (coffee, index) => {
  // 커피를 뽑는 기능 구현
  return initialState;
};

/**
 *
 * @param {*}} event
 * @returns
 */
export const returnCoin = event => {
  // 거스름돈을 구하는 기능 구현
};

export const init = event => {
  // 초기화하기
  return initialState;
};
