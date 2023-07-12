# Code Challenge: Movie Sorting

This code challenge involves writing an algorithm for comparing and sorting movie data. The movie data includes properties such as 'title' and 'year', which can be compared in a specified manner.

## Whiteboard Process

### Comparison()

![Comparison Code](./index.js)

The `comparison` function creates a custom comparator for sorting based on a given property. It also includes specific logic for handling movie titles that begin with articles ('A', 'An', 'The').

### sortYear() and sortTitle()

![Sort Functions Diagram](./sort_functions.jpeg)

These functions utilize the `comparison` function to sort a movie array by year and title, respectively.

## Approach and Efficiency

The approach is to create a general comparison function that can be used in array sort methods. The comparison function takes a property name as an argument and creates a comparator for that property. It includes specific logic for handling titles that start with an article. The time complexity of the array sort method is O(n log n), where n is the number of movies in the array.

## Solution

Here is the JavaScript implementation:

```javascript
'use strict'

const comparison = (property) => (a, b) => {
  // ...
}

const sortYear = (movies) => {
  movies.sort(comparison('year'))
  return movies;
}

const sortTitle = (movies) => {
  movies.sort(comparison('title'))
  return movies;
}

module.exports = {
  sortYear,
  sortTitle,
  comparison
}
```

Test the code using an array of movie data:

```javascript
const Movies = require("./movies")

let sortedByYear = sortYear(Movies);
console.log(sortedByYear);

let sortedByTitle = sortTitle(Movies);
console.log(sortedByTitle);
```
