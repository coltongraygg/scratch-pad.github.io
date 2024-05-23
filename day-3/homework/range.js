// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */

/* 
I: FUNCTION RECEIVES TWO NUMERICAL VALUES
O: FUNCTION OUTPUTS ALL INTERGERS INBETWEEN THE TWO NUMERICAL VALUES, IF NUM 1 > NUM 2 - REVERSE ORDER
C: FUNCTION EXPECTS TO RECEIVE 2 NUMERICAL VALUES
E: N/A
*/

function range(start, end) {
    // YOUR CODE GOES BELOW HERE //

    // create storageArr 
    let storageArr = []; 

    // create if statement: start param is <= end param 
    if (start <= end) {
        // while state param is <= end param, loop
        while (start <= end) {
            // push start to storageArr
            storageArr.push(start);
            // increase the numerical value of start by 1
            start++;
        }
        // create else if statement: start param is >= end param
        } else if (start >= end) {
            // while start param is >= end param, loop
            while (start >= end) {
                // push start to storageArr
                storageArr.push(start);
                // decrease the numerical value of start by 1
                start--;
            }
        // return the storageArr
        } return storageArr

  
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}