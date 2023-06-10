const {Animal, AnimalShelter} = require('./animal-shelter.js');

test('Test enqueue function', () => {
  let shelter = new AnimalShelter();
  let dog = new Animal('Rover', 'dog');
  let cat = new Animal('Mittens', 'cat');
  shelter.enqueue(dog);
  shelter.enqueue(cat);
  expect(shelter.dogs[0]).toBe(dog);
  expect(shelter.cats[0]).toBe(cat);
});

test('Test dequeue function with preference', () => {
  let shelter = new AnimalShelter();
  let dog = new Animal('Rover', 'dog');
  let cat = new Animal('Mittens', 'cat');
  shelter.enqueue(dog);
  shelter.enqueue(cat);
  expect(shelter.dequeue('dog')).toBe(dog);
  expect(shelter.dequeue('cat')).toBe(cat);
});

test('Test dequeue function without preference', () => {
  let shelter = new AnimalShelter();
  expect(shelter.dequeue('bird')).toBeNull();
});

test('Test dequeue from empty shelter', () => {
  let shelter = new AnimalShelter();
  expect(shelter.dequeue('dog')).toBeNull();
  expect(shelter.dequeue('cat')).toBeNull();
});

test('Test enqueue null animal', () => {
  let shelter = new AnimalShelter();
  let nullAnimal = new Animal(null, null);
  shelter.enqueue(nullAnimal);
  expect(shelter.dequeue('dog')).toBeNull();
  expect(shelter.dequeue('cat')).toBeNull();
});
