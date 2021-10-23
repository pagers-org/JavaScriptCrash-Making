const input = require('fs').readFileSync('./naver.html', 'utf8');

const removed = html => {
  const tag = /(<([^>]+)>)/gi;
  const text = html.replace(tag, '');
  return text;
};

console.log(removed(input));
