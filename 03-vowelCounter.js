/*

Write a function that, given a string, returns the number of vowels in that string.

We will consider that a, e, i, o and u are vowels for the sake of this problem.

Ex:

vowelCounter("Banana")
--> Returns 3
vowelCounter("Hawaii")
--> Returns 4

 */

  const vowelCounter= str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;

vowelCounter("Banana");

// console.log(vowelCounter("Banana"))

