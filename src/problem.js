function isPalindrome(str) {
    const clearString = str.replace(/[\W_]/g, '').toLowerCase();
    const reverStr = clearString.split('').reverse().join('');
    return clearString === reverStr;
  }
  

  console.log(isPalindrome("level"));
  console.log(isPalindrome("hello"));
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true