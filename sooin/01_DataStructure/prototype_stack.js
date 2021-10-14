/*
스택이란?
- 자료구조형
- 마지막에 들어간 자료가 먼저 나오는 후입선출 자료구조로 
LIFO(Last In First Out)이라고도 한다.
- push : 데이터 입력 / pop : 데이터 제거
- size : 데이터 길이 / peek : 스택의 마지막 데이터를 return함

*/

// Stack 구현하기

function Stack() {
  this.array = [];
  this._size = 0;
}

Stack.prototype.push = function (item) {
  this.array.push(item);
  this._size++;
};

Stack.prototype.pop = function () {
  this._size--;
  return this.array.pop();
};

Stack.prototype.size = function () {
  return this._size;
};

Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
};

const stack = new Stack();
stack.push(2);
stack.push(3);

console.log(stack);
console.log(stack.size());
console.log(stack.peek());

//  ++ size,peek 호출이 안된 이유는 Stack 함수 내에서 size와 prototype의 size가 중복되어 생성자 함수 내의
// size가 호출이 되어 not a function 오류가 떴다!
