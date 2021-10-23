const input = require('fs').readFileSync('./naver.html', 'utf8').toString();

const htmlText = input
  .replace(/(<([^>]+)>)/gi, '')
  .split(' ')
  .reduce((acc, cur) => {
    if (cur.trim()) acc.push(cur);
    return acc;
  }, []);

console.log(htmlText);

// const date = '2021-05-12 02:22:30'.replace(
//   /\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) (0[1-9]|1[0-9]|2[0-4]):(0[1-9]|[1-5][0-9]):(0[1-9]|[1-5][0-9])/gi,
//   '',
// );
// console.log(date);
