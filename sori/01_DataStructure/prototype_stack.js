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

const array1 = new Stack();
array1.push(3);
console.log(array1.size());
