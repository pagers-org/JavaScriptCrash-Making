import { checkValidation } from './src/app.js';

const $$input = document.querySelectorAll('input');
const $button = document.querySelector('button');

const Targets = {
  'kr-name': false,
  'en-name': false,
  age: false,
  email: false,
  password: false,
  phone: false,
  birthday: false,
  'resident-registration-number': false,
  site: false,
};

$button.addEventListener('click', event => {
  $$input.forEach($input => {
    const propKey = $input.id;
    const propValue = $input.value;
    if (checkValidation(propKey, propValue)) Targets[propKey] = true;
  });

  if (Object.values(Targets).indexOf(false) > -1) {
    alert('옳지 못한 값이 존재합니다.');
  } else {
    alert('정상적으로 입력되었습니다!');
  }
  event.preventDefault();
});

$button.addEventListener('keydown', event => {
  if (event.key !== 'Enter') return;
  event.preventDefault();
});
