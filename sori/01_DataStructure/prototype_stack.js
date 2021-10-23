function Stack() {
  this.array = [];
}

Stack.prototype.push = function (item) {
  this.array.push(item);
};

Stack.prototype.pop = function () {
  return this.array.pop();
};

Stack.prototype.size = function () {
  return this.array.length;
};

Stack.prototype.peek = function () {
  return this.array.at(-1);
};
