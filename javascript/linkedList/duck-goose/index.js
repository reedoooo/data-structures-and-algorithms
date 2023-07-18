'use strict';

function duckDuckGoose(people, k) {
  const queue = [...people];
  while (queue.length > 1) {
    let count = k;
    while (count > 1) {
      queue.push(queue.shift());
      count--;
    }
    queue.shift(); // person is removed here
  }
  return queue[0];
}

module.exports = { duckDuckGoose };

