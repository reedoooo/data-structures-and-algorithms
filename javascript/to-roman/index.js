function convertToRoman(num) {
  let dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let rom = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let result = "";

  for (let i = 0; i < dec.length; i++) {
    while (num >= dec[i]) {
      result += rom[i];
      num -= dec[i];
    }
  }

  return result;
}

convertToRoman(36);

module.exports = convertToRoman;
