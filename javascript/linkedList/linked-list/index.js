// This class represents a Node in a linked list
class Node {
  // Node constructor has two properties: value and next
  // value holds the data and next is a pointer which points to the next node in the list
  constructor(value, next = null) {
    this.value = value; // Node's value/data
    this.next = next; // Pointer to the next Node
  }
}

// This class represents a singly linked list
class LinkedList {
  // LinkedList constructor creates an empty list with the head initially pointing to null
  constructor() {
    this.head = null; // The head of the LinkedList
  }

  // insert method is for inserting a new node at the beginning of the list
  insert(value) {
    let node = new Node(value); // Create new Node
    if (this.head !== null) {
      // If list isn't empty
      node.next = this.head; // Set the new Node's next to current head
    }
    this.head = node; // Set new Node as head of the list
  }

  // includes method checks if a value is in the linked list
  includes(value) {
    let currentNode = this.head; // Start at the head of the list
    while (currentNode !== null) {
      // While not at the end of the list
      if (currentNode.value === value) {
        // If the current Node's value matches the searched value
        return true; // Value found, return true
      }
      currentNode = currentNode.next; // Move to the next Node
    }
    return false; // If the end of the list is reached without finding the value, return false
  }

  // toString method returns a string representation of the linked list
  toString() {
    let values = []; // Initialize an empty array to hold Node values
    let currentNode = this.head; // Start at the head of the list
    while (currentNode !== null) {
      // While not at the end of the list
      values.push(`{ ${currentNode.value} }`); // Add the current Node's value to the values array
      currentNode = currentNode.next; // Move to the next Node
    }
    values.push("NULL"); // At the end of the list, add "NULL"
    return values.join(" -> "); // Join the values with " -> " and return the result
  }
}

// Export the LinkedList and Node classes for use in other files
module.exports = { LinkedList, Node };
