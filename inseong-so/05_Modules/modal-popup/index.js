const $ = selector => {
  return document.querySelector(selector);
};

const $myBtn = $('.myBtn');
const $myModal = $('.myModal');
const $close = $('.close');

const displayModal = event => {
  event.preventDefault();
  $myModal.classList.toggle('hidden');
};

$myBtn.addEventListener('click', displayModal);
$close.addEventListener('click', displayModal);
