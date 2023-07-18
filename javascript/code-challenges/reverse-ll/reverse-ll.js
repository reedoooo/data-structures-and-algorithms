'use strict';

// Require the linked list implementation
const {LinkedList} = require('../../linkedList/linked-list/index');


/*
  Accept a linked list
  Reveres it
  Return it
*/
const reverse = (list) => {
  if(!(list instanceof LinkedList)) throw new Error('Input must be a linked list');

  let current = list.head;
  let previous = null;
  let next;

  while(current){
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  list.head = previous;

  return list;
};

module.exports = {reverse};
