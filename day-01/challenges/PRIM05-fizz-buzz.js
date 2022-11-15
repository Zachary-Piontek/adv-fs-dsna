// Fizz Buzz
// ---

// Classic code challenge problem

// ## Challenge

// Write a function that takes a positive integer `n`, and returns an array that contains, in order, all of the numbers from `1` to `n`. But for multiples of three (evenly divisible by three) print “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.


// ```js
function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz');
    }
    else if (i % 3 === 0) {
      console.log('fizz');
    }
    else if (i % 5 === 0) {
      console.log('buzz');
    }
    else {
      console.log(i);
    }
  }
}

fizzBuzz();

// ```

// > **You can assume valid input**

// ## Test Cases

// ### Input

// `16`

// ### Output

// ```js
// [
//   1, 2, 'Fizz', 4, 'Buzz', 
//   'Fizz', 7, 8, 'Fizz', 'Buzz', 
//   11, 'Fizz', 13, 14, 'FizzBuzz', 
//   16
// ]
// ```
