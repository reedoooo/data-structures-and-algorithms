'use strict'

const {LinkedList, Node} = require('../index')

class Stack extends LinkedList {
  constructor(value){
    super();
    this.top = new Node(value);
  }

  push = (newValue) => {
    if (this.isEmpty()){
      this.top = new Node(newValue);
    } else {
      let newTop = new Node(newValue);
      newTop.next = this.top;
      this.top = newTop;
    }
  }

  pop = () => {
    if (this.isEmpty()) {
      throw new Error('Stack is empty')
    } else {
      let poppedTop = this.top;
      this.top = this.top.next;
      poppedTop.next = null;
      return poppedTop;
    }

  }

  peek = () => {
    if (this.isEmpty()) {
      throw new Error('Stack is empty')
    }
    return this.top.value;
  }

  isEmpty = () => {
    if (!this.top || !this.top.value) {
      return true;
    } else return false;
  }

}

module.exports = Stack;
