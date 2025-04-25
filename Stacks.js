// STACKS

// Array version

class StackArray {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
    return this.items.length;
  }
  pop() {
    const element = this.items.pop();
    return element;
  }
  peek() {
    const top = this.items[this.items.length - 1];
    return top;
  }
  isEmpty() {
    return this.items.length ? false : true;
  }
}

// Linked list version

class Node {
  constructor(value, next = null) {
    this.data = value;
    this.next = next;
  }
}

class StackLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  push(item) {
    this.head = new Node(item, this.head);
    this.size++;
    return this.size;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = this.head.next;
    this.size--;
    return current.data;
  }
  peek() {
    if (!this.head) return undefined;
    let current = this.head;
    return current.data;
  }
  isEmpty() {
    return !this.size;
  }
}
