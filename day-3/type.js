// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */

/*
I: FUNCTION RECEIVES A DATATYPE AS PARAMETER
O: FUNCTION RETURNS TRUE IF THE INPUT PARAM IS AN ARRAY, FALSE OTHERWEISE
C: FUNCTION EXPECTS TO RECEIVE A DATA TYPE IN THE PARAM
E: N/A
*/


function isArray(value) {
    // YOUR CODE BELOW HERE //
    // Return boolean value using Array.isArray() 
    return Array.isArray(value);
    
    // YOUR CODE ABOVE HERE //
}
/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 *  *HINT* LOOK UP HOW TO FIGURE OUT IF SOMETHING IS AN INSTANCE OF THE DATE OBJECT
 * 
 */

/*
I: FUNCTION RECEIVES A DATA TYPE AS THE PARAM
O: FUNCTION OUTPUTS A BOOLEAN VALUE DEPENDING ON IF THE DATA IN PARAM IS AN OBJECT
C: FUNCTION EXPECTS A DATA TYPE AS THE PARAM
E: N/A
*/


function isObject(value) {
    // YOUR CODE BELOW HERE //
    return typeof value === 'object' && // Return boolean value if value is an object and...
    value !== null && // value is not null and...
    !Array.isArray(value) && // value is not an array and...
    !(value instanceof Date); // value is not an instance of the date object

    // value instanceof Date
    // use typeof to determine if it's an object && it's not an array
    // AND it's not null AND it's not an instance of the date object
    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */

/* 
I: FUNCTION RECEIVES A DATA TYPE
O: FUNCTION RETURNS A BOOLEAN VALUE - TRUE IF THE PARAM IS AN ARRAY OR AN OBJECT, FALSE OTHERWISE
C: FUNCTION EXPECTS TO RECEIVE A DATA TYPE IN THE PARAM
E: N/A
*/


function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // create if statement checking if value param is object, not null, and not a Date object.
    if (typeof value === 'object' && value !== null && !(value instanceof Date)) { 
        return true; // returns true
    } else if (Array.isArray(value)) { // else if statement to check if param is an array
        return true; // return true
    } return false; // return false otherwise
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}