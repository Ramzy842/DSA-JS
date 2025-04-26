const hash = (str, bucketCount) => {
  if (typeof str !== "string") str = JSON.stringify(str);
  let hash = 0;
  for (let x = 0; x < str.length; x++) {
    hash += str.charCodeAt(x);
  }
  return hash % bucketCount;
};

// Array implementation
class ArrayHashTable {
  constructor(n) {
    this.bucketCount = n;
    this.table = new Array(n);
    for (let x = 0; x < n; x++) {
      this.table[x] = new Array();
    }
  }
  printTable() {
    console.log(this.table);
  }
  add(value) {
    const index = hash(value, this.bucketCount);
    this.table[index].push(value);
  }
  delete(value) {
    const index = hash(value, this.bucketCount);
    const valueIndex = this.table[index].indexOf(value);
    if (valueIndex !== -1) this.table[index].splice(valueIndex, 1);
  }
}

class Node {
  constructor(key, bucketList, next = null) {
    this.key = key;
    this.bucketList = bucketList;
    this.next = next;
  }
}
class BucketNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


// Linked list implementation
class LinkedListHashTable {
  constructor(n) {
    this.head = null;
    this.length = n;
    let current = this.head;
    for (let x = 0; x < n; x++) {
      let newNode = new Node(x, null);
      if (!current) this.head = newNode;
      else current.next = newNode;
      current = newNode;
    }
  }
  printTable() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
  add(value) {
    const index = hash(value, this.length);
    let x = 0;
    let current = this.head;
    while (x < index) {
      current = current.next;
      x++;
    }
    if (current && !current.bucketList)
      current.bucketList = new BucketNode(value, null);
    else {
      let currentBucket = current.bucketList;
      while (currentBucket.next) {
        currentBucket = currentBucket.next;
      }
      currentBucket.next = new BucketNode(value, null);
    }
  }
  delete(value) {
    const index = hash(value, this.length);
    let x = 0;
    let current = this.head;
    while (x < index) {
      current = current.next;
      x++;
    }
    if (current && !current.bucketList) return;
    else {
      let currentBucket = current.bucketList;
      let prev = null;
      while (currentBucket) {
        if (currentBucket.value === value) {
          if (prev) {
            prev.next = currentBucket.next;
            currentBucket.next = null;
          } else current.bucketList = currentBucket.next;
          currentBucket = prev ? prev.next : current.bucketList;
        } else {
          prev = currentBucket;
          currentBucket = currentBucket.next;
        }
      }
    }
  }
}