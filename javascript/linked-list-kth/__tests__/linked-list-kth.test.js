const { findKthFromEnd, Node, LinkedList } = require('../index'); // Assuming your implementation is in a separate file

describe('findKthFromEnd', () => {
  test('should return the correct value for a valid k', () => {
    // Create a linked list: 1 -> 3 -> 8 -> 2
    const ll = new LinkedList();
    ll.head = new Node(1);
    ll.head.next = new Node(3);
    ll.head.next.next = new Node(8);
    ll.head.next.next.next = new Node(2);

    expect(findKthFromEnd(ll.head, 0)).toBe(2);
    expect(findKthFromEnd(ll.head, 2)).toBe(3);
  });

  test('should return null for k greater than the length of the list', () => {
    const ll = new LinkedList();
    ll.head = new Node(1);

    expect(findKthFromEnd(ll.head, 2)).toBeNull();
  });

  test('should return null for an empty list', () => {
    expect(findKthFromEnd(null, 3)).toBeNull();
  });

});

