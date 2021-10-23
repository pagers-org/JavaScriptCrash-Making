class Queue {
  constructor() {
    this.array = [];
  }

  append(item) {
    this.array.unshift(item);
  }

  popleft() {
    return this.array.shift();
  }

  size() {
    return this.array.length;
  }

  peek() {
    return this.array[0];
  }
}
