function maxProduct(arr) {
  let max1 = (max2 = max3 = Number.NEGATIVE_INFINITY);
  let min1 = (min2 = Number.POSITIVE_INFINITY);

  for (let num of arr) {
    if (num > max1) {
      [max1, max2, max3] = [num, max1, max2];
    } else if (num > max2) {
      [max2, max3] = [num, max2];
    } else if (num > max3) {
      max3 = num;
    }

    if (num < min1) {
      [min1, min2] = [num, min1];
    } else if (num < min2) {
      min2 = num;
    }
  }

  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
}

module.exports = maxProduct;
