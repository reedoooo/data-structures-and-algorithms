'use strict'

// const Movies = require("./movies") 

const comparison = (property) => (a, b) => {

  if (property === 'title') {
    let aTitle = a.title;
    let bTitle = b.title;

    if (aTitle.match(/(The )/)) {
      aTitle = aTitle.slice(4);
    }

    if (bTitle.match(/(The )/)) {
      bTitle = bTitle.slice(4);
    }

    if (aTitle.match(/(An )/)) {
      aTitle = aTitle.slice(3);
    }

    if (bTitle.match(/(An )/)) {
      bTitle = bTitle.slice(3);
    }

    if (aTitle.match(/(A )/)) {
      aTitle = aTitle.slice(2);
    }

    if (bTitle.match(/(A )/)) {
      bTitle = bTitle.slice(2);
    }

    if (aTitle < bTitle) {
      return -1
    }
    else if (aTitle > bTitle) {
      return 1
    }
    else {
      return 0
    }
  } else {
    if (a[property] < b[property]) {
      return -1
    }
    else if (a[property] > b[property]) {
      return 1
    }
    else {
      return 0
    }    
  }
}

const sortYear = (movies) => {

  movies.sort(comparison('year'))

  // movies.sort((a, b) => {
  //   if (a.year > b.year) {
  //     return -1
  //   }
  //   else if (a.year < b.year) {
  //     return 1
  //   }
  //   else {
  //     return 0
  //   }
  // })

  return movies;
}

const sortTitle = (movies) => {
  movies.sort(comparison('title'))

  // movies.sort((a, b) => {
  //   let aTitle = a.title;
  //   let bTitle = b.title;

  //   if (aTitle.match(/(The )/)) {
  //     aTitle = aTitle.slice(4);
  //   }

  //   if (bTitle.match(/(The )/)) {
  //     bTitle = bTitle.slice(4);
  //   }

  //   if (aTitle.match(/(An )/)) {
  //     aTitle = aTitle.slice(3);
  //   }

  //   if (bTitle.match(/(An )/)) {
  //     bTitle = bTitle.slice(3);
  //   }

  //   if (aTitle.match(/(A )/)) {
  //     aTitle = aTitle.slice(2);
  //   }

  //   if (bTitle.match(/(A )/)) {
  //     bTitle = bTitle.slice(2);
  //   }

  //   if (aTitle < bTitle) {
  //     return -1
  //   }
  //   else if (aTitle > bTitle) {
  //     return 1
  //   }
  //   else {
  //     return 0
  //   }
  // })

  return movies;
}

// sortYear(Movies);
// console.log(Movies);
// sortTitle(Movies);
// console.log(Movies);

module.exports = {
  sortYear,
  sortTitle,
  comparison
}