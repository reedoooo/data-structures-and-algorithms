const Stack = require('../index');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack(1);
  });

  it('should create a stack with a value', () => {
    expect(stack.top.value).toBe(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it('should push a new value', () => {
    stack.push(2);
    expect(stack.top.value).toBe(2);
  });

  it('should pop a value', () => {
    stack.push(2);
    const poppedNode = stack.pop();
    expect(poppedNode.value).toBe(2);
    expect(stack.top.value).toBe(1);
  });

  it('should throw an error when popping an empty stack', () => {
    stack.pop();
    expect(() => {
      stack.pop();
    }).toThrowError("Stack is empty");
  });

  it('should return the top value when peeking', () => {
    expect(stack.peek()).toBe(1);
  });

  it('should throw an error when peeking an empty stack', () => {
    stack.pop();
    expect(() => {
      stack.peek();
    }).toThrowError("Stack is empty");
  });

  it('should return true when checking if empty', () => {
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
});
