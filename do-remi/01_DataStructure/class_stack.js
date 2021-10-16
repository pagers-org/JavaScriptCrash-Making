class Stack {
  constructor() {
    this.array = [];
  }

  push(arg) {
    this.array = [...this.array, arg];
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

// const me = new Stack();

// me.push(1);
// me.push('123');
// me.push({name:'lee'});

// console.log(me);

// me.pop();
// console.log(me.peek());

// console.log(me);
