'use strict';

const removeLeadingArticles = (title) => {
  const articles = ['The ', 'An ', 'A '];
  for (const article of articles) {
    if (title.startsWith(article)) {
      return title.slice(article.length);
    }
  }
  return title;
};

const comparison = (property) => (a, b) => {
  if (property === 'title') {
    const aTitle = removeLeadingArticles(a.title);
    const bTitle = removeLeadingArticles(b.title);
    if (aTitle < bTitle) return -1;
    if (aTitle > bTitle) return 1;
    return 0;
  }
  if (a[property] < b[property]) return -1;
  if (a[property] > b[property]) return 1;
  return 0;
};

const sortYear = (movies) => {
  movies.sort(comparison('year'));
  return movies;
};

const sortTitle = (movies) => {
  movies.sort(comparison('title'));
  return movies;
};

module.exports = {
  sortYear,
  sortTitle,
  comparison,
};
