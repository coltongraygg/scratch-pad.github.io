// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

/*
I: FUNCTION DOES NOT RECEIVE AN INPUT
O: FUNCTION OUTPUTS NUMBERS 1-100, FOR MULTIPLES OF THREE IT PRINTS 'FIZZ' INSTEAD OF THE
   NUMBER, FOR MULTIPLES OF FIVE IT PRINTS 'BUZZ', AND FOR NUMBERS THAT ARE MULTIPLES
   OF BOTH THREE AND FIVE IT PRINTS 'FIZZBUZZ'
C: N/A
E: N/A
*/

function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    for (var i = 1; i <= 100; i++) {  // create for loop to iterate through numbers
        if (i % 5 === 0 && i % 3 === 0) { // create if statement to check multiples of 5 & 3
            console.log('FizzBuzz'); // log 'FizzBuzz' to console
        } else if (i % 3 === 0) {  // check for multiples of 3
            console.log('Fizz'); // log fizz to the console
        } else if (i % 5 === 0) { // check for multiples of 5
            console.log('Buzz') // log to console
        } else {  // grab the numbers that don't apply to the above
            console.log(i); // log the number to the console
        }
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}