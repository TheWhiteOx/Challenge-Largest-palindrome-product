/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;


  function isPalindrome(number) {
    let num = number.toString()
    return num === num.split('').reverse().join('');
  }

  function findMaxNum(digits) {
    let result = '';
    for (let i = 0; i < digits; i++) {
      result = result + '9'
    }
    return parseInt(result);
  }

  var maxNum = findMaxNum(digits);


  // Brute force through all possible numbers
  for (let i = maxNum; i > 0; i--) {
    for (let j = maxNum; j > 0; j--) {
      let product = i * j;
      if (isPalindrome(product)) {
        if (palindromeNumber < product) {
          factor_0 = i;
          factor_1 = j;
          palindromeNumber = product;
        }
      }
    }
  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};