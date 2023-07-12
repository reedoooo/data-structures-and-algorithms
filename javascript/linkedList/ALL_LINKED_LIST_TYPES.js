// **1. LinkedList Constructor**
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(headValue) {
    this.head = headValue ? new Node(headValue) : null;
  }
}

// **2. Insert**
class LinkedList {
  //...
  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
}

// **3. Append**
class LinkedList {
  //...
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}

// **4. InsertBefore**
class LinkedList {
  //...
  insertBefore(searchValue, newValue) {
    const newNode = new Node(newValue);

    if (!this.head) {
      throw new Error("List is empty");
    }

    if (this.head.value === searchValue) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== searchValue) {
      current = current.next;
    }

    if (current.next) {
      newNode.next = current.next;
      current.next = newNode;
    } else {
      throw new Error("Value not found");
    }
  }
}

// **5. InsertAfter**
class LinkedList {
  //...
  insertAfter(searchValue, newValue) {
    const newNode = new Node(newValue);

    let current = this.head;
    while (current && current.value !== searchValue) {
      current = current.next;
    }

    if (current) {
      newNode.next = current.next;
      current.next = newNode;
    } else {
      throw new Error("Value not found");
    }
  }
}

// **6. Includes**
class LinkedList {
  //...
  includes(searchValue) {
    let current = this.head;
    while (current) {
      if (current.value === searchValue) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

// **7. kthFromEnd**
class LinkedList {
  //...
  kthFromEnd(k) {
    let slowPointer = this.head;
    let fastPointer = this.head;

    for (let i = 0; i < k; i++) {
      if (fastPointer === null) {
        return null; // k is greater than linked list length
      }
      fastPointer = fastPointer.next;
    }

    while (fastPointer && fastPointer.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next;
    }

    if (fastPointer === null) {
      return null; // k is equal to linked list length
    }

    return slowPointer.value;
  }
}

// **8. toString**
class LinkedList {
  //...
  toString() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.value + " -> ";
      current = current.next;
    }
    str += "NULL";
    return str;
  }
}

// **9. zipLists**
class LinkedList {
  //...
  static zipLists(list1, list2) {
    const zippedList = new LinkedList();

    let list1Pointer = list1.head;
    let list2Pointer = list2.head;

    while (list1Pointer || list2Pointer) {
      if (list1Pointer) {
        zippedList.append(list1Pointer.value);
        list1Pointer = list1Pointer.next;
      }

      if (list2Pointer) {
        zippedList.append(list2Pointer.value);
        list2Pointer = list2Pointer.next;
      }
    }

    return zippedList;
  }
}
