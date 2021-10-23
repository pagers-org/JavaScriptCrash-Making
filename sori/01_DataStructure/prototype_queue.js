function Queue() {
  this.array = [];
}

Queue.prototype.append = function (item) {
  this.array.unshift(item);
};

Queue.prototype.popleft = function () {
  return this.array.shift();
};

Queue.prototype.size = function () {
  return this.array.length;
};

Queue.prototype.peek = function () {
  return this.array[0];
};
