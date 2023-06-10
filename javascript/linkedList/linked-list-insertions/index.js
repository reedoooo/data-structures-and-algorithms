// Define a Node class, a basic unit of a LinkedList
class Node {
  // Each Node instance has a value and a next property pointing to the next Node
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Define a LinkedList class
class LinkedList {
  constructor() {
    // The head of the LinkedList initially points to null
    this.head = null;
  }

  // Method to insert a node at the beginning of the LinkedList
  insert(value) {
    let node = new Node(value);
    if (this.head !== null) {
      node.next = this.head; // If LinkedList is not empty, make the new node point to the current head
    }
    this.head = node; // Make the new node the head
  }

  // Method to append a node at the end of the LinkedList
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      // If the list is empty, make the new node the head
      this.head = node;
    } else {
      let current = this.head;
      // Traverse through the list to find the last node
      while (current.next) {
        current = current.next;
      }
      // Make the last node's next property point to the new node
      current.next = node;
    }
  }

  // Method to insert a node before a given value
  insertBefore(value, newVal) {
    let node = new Node(newVal);
    if (!this.head) {
      throw new Error("The linked list is empty");
    } else if (this.head.value === value) {
      node.next = this.head; // If the given value is at the head, insert the new node before the head
      this.head = node; // Make the new node the new head
    } else {
      let current = this.head;
      // Traverse through the list until we find the given value or reach the end
      while (current.next && current.next.value !== value) {
        current = current.next;
      }
      if (!current.next) {
        throw new Error("Value not found in the linked list");
      }
      // Insert the new node before the node with the given value
      node.next = current.next;
      current.next = node;
    }
  }

  // Method to insert a node after a given value
  insertAfter(value, newVal) {
    let node = new Node(newVal);
    if (!this.head) {
      throw new Error("The linked list is empty");
    } else {
      let current = this.head;
      // Traverse through the list until we find the given value or reach the end
      while (current && current.value !== value) {
        current = current.next;
      }
      if (!current) {
        throw new Error("Value not found in the linked list");
      }
      // Insert the new node after the node with the given value
      node.next = current.next;
      current.next = node;
    }
  }

  // Method to delete a node with a given value
  delete(value) {
    if (!this.head) {
      throw new Error("The linked list is empty");
    } else if (this.head.value === value) {
      // If the node to delete is the head, make the next node the new head
      this.head = this.head.next;
    } else {
      let current = this.head;
      // Traverse through the list until we find the given value or reach the end
      while (current.next && current.next.value !== value) {
        current = current.next;
      }
      if (!current.next) {
        throw new Error("Value not found in the linked list");
      }
      // Make the current node's next property skip the node to be deleted
      current.next = current.next.next;
    }
  }
}

module.exports = LinkedList;
