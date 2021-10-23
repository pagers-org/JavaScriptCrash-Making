function Stack() {
  this.array = [];
}

Stack.prototype.push = function (arg) {
  this.array = [...this.array, arg];
};

Stack.prototype.pop = function () {
  return this.array.pop();
};

Stack.prototype.size = function () {
  return this.array.length;
};

Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
};
