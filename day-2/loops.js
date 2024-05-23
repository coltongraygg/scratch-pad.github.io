// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */


/* 
I: FUNCTION INPUTS AN ARRAY 
O: FUNCTION OUTPUTS THE VALUE FROM EACH INDEX IN THE ARRAY
C: FUNCTION EXPECTS AN ARRAY AS THE PARAM
E: N/A
*/


function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // for loop to iterate over array
  for (var i = 0; i < array.length; i++) {
    // log to console
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */

/* 
I: FUNCTION INPUTS AN ARRAY
O: FUNCTION RETURNS THE VALUE OF EACH INDEX IN THE ARRAY IN REVERSE
C: FUNCTION EXPECTS AN ARRAY AS THE PARAM
E: N/A
*/


function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //

  // for loop to iterate over the array in reverse
  for (var i = array.length -1; i >= 0; i--)
    // log to console
  console.log(array[i]);
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */

/*
I: AN OBJECT IS INPUT INTO THE FUNCTION
O: FUNCTION RETURNS AN ARRAY CONTAINING OBJECT KEYS
C: FUNCTION EXPECTS TO RECEIVE AN OBJECT WITH KEYS
E: N/A
*/


function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // create storage array
  var resultArray = [];
  // loop through the keys in object
  for (var key in object) {
    resultArray.push(key); // push the keys into the resultArray
  }
  return resultArray; // return resultArray array
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */


/* 
I: FUNCTION RECEIVES AN OBJECT 
O: FUNCTION PRINTS THE KEYS TO THE CONSOLE
C: FUNCTION EXPECTS TO RECEIVE AN OBJECT WITH KEYS
E: N/A
*/


function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // create for in loop
  for (var key in object) {
    // log the key in object
    console.log(key);
  }
  return; 

  // YOUR CODE ABOVE HERE //
}

/*
I: FUNCTION RECEIVES AN OBJECT AS THE PARAMETER
O: FUNCTION OUTPUTS AN ARRAY CONTAINING THE OBJECT'S VALUES
C: FUNCTION EXPECTS TO RECEIVE AN OBJECT WITH VALUES
E: N/A
*/


/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // create an empty storage array
  let storageArr = [];
  // iterate over the object
  for (var key in object) {
    // push the object values into storageArr
    storageArr.push(object[key]);
  }
  return storageArr;  // return storageArr
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */

/*
I: FUNCTION RECEIVES AN OBJECT
O: FUNCTION OUTPUTS THE OBJECTS VALUES AND PRINTS TO CONSOLE
C: FUNCTION EXPECTS AN OBJECT WITH VALUES
E: N/A
*/

function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // iterate through the object
  for (var key in object) {
    // print the values to console
    console.log(object[key]);
  }
  return; // return the function
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */

/* 
I: FUNCTION RECEIVES AN OBJECT
O: FUNCTION OUTPUTS THE NUMBER OF KEY VALUE PAIRS STORED IN THE OBJECT
C: FUNCTION EXPECTS TO RECEIVE AN OBJECT WITH KEY VALUE PAIRS
E: N/A
*/

function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // create a count variable to keep track of how many key/value pairs are in object
  let count = 0;
  // iterate over the object
  for (var key in object) {
    // if object has key add 1 numerical data value to the count
    if (object.hasOwnProperty(key)) {
      count++;
    }
  }
return count; // return the final count when function has executed to completion
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */



function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // create storage array
  let storage = [];
  // iterate through the object
  for (var key in object) {
    // push the key into storage array
    storage.push(object[key]);
  }

  // loop through the new storage array in reverse
  for (var i = storage.length -1; i >= 0; i--) {
    // log the current index of the array to console
    console.log(storage[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}