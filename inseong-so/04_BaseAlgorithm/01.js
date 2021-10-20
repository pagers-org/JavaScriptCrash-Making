// 입력 예제를 풍부하게 만들어서 while문으로 입력을 받아보세요.
const input = require('fs')
  .readFileSync('./dev_01')
  .toString()
  .split(require('os').EOL);

const solution = num => {
  let result = '';

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i - 1; j++) {
      result += ' ';
    }

    for (let k = 0; k <= i; k++) {
      result += '*';
    }
    result += '\n';
  }

  console.log(result);
};

input.forEach(item => {
  if (+item === 0) return;
  solution(+item);
});
