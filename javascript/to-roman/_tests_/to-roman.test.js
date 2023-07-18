const convertToRoman = require('../index'); // adjust the path to your actual file

test('converts integers to roman numerals', () => {
    expect(convertToRoman(2023)).toBe("MMXXIII");
    expect(convertToRoman(1987)).toBe("MCMLXXXVII");
    expect(convertToRoman(1)).toBe("I");
    expect(convertToRoman(4000)).toBe("MMMM");
});

test('returns empty string for 0', () => {
    expect(convertToRoman(0)).toBe("");
});

test('throws error for negative integers', () => {
    expect(() => {
        convertToRoman(-1);
    }).toThrow('Invalid input');
});
