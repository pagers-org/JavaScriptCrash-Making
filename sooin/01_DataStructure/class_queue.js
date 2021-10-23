class Queue {
  constructor() {
    this.arr = [];
    this._size = 0;
  }

  append(item) {
    this._size++;
    this.arr.unshift(item);
  }
  popleft() {
    this._size--;
    return this.arr.shift();
  }
  size() {
    return this._size;
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }
}

const queue = new Queue();

queue.append(3);
queue.append(5);
queue.append(7);
console.log(queue);

queue.popleft();
console.log(queue.size());
console.log(queue.peek());
