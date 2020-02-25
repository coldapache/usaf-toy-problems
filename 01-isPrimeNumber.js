/*

Given a number, return true if it is a prime number, and false if it is not.

A prime number is a number that can be divided by itself and 1 ONLY. To learn more: https://en.wikipedia.org/wiki/Prime_number

Example:

isPrimeNumber(2);
--> Returns true

isPrimeNumber(16);
--> Returns false

isPrimeNumber(67);
--> Returns true

*/

var isPrimeNumber = function(num) {
<<<<<<< HEAD
  // Group Sourced Solution
  for (var i = 2; i <= (num - 1); i++ ) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
=======
  if (num === 1) {
    return false;
  }
  else if (num === 2) {
    return true;
  }else
    {
      for (var x = 2; x < num; x++)
      {
        if(num % x === 0)
        {
          return false;
        }

      }
      return true;
    }
>>>>>>> 6dbc1b3c6b6ba6642c2c338611e050e8e6fd9158
};

// // Uncomment and copy into Chrome dev console to test your function! (One line at a time!)
console.log(isPrimeNumber(2)); // true
console.log(isPrimeNumber(60)); // false
console.log(isPrimeNumber(611953)); // true
