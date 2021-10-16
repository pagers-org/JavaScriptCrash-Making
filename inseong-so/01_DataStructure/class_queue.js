class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

// 구조체 정의
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  // Overflow : 큐가 가득 차서 더 이상 자료를 넣을 수 없는 경우로서 put이 불가능
  // Underflow : 큐가 비어 있어 자료를 꺼낼 수 없는 경우로 get이 불가능

  // 큐에 데이터 삽입
  push(item) {
    const node = new Node(item);
    if (!this.head) {
      this.head = node;
      this.head.next = this.tail;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this._size++;
  }
  // 큐의 선두에 데이터 삽입
  append(item) {
    const node = new Node(item);
    if (!this.head) {
      this.head = node;
      this.head.next = this.tail;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this._size++;
  }

  // 큐의 데이터 반환
  popLeft() {
    if (!this.head) return null;
    const popedItem = this.head;
    if (popedItem === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this._size--;
    return popedItem.item;
  }
  // 큐의 사이즈 반환
  size() {
    return this._size;
  }
  // 큐 비우기
  clear() {
    this.head = null;
    this.tail = null;
    this._size = 0;
    return true;
  }
  // 큐에 데이터가 존재하는지 반환
  isEmpty() {
    return !!this._size;
  }
  // 큐의 맨 앞 데이터 확인
  front() {
    return this.head;
  }
  // 큐의 맨 뒤 데이터 확인
  rear() {
    return this.tail;
  }
  // 출력
  print() {
    let current = this.head;
    console.log('Queue Elements ============');
    while (current) {
      console.log(current.item);
      current = current.next;
    }
  }
}

const queue = new Queue();
console.log(queue.popLeft());
queue.append([1, 2, 3]);
console.log(queue.popLeft());
queue.append(2);
queue.append(3);
queue.append(4);
console.log(queue.popLeft());
console.log(queue.front());
console.log(queue.rear());
