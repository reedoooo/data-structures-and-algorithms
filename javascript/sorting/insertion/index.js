
function Insert(array, value) {
  let i = 0;
  let temp = 0;
  while (value > array[i]) {
    i = i + 1;
  }
  while (i < array.length) {
    temp = array[i];
    array[i] = value;
    value = temp;
    i = i + 1;
  }
  array[i] = value;
}

function InsertionSort(array) {
  let sorted = [];
  sorted[0] = array[0];
  for (let i = 1; i < array.length; i++) {
    Insert(sorted, array[i]);
  }
  return sorted;
}

module.exports = {
  InsertionSort,
  Insert,
};
