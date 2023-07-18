const LinkedList = require('../index'); // adjust the path according to your file structure

describe('LinkedList', () => {
  test('should append value to the list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    let current = list.head;
    expect(current.value).toEqual(1);
    current = current.next;
    expect(current.value).toEqual(2);
    current = current.next;
    expect(current.value).toEqual(3);
  });

  test('should return a zipped list from two lists', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(2);

    const list2 = new LinkedList();
    list2.append(5);
    list2.append(9);
    list2.append(4);

    const zippedList = LinkedList.zipLists(list1, list2);
    let current = zippedList.head;

    expect(current.value).toEqual(1);
    current = current.next;
    expect(current.value).toEqual(5);
    current = current.next;
    expect(current.value).toEqual(3);
    current = current.next;
    expect(current.value).toEqual(9);
    current = current.next;
    expect(current.value).toEqual(2);
    current = current.next;
    expect(current.value).toEqual(4);
  });
});
