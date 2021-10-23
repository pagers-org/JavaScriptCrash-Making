let initialState = {
  totalCoins: 0,
  currentCoin: 0,
  // 비어있는 상태 값이 있습니다.
  coffees: [
    { id: 1, kind: '블랙 커피', price: 700, remain: 9 },
    { id: 2, kind: '밀크티', price: 1500, remain: 5 },
    { id: 3, kind: '카푸치노', price: 2000, remain: 0 },
    { id: 4, kind: '라떼', price: 1300, remain: 1 },
    { id: 5, kind: '에이드', price: 1000, remain: 3 },
  ],
  time: 0,
  message: 'success',
  result: 'ok',
  returnCoins: 0,
};

/**
 *
 * @param {넣은 코인} coin
 * @returns
 */
export const inputCoin = coin => {
  if (!/\d/.test(+coin)) {
    initialState.message = 'fail';
    initialState.result = null;
  } else {
    initialState.message = 'success';
    initialState.totalCoins += +coin;
    initialState.currentCoin = +coin;
    initialState.time = new Date().toLocaleString();
    initialState.result = 'ok';
  }
  // 코인을 넣는 기능 구현
  return initialState;
};

/**
 *
 * @param {커피명} coffee
 * @param {커피의 인덱스} index
 * @returns
 */
export const selectCoffee = (index, coffee) => {
  let target = initialState.coffees.filter(item => {
    if (item.kind === coffee) {
      return true;
    }
  });
  const { price, remain } = target[0];
  if (remain <= 0) {
    initialState.message = 'sold-out';
  } else if (price > initialState.totalCoins) {
    initialState.message = 'fail';
  } else {
    initialState.currentCoffeeCost = price;
    initialState.totalCoins -= price;
    target[0].remain--;
  }
  initialState.selectCoffee = coffee;
  initialState.time = new Date().toLocaleString();
  initialState.result = 'ok';
  return initialState;
};

/**
 *
 * @param {*} event
 * @returns
 */
export const returnCoin = () => {
  // 거스름돈을 구하는 기능 구현
  initialState.returnCoins = initialState.totalCoins;
  initialState.totalCoins = 0;
  initialState.result = null;
  return initialState;
};

export const init = () => {
  // 초기화하기
  return {
    totalCoins: 0,
    currentCoin: 0,
    // 비어있는 상태 값이 있습니다.
    coffees: [
      { id: 1, kind: '블랙 커피', price: 700, remain: 9 },
      { id: 2, kind: '밀크티', price: 1500, remain: 5 },
      { id: 3, kind: '카푸치노', price: 2000, remain: 0 },
      { id: 4, kind: '라떼', price: 1300, remain: 1 },
      { id: 5, kind: '에이드', price: 1000, remain: 3 },
    ],
    time: 0,
    message: 'success',
    result: 'ok',
    returnCoins: 0,
  };
};
