// LINKED LISTS

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  // Insert last node
  insertLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.size++;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;
  }
  // Insert at index
  insertAtIndex(index, value) {
    if (!this.head && index === 0) {
      this.insertFirst(value);
      return;
    }
    if (index > this.size || index < 0) return "Index out of bounds";
    let current = this.head;
    let prev = null;
    let x = 0;
    while (x < index) {
      prev = current;
      current = current.next;
      x++;
    }
    const newNode = new Node(value, current);
    if (prev) prev.next = newNode;
    else this.head = newNode;
    this.size++;
  }
  // Get at index
  getAtIndex(index) {
    if (!this.head) return undefined;
    if (index >= this.size || index < 0) return "Index out of bounds";
    let x = 0;
    let current = this.head;
    while (x < index) {
      current = current.next;
      x++;
    }
    return current.data;
  }
  // Update at index
  updateAtIndex(index, value) {
    if (!this.head) return undefined;
    if (index >= this.size || index < 0) return "Index out of bounds";
    let x = 0;
    let current = this.head;
    while (x < index) {
      current = current.next;
      x++;
    }
    current.data = value;
  }
  // Delete at index
  deleteAtIndex(index) {
    if (!this.head) return;
    if (index >= this.size || index < 0) return "Index out of bounds";
    let current = this.head;
    let x = 0;
    let prev = null;
    while (x < index) {
      prev = current;
      current = current.next;
      x++;
    }
    if (prev) prev.next = current.next;
    else this.head = this.head.next;
    this.size--;
  }
  deleteLast() {
    if (!this.head) return;
    let current = this.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    if (prev) prev.next = null;
    else this.head = null;
    this.size--;
  }
  // Clear the list
  clearList() {
    this.head = null;
    this.size = 0;
  }
  // print the list data
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
