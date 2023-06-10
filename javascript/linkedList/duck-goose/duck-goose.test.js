const DuckDuckGoose = require('./index'); // Assuming the code is in a separate file

describe('DuckDuckGoose', () => {
  test('should return the correct winner with a small number of people', () => {
    const people = ["Alice", "Bob", "Charlie", "David", "Eve"];
    const k = 3;
    const winner = DuckDuckGoose(people, k);
    expect(winner).toEqual("David");
  });

  test('should return the correct winner with a larger number of people', () => {
    const people = ["John", "Jane", "Michael", "Emily", "Adam", "Sophia", "Oliver", "Isabella", "Daniel"];
    const k = 5;
    const winner = DuckDuckGoose(people, k);
    expect(winner).toEqual("Sophia");
  });

  test('should return the only person as the winner with a single person', () => {
    const people = ["Alice"];
    const k = 2;
    const winner = DuckDuckGoose(people, k);
    expect(winner).toEqual("Alice");
  });

  test('should return the correct winner with k = 1 (no elimination)', () => {
    const people = ["John", "Jane", "Michael", "Emily"];
    const k = 1;
    const winner = DuckDuckGoose(people, k);
    expect(winner).toEqual("Emily");
  });

  test('should return undefined with an empty array of people', () => {
    const people = [];
    const k = 3;
    const winner = DuckDuckGoose(people, k);
    expect(winner).toBeUndefined();
  });
});
