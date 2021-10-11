const checkTimer = str => {
  let startTime = 0;
  let stopTime = 0;

  const timer = {};

  timer.start = () => {
    startTime = new Date().getTime();
  };

  timer.stop = () => {
    stopTime = new Date().getTime();
    console.log(`${str} : ${stopTime - startTime}`);
  };

  return timer;
};

module.exports = checkTimer;

// 사용법
/*
const checkTimer = require('../../_initial/00_utils/time-check.js');
const timer = checkTimer('큐 시간 테스트 : ');
timer.start();

// 테스트 할 로직 작성

timer.end();
*/
