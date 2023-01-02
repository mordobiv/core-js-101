function isBracketsBalanced(str) {
  const openingBrackets = ['[', '(', '{', '<'];
  const closingBrackets = [']', ')', '}', '>'];

  const bracketsArr = str.split('');
  for (let i = 0; i < bracketsArr.length; i += 1) {
    if (closingBrackets.includes(bracketsArr[i])) {
      if (i - 1 >= 0 && openingBrackets
        .indexOf(bracketsArr[i - 1]) === closingBrackets.indexOf(bracketsArr[i])) {
        bracketsArr.splice(i - 1, 2);
        i -= 2;
      } else return false;
    }
  }
  return bracketsArr.length ? false : true;
}

const strToCheck = '[[]';
console.log(isBracketsBalanced(strToCheck));
