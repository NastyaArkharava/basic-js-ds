const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.top = null;
    this.last = null;
  }
  
  getUnderlyingList() {
    return this.top;
  }

  enqueue(value) {
    let node = new ListNode(value);

    if (this.top) {
      this.last.next = node;
      this.last = node;
    } else {
      this.top = node;
      this.last = node;
    }
  }

  dequeue() {
    let value = this.top.value;
    this.top = this.top.next;
    return value;
  }
}

module.exports = {
  Queue
};
