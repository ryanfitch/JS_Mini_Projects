//This program checks if the string received as an input is a palindrome and returns true if it is, and false otherwise.

function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  for(var i = 0, len = str.length - 1; i < len/2; i++) {
    if(str[i] !== str[len-i]) {
      return false;
    }
  }
  return true;
}

palindrome("racecar");
//true