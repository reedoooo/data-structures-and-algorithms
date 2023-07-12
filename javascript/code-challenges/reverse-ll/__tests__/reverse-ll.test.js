'use strict';

const {reverse} = require('../reverse-ll');

'use strict';

const {LinkedList} = require('../../../linkedList/linked-list/index');

describe('Reverse', () => {
  it('works', () => {
    const list = new LinkedList();
    list.insert(1).insert(2).insert(3);

    const reversedList = reverse(list);

    expect(reversedList.head.value).toEqual(1);
    expect(reversedList.head.next.value).toEqual(2);
    expect(reversedList.head.next.next.value).toEqual(3);
    expect(reversedList.head.next.next.next).toBeNull();
  });
});

