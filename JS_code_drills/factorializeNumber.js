//This program returns the factorial of the provided integer.  If the 
//interger is represented with the letter n, a factorial is the product 
//of all positive integers less than or equal to n.

function factorialize(n) {
  if (n === 0) { return 1; }
  return n * factorialize(n-1);
}

factorialize(8);

//equals 40320