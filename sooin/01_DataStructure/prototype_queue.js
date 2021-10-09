// Queue 구현하기

function Queue() {
    this.array =[];
    this.size = 0;
}

Queue.prototype.append = function (item) {
    this.size++;
    this.array.unshift(item);
}

Queue.prototype.popleft = function () {
    this.size--;
    return this.array.shift();
}
Queue.prototype.size = function () {
    return this.size;
}
Queue.prototype.peek = function () {
    return this.array[0];
}

