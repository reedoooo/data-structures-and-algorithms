// Description: Tests for LinkedList class
const LinkedList = require('../index');
describe('LinkedList', () => {
  test('initial LinkedList is empty', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
    expect(list.toString()).toBe('NULL');
  });

  test('insert inserts at the beginning of the list', () => {
    const list = new LinkedList();
    list.insert(2);
    expect(list.head.value).toBe(2);
    list.insert(1);
    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
    expect(list.toString()).toBe('{ 1 } -> { 2 } -> NULL');
  });

  test('includes returns true if value is in list, false otherwise', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.includes(2)).toBe(true);
    expect(list.includes(5)).toBe(false);
  });

  test('toString returns formatted string representation of list', () => {
    const list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });
});
