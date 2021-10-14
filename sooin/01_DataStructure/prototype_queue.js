/*
큐란?
- 자료구조형
- 먼저 들어간 자료가 먼저 나오는 선입선출 자료구조로 
FIFO(First In First Out)이라고도 한다.
- append : 데이터 입력 / popleft : 데이터 제거
- size : 데이터 길이 / peek : 스택의 마지막 데이터를 return함

*/

// Queue 구현하기

function Queue() {
  this.array = [];
  this._size = 0;
}

Queue.prototype.append = function (item) {
  this._size++;
  this.array.unshift(item);
};

Queue.prototype.popleft = function () {
  this._size--;
  return this.array.shift();
};
Queue.prototype.size = function () {
  return this._size;
};
Queue.prototype.peek = function () {
  return this.array[this.array.length - 1];
};

const queue = new Queue();

queue.append(3);
queue.append(4);
queue.append(7);
queue.popleft();

console.log(queue.size());
console.log(queue.peek());
