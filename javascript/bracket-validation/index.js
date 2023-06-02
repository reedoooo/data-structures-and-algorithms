'use strict';

function validateBrackets(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (stack.length === 0) {
        return false;
      } else if (char === ')' && stack[stack.length - 1] === '(') {
        stack.pop();
      } else if (char === ']' && stack[stack.length - 1] === '[') {
        stack.pop();
      } else if (char === '}' && stack[stack.length - 1] === '{') {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}


module.exports = {validateBrackets};
