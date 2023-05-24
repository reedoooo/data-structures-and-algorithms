

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
  }

  static zipLists(list1, list2) {
    let zippedList = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;
    while (current1 || current2) {
      if (current1) {
        zippedList.append(current1.value);
        current1 = current1.next;
      }
      if (current2) {
        zippedList.append(current2.value);
        current2 = current2.next;
      }
    }
    return zippedList;
  }
}

module.exports = LinkedList;

// Let's test this code
// let list1 = new LinkedList();
// list1.append(1);
// list1.append(3);
// list1.append(2);

// let list2 = new LinkedList();
// list2.append(5);
// list2.append(9);
// list2.append(4);

// let zippedList = LinkedList.zipLists(list1, list2);

// let current = zippedList.head;
// while (current) {
//   console.log(current.value);
//   current = current.next;
// }
