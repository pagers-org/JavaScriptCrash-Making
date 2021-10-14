class Stack {
  constructor() {
    this.arr = [];
    this._size = 0;
  }
  push(item) {
    this._size++;
    this.arr.push(item);
  }
  pop() {
    this._size--;
    return this.arr.pop();
  }
  size() {
    return this._size;
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }
}

const stack = new Stack();

stack.push(1);
stack.push(4);
stack.push(7);

console.log(stack);

stack.pop();
console.log(stack.size());
console.log(stack.peek());
