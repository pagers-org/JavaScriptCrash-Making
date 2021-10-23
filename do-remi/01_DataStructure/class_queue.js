class Queue {
  constructor() {
    this.array = [];
  }

  append(arg) {
    this.array = [arg, ...this.array];
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
