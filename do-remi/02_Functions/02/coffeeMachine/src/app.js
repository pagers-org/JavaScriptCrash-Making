let initialState = {
  totalCoins: 0,
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
  if (isNaN(parseInt(coin))) {
    return (initialState = {
      ...initialState,
      time: new Date().toLocaleString(),
      inputError: true,
      message: 'success',
    });
  }
  return (initialState = {
    ...initialState,
    time: new Date().toLocaleString(),
    totalCoins: initialState.totalCoins + parseInt(coin),
    currentCoin: coin,
    inputError: false,
    message: 'success',
  });
};

/**
 *
 * @param {커피명} coffee
 * @param {커피의 인덱스} index
 * @returns
 */
export const selectCoffee = (index, coffee) => {
  // 커피를 뽑는 기능 구현
  return (initialState = {
    ...initialState,
    time: new Date().toLocaleString(),
    coffees: initialState.coffees.map((elem, idx) => {
      if (idx === index) {
        return {
          ...elem,
          remain:
            elem.price <= initialState.totalCoins
              ? elem.remain > 0
                ? elem.remain - 1
                : elem.remain
              : elem.remain,
        };
      }
      return elem;
    }),
    selectCoffee: coffee,
    currentCoffeeCost: initialState.coffees[index].price,
    message:
      initialState.coffees[index].price <= initialState.totalCoins
        ? initialState.coffees[index].remain > 0
          ? 'success'
          : 'empty'
        : 'fail',
    totalCoins:
      initialState.coffees[index].price <= initialState.totalCoins
        ? initialState.coffees[index].remain > 0
          ? initialState.totalCoins - initialState.coffees[index].price
          : initialState.totalCoins
        : initialState.totalCoins,
  });
};

/**
 *
 * @param {*}} event
 * @returns
 */
export const returnCoin = event => {
  // 거스름돈을 구하는 기능 구현
  return (initialState = {
    ...initialState,
    message: 'success',
  });
};

export const init = event => {
  // 초기화하기
  return (initialState = {
    totalCoins: 0,
    currentCoin: 0,
    coffees: [
      { id: 1, kind: '블랙 커피', price: 700, remain: 9 },
      { id: 2, kind: '밀크티', price: 1500, remain: 5 },
      { id: 3, kind: '카푸치노', price: 2000, remain: 0 },
      { id: 4, kind: '라떼', price: 1300, remain: 1 },
      { id: 5, kind: '에이드', price: 1000, remain: 3 },
    ],
    message: 'success',
  });
};
