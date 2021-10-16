class Stack {
  constructor() {
    this.array = [];
  }

  push(item) {
    this.array.push(item);
  }

  pop() {
    return this.array.pop();
  }

  size() {
    return this.array.length;
  }

  peek() {
    return this.array[this.array.length - 1];
  }
}
