//This program reverses a string by using a decrementing for-loop with concatenation.


function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}
reverse("Is The String Reversed?");