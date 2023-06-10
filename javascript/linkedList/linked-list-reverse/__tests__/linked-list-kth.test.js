const { reverseLinkedList, ListNode } = require("./path_to_your_file"); // replace with the actual path

describe("Testing reverseLinkedList function", () => {
  test("Reversing a normal list", () => {
    const node4 = new ListNode(4);
    const node3 = new ListNode(3, node4);
    const node2 = new ListNode(2, node3);
    const node1 = new ListNode(1, node2);
    const reversedHead = reverseLinkedList(node1);
    expect(reversedHead.val).toBe(4);
    expect(reversedHead.next.val).toBe(3);
    expect(reversedHead.next.next.val).toBe(2);
    expect(reversedHead.next.next.next.val).toBe(1);
  });

  test("Reversing a list with single node", () => {
    const node1 = new ListNode(1);
    const reversedHead = reverseLinkedList(node1);
    expect(reversedHead.val).toBe(1);
    expect(reversedHead.next).toBeNull();
  });

  test("Reversing an empty list", () => {
    const reversedHead = reverseLinkedList(null);
    expect(reversedHead).toBeNull();
  });
});
