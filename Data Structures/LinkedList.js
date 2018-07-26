const Node = function(val) {
  this.value = val;
  this.next = null;
}

const LinkedList = function() {
  this.head = null;
  this.size = 0;
}

LinkedList.prototype = {
  add: function(val) {
    let node = this.head;
    if (!node) {
      this.head = new Node(val);
    } else {
      while (node.next) {
        node = node.next;
      }
      node.next = new Node(val);
    }
    return this.size++;
  },
  size: function() {
    return this.size;
  },
  indexOf: function(target) {
    let idx = 0, node = this.head;
    while (node) {
      if (node.value === target) return idx;
      idx++;
      node = node.next;
    }
    return -1;
  },
  elementAt: function(idx) {
    if (idx >= this.size) return undefined;
    let cur = 0, node = this.head;
    while (cur < idx && node) {
      node = node.next;
      cur++;
    }
    return node.value;
  },
  addAt: function(val, idx) {
    if (idx >= this.size) return 'Cannot add to index beyond linked list';
    let cur = 0, node = this.head;
    while (cur < idx - 1) {
      cur++;
      node = node.next;
    }
    let insertedNode = new Node(val);
    insertedNode.next = node.next;
    node.next = insertedNode;
    this.size++;
  },
  removeAt: function(idx) {
    if (idx >= this.size) return 'No element at that index';
    if (idx === 0) {
      this.head = this.head.next;
      return this.size--;
    }
    let cur = 0, node = this.head;
    while (cur < idx - 1) {
      cur++;
      node = node.next;
    }
    node.next = node.next.next;
    return this.size--;
  },
  removeHead: function() {
    this.removeAt(0);
  },
  removeEnd: function() {
    this.removeAt(this.size - 1);
  },
  getMiddle: function() { // we can use this.size, but let's use two pointers instead
    let pointer = this.head, fastPointer = this.head;
    while (fastPointer && fastPointer.next) {
      pointer = pointer.next;
      fastPointer = fastPointer.next.next;
    }
    return pointer.value;
  },
  rotateByKthNode: function(k) {
    // the kth element becomes the head, and the old head is attached to the tail
    let cur = 0, node = this.head, prev;
    while (cur < k) {
      cur++;
      prev = node;
      node = node.next;
    }
    let tail = node;
    while (tail.next) {
      tail = tail.next;
    }
    [this.head, tail.next, prev.next] = [node, this.head, null];
  },
  reverse: function() {
    let curr = this.head, prev = null, next;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}

const ll = new LinkedList();
ll.add(5);
ll.add(3);
ll.add(8);
ll.add(9);
console.log(ll.indexOf(9)); // 3
console.log(ll.elementAt(2)); // 8
console.log(ll.elementAt(3)); // 9
console.log(ll.elementAt(4)); // undefined
console.log(ll.addAt(2, 1)); // so far 5,2,3,8,9
ll.removeAt(2);
ll.add(20);
console.log(ll.getMiddle()); //8
ll.removeHead();
console.log(JSON.stringify(ll, null, 3)); // 2,8,9,20
ll.removeEnd();
console.log(JSON.stringify(ll, null, 3)); // 2,8,9
ll.add(4);
ll.add(1);
ll.add(11);
console.log(JSON.stringify(ll, null, 3)); // 2,8,9,4,1,11
console.log(ll.rotateByKthNode(3));
console.log(JSON.stringify(ll, null, 3)); // 4,1,11,2,8,9
ll.reverse();
console.log(JSON.stringify(ll, null, 3)); // 9,8,2,11,1,4