// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */

/* 
I: FUNCTION RECEIVES A PARAM BASE (STRING OR NUMBER)
O: FUNCTION RETURNS A BOOLEAN VALUE OF TRUE OR FALSE TESTING IF VALUE > BASE
C: FUNCTION EXPECTS TO RECEIVE A STRING OR NUMBER
E: N/A
*/


function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value) { // invoke function with the param value
        // return the boolean value when comparing the value param > base param
        return value > base;
    }
   
    
    // YOUR CODE ABOVE HERE //
}

// TESTING
let greaterThan5 = createGreaterThanFilter(5); // 5 is now the base
console.log(greaterThan5(10)); // prints true to the console because 10 is greater than 5

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 */

/*
I: FUNCTION RECEIVES A STRING OR NUMBER IN THE BASE PARAM
O: FUNCTION OUTPUTS A BOOLEAN VALUE WHEN INVOKING A FUNCTION THAT TESTS IF VAL < BASE
C: FUNCTION EXPECTS TO RECEIVE A STRING OR NUMBER
E: N/A
*/


function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
   return function(val) { //invoke function with the param val
    return val < base; // check if val < base, return boolean value
   }
   
    
    
    // YOUR CODE ABOVE HERE //
}

// TESTING
let lessThan5 = createLessThanFilter(5); // 5 is now the base
console.log(lessThan5(2)); // 2 is the val, thus printing true to console because 2 < 5

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */

/* 
I: FUNCTION RECEIVES A SINGLE CHARACTER (A STRING) AS THE PARAM
O: FUNCTION OUTPUTS A BOOLEAN VALUE DETERMINING IF THE FIRST CHARACTER OF A STRING IS THE SAME CHARACTER IN THE STARTSWITH PARAM
C: EXPECTS TO RECEIVE A CHARACTER IN THE STARTSWITH PARAM AND A STRING IN THE STRING PARAM
E: N/A
*/


function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    return function(string) { // invoke new function that takes string as the param
        // return a boolean value if the startsWith character is the same as the first character in the string param
        // modify the string and the startsWith character to lower case
        return string.charAt(0).toLowerCase() === startsWith.toLowerCase(); 
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// TESTING

let startsWithA = createStartsWithFilter('a'); // startsWith is 'a'
console.log(startsWithA('Colton')); // string is 'Colton', thus printing false to console

/**
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */

/* 
I: FUNCTION RECEIEVES A SINGLE CHAR AS A STRING IN THE ENDSWITH PARAM
O: FUNCTION RETURNS A BOOLEAN VALUE DETERMINING IF THE ENDSWITH PARAM IS THE SAME CHARACTER AT THE BEGINNING OF A LATER DECLARED STRING
C: FUNCTION EXPECTS TO RECEIVE A SINGLE CHAR IN THE PARAM
E: N/A
*/

function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    return function(string) { // create new function that takes a string as the param
        // return the boolean value testing if the endsWith param is the last character of the string param
        return string.charAt(string.length -1).toLowerCase() === endsWith.toLowerCase();
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */

/* 
I: FUNCTION RECEIVES AN ARRAY OF STRINGS AND A FUNCTION
O: FUNCTION OUTPUTS THE ARRAY OF STRINGS, BUT MODIFIED
C: FUNCTION EXPECTS TO RECEIVE AN ARRAY OF STRINGS AND A FUNCTION IN THE TWO PARAMS
E: N/A
*/


function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //

    // create storageArr to hold the strings
    let storageArr = [];
    // loop through the strings
    for (var i = 0; i < strings.length; i++) {
        // invoke the modify function on each index and then push it to the storageArr
        storageArr.push(modify(strings[i]));
    }

     return storageArr; // return storageArr
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

modifyStrings(['alex', 'francis', 'aaron'], function(string) { return string + "!"});
// RETURNS => ['alex!', 'francis!', 'aaron!']

modifyStrings(['alex', 'francis', 'aaron'], function(string){ return string.toUpperCase()});
// RETURNS => ['ALEX', 'FRANCIS', 'AARON']


/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */

/*
I: FUNCTION RECEIVES AN ARRAY OF STRINGS AND A FUNCTION THAT TESTS EACH STRING 
O: FUNCTION OUTPUTS TRUE OR FALSE DEPENDING ON IF THE STRINGS PASSED THE TESTS INVOKED BY THE TEST FUNCTION
C: FUNCTION EXPECTS TO RECEIVE AN ARRAY OF STRINGS AND A FUNCTION THAT TESTS THE VALUES OF EACH STRING IN THE TEST PARAM
E: N/A
*/


function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //

    // create storageArr to hold the strings
    let storageArr = [];
    // loop through the array of strings in the strings param
    for (var i = 0; i < strings.length; i++) {
        // invoke the test function onto each index of the array, then push into storageArr
        storageArr.push(test(strings[i]));
    }
   
    // loop through storageArr to check boolean value of each string after having the test function invoked
    for (var i = 0; i < storageArr.length; i++) {
        if (!storageArr[i]) { // if a value in storageArr is false, return false
            return false;
        }
    }
    return true; // otherwise, return true
    
    // YOUR CODE ABOVE HERE //
}

// RETURNS => true (because all strings begin with 'a')

allStringsPass(['alex', 'francis', 'aaron'], function(string) { return string[0] === 'a'});
// RETURNS => false (because one of the strings doesn't begin with 'a')


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}