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
  return this.array[this._size - 1];
};

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
stack.push(3);
stack.push(4);
console.log(stack.pop());
