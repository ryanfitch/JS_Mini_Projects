// Fizzbuzz! is a program that prints the numbers from 1 to n... 
// but for multiples of x it prints F, for multiples of y it prints B, 
// and for multiples of x & y it prints FB.

var key = "";

function Fizzbuzz (x, y, n) {
	for (var i = 1; i <= n; i++) {
		if (i % x === 0 && i % y === 0) {
			key += "FB ";
		} else if (i % y === 0) {
				key += "B ";
			} else if (i % x === 0) {
				key += "F ";
			} else {
				key += i + " ";
			}
	}
	console.log(key);
}

Fizzbuzz(3, 5, 75);