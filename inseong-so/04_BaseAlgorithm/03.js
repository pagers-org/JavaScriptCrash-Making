const solution = str => {
  let index = 0;
  for (let char of str) {
    if (char === '(') index += 1;
    else index -= 1;
    if (index < 0) return false;
  }

  return index === 0 ? true : false;
};

// 입력 예제를 풍부하게 만들어서 while문으로 입력을 받아보세요.
require('fs')
  .readFileSync('./dev_03')
  .toString()
  .split(require('os').EOL)
  .forEach(item => console.log(solution(item)));
