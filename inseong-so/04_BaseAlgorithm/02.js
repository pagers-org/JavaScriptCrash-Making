const WEEK_DAY = Object.freeze([
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
]);

const solution = str => {
  const pareDate = `${str.substring(0, 4)}-${str.substring(
    4,
    6,
  )}-${str.substring(6, 8)}`;
  console.log(pareDate, WEEK_DAY[new Date(pareDate).getDay()]);
};

require('fs')
  .readFileSync('./dev_02')
  .toString()
  .split(require('os').EOL)
  .forEach(item => solution(item));
