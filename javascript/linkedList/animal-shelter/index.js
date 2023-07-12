'use strict';

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
}
class AnimalShelter {
  constructor() {
    this.dogs = [];
    this.cats = [];
  }
  enqueue(animal) {
    if (animal.species === 'dog') {
      this.dogs.push(animal);
    } else if (animal.species === 'cat') {
      this.cats.push(animal);
    }
  }
  dequeue(pref) {
    if (pref === 'dog') {
      return this.dogs.length > 0 ? this.dogs.shift() : null;
    } else if (pref === 'cat') {
      return this.cats.length > 0 ? this.cats.shift() : null;
    } else {
      return null;
    }
  }
}


module.exports = {Animal, AnimalShelter};
