// Array Implementation
class ArrayQueue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    const removed = this.items[0];
    this.items.shift();
    return removed;
  }
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return !this.items.length;
  }
  size() {
    return this.items.length;
  }
}

// Linked list implementation

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  insertFirst(item) {
    if (!item) return;
    this.head = new Node(item, this.head);
    this.length++;
  }
  insertLast(item)
  {
    if (!item) return;
    if (!this.head)
      this.insertFirst(item);
    else
    {
      let current = this.head;
      while (current.next)
      {
        current = current.next;
      }
      current.next = new Node(item, null);
    }
    this.length++;
  }
  enqueue(item) {
    this.insertLast(item);
  }
  dequeue() {
    if (!this.head) return undefined;
    const removed = this.head;
    this.head = this.head.next;
    this.length--;
    return removed.data;
  }
  peek() {
    if (!this.head) return undefined;
    return this.head.data;
  }
  isEmpty() {
    return !this.length;
  }
  size() {
    return this.length;
  }
}
