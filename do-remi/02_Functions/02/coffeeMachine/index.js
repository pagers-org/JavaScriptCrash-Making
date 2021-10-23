import { inputCoin, selectCoffee, returnCoin, init } from './src/app.js';

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

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

const vendingMachineDisplay = ({ coffees }) => {
  return `
    <table>
      <thead>
        <tr>
          <th width="20%" class="hold">슬롯</th>
          <th width="16%" class="hold">1번</th>
          <th width="16%" class="hold">2번</th>
          <th width="16%" class="hold">3번</th>
          <th width="16%" class="hold">4번</th>
          <th width="16%" class="hold">5번</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="hold">커피 종류</td>
          <td>${coffees[0].kind}</td>
          <td>${coffees[1].kind}</td>
          <td>${coffees[2].kind}</td>
          <td>${coffees[3].kind}</td>
          <td>${coffees[4].kind}</td>
        </tr>
        <tr>
          <td class="hold">가격</td>
          <td>${coffees[0].price}</td>
          <td>${coffees[1].price}</td>
          <td>${coffees[2].price}</td>
          <td>${coffees[3].price}</td>
          <td>${coffees[4].price}</td>
        </tr>
        <tr>
          <td class="hold">남은 수량</td>
          <td>${coffees[0].remain}</td>
          <td>${coffees[1].remain}</td>
          <td>${coffees[2].remain}</td>
          <td>${coffees[3].remain}</td>
          <td>${coffees[4].remain}</td>
        </tr>
      </tbody>
    </table>
  `;
};

const render = newState => {
  const $header = $('[data-header]');
  $header.innerHTML = vendingMachineDisplay(newState);
};

const logger = (type, state) => {
  const $message = $('[data-message]');
  const $p = document.createElement('p');
  switch (type) {
    case 'input': {
      if (state.inputError) {
        $p.classList.add('input');
        $p.innerHTML = `${state.time} : 잘못된 금액 형식 입니다. [${state.totalCoins}]`;
      } else {
        $p.classList.add('input');
        $p.innerHTML = `${state.time} : ${state.currentCoin}원을 넣으셨습니다. [${state.totalCoins}]`;
      }
      break;
    }
    case 'output': {
      // 가격 < 현재 투입 금액
      if (state.message === 'fail') {
        $p.classList.add('error');
        $p.innerHTML = `${state.time} : ${state.selectCoffee}는 금액을 더 추가해주세요. [${state.totalCoins}]`;
      } else if (state.message === 'empty') {
        console.log(' ### ');
        $p.classList.add('error');
        $p.innerHTML = `${state.time} : ${state.selectCoffee}는 매진되었습니다.`;
      } else {
        // 가격 > 현재 투입 금액
        $p.classList.add('output');
        $p.innerHTML = `${state.time} : ${state.selectCoffee}를 선택하셨습니다. [-${state.currentCoffeeCost}]`;
      }
      break;
    }
    case 'return':
      $p.innerHTML = `거스름돈은 ${state.totalCoins}원 입니다.`;
      break;
    default:
      while ($message.hasChildNodes()) {
        $message.removeChild($message.firstChild);
      }
      break;
  }
  $message.insertBefore($p, $message.firstChild);
};

render(initialState);

const $input = $('input');
const $select = $('select');
const $$button = $$('button');
$$button.forEach($button => {
  $button.addEventListener('click', event => {
    const { target } = event;
    if (target.matches('.input-coin')) {
      initialState = inputCoin($input.value);
      logger('input', initialState);
    } else if (target.matches('.select-coffee')) {
      const coffee = $select.options[$select.selectedIndex].text;
      const index = $select.selectedIndex;
      initialState = selectCoffee(index, coffee);
      logger('output', initialState);
    } else if (target.matches('.return-coin')) {
      initialState = returnCoin(event);
      logger('return', initialState);
    } else if (target.matches('.init')) {
      initialState = init();
      logger('reset');
    }
    event.preventDefault();
    if (initialState.message !== 'success') {
      alert('커피를 뽑을 수 없어요 ㅠㅡㅠ');
      return;
    }
    render(initialState);
  });
});
