// Stack 구현하기

function Stack() {
  this.array = [];
  this._size = 0;
}

Stack.prototype.push = function (item) {
  this._size++;
  this.array.push(item);
};
Stack.prototype.pop = function () {
  this._size--;
  return this.array.pop();
};
Stack.prototype.size = function () {
  return this._size;
};
Stack.prototype.peek = function () {
  return this.array[this._size - 1];
};

const stack = new Stack();
stack.push(2);
stack.push(3);

console.log(stack.size());
console.log(stack.peek());

//  ++ size,peek 호출이 안된 이유는 Stack 함수 내에서 size와 prototype의 size가 중복되어 생성자 함수 내의
// size가 호출이 되어 not a function 오류가 떴다!
