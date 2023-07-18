'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(headValue) {
    this.head = new Node(headValue);
  }

  // returns a string of the entire linked list's contents
  toString = () => {
    let listValueArr = [];
    let currentNode = this.head;
    while(currentNode) {
      listValueArr.push(currentNode.value)
      currentNode = currentNode.next
    }
    let listString = listValueArr.join(' -> ').toString();
    return `${listString} -> NULL`
  }

  // iterates through the list and attempts to find a value to return, if no value is found returns null
  includes = (searchValue) => {
    let currentNode = this.head;
    while (currentNode) {
      // by stringifying the currentNode.value and searchValue we are also able to compare objects
      if (JSON.stringify(currentNode.value) === JSON.stringify(searchValue)) {
        return true;
      } else if (currentNode.next) {
        currentNode = currentNode.next
      } else return false;
    }
  }

  // adds a node to the end of the list
  append = (newValue) => {
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.next === null) {
        currentNode.next = new Node(newValue);
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  // inserts a new node to the beginning of the list (replaces head, moves previous head + all other nodes 1 position down the list)
  insert = (newHeadValue) => {
    let newList = new LinkedList(newHeadValue);
    newList.head.next = this.head;
    this.head = newList.head;
  }

  insertBefore = (searchValue, newValue) => {
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.next.value === searchValue) {
        let ogNext = currentNode.next;
        currentNode.next = new Node(newValue);
        currentNode.next.next = ogNext;
        break;
      } else if (currentNode.next === null) {
        console.log('Cannot insert before, no value found')
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  insertAfter = (searchValue, newValue) => {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === searchValue) {
        let ogNext = currentNode.next;
        currentNode.next = new Node(newValue);
        currentNode.next.next = ogNext;
        break;
      } else if (currentNode.next === null) {
        console.log('Cannot insert after, end of list')
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  kthFromEnd = (k) => {
    let travelLength = 0;
    let currentNode = this.head;

    while(currentNode) {
      if(currentNode.next !== null) {
        travelLength++;
        currentNode = currentNode.next;
      } else {
        break;
      }
    }

    if (travelLength < k || k < 0) {
      return null;
    }
    // else if (k === travelLength || travelLength === 0) {
    //   return this.head.value;
    // }

    travelLength = travelLength - k;
    currentNode = this.head;

    while(travelLength !== 0) {
      currentNode = currentNode.next;
      travelLength--;
    }

    return currentNode.value;
  }

}

module.exports = {LinkedList, Node};
