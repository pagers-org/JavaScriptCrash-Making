function Queue() {
  this.array = [];
  this._size = 0;
}

Queue.prototype.append = function (item) {
  this.array.unshift(item);
  this._size++;
};

Queue.prototype.popleft = function () {
  this._size--;
  return this.array.shift();
};

Queue.prototype.size = function () {
  return this._size;
};

Queue.prototype.peek = function () {
  return this.array[this._size - 1];
};

Queue.prototype.clear = function () {
  this.array = [];
  this._size = 0;
  return true;
};

const queue = new Queue();
queue.append(1);
queue.append(2);
console.log(queue.shift());
queue.append(3);
queue.append(4);
console.log(queue.shift());

while (queue.size()) {
  console.log(queue.shift());
}
