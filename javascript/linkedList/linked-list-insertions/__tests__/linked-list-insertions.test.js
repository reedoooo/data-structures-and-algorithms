// Run: yarn jest linked-list-insertions
const LinkedList = require('../index');

test('LinkedList operations', () => {
  let ll = new LinkedList();
  ll.append(1);
  ll.append(3);
  ll.append(2);

  ll.insertBefore(3, 5);
  expect(ll.head.next.value).toBe(5);

  ll.insertAfter(3, 6);
  expect(ll.head.next.next.next.value).toBe(6);

  ll.delete(5);
  expect(ll.head.next.value).toBe(3);

  // Test cases for inserting before first node, inserting after last node, adding multiple nodes etc.
});

