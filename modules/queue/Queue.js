class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    const node = this.first;
    if (this.first === null) {
      return;
    }
    if (node === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
  }

  show() {
    return this.first.value;
  }

  all() {
    let arr = [];
    let currentNode = this.first;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
}

module.exports = Queue;
