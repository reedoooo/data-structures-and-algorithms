'use strict';

function DuckDuckGoose(people, k) {
  const queue = [];
  for (const person of people) {
    queue.push(person);
  }
  while (queue.length > 1) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
  }
  return queue[0];
}


module.exports = {DuckDuckGoose};
