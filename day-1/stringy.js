// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/*

I: Function inputs a string with any value.
O: Functino outputs the length of the string in numerical value. 
C: Function expects to receive a string.
E: N/A

*/
function length(string) {
    // YOUR CODE BELOW HERE //

    // Use .length to log the string's length to the console
    console.log(string.length);

    // return the input string's length property
    return string.length;
    // YOUR CODE ABOVE HERE //
}


/**
 * Given an input String, return a new String forced to lowercase.
 */

/* 
I: FUNCTION INPUTS A STRING WITH ANY VALUE
O: FUNCTION OUTPUTS THE ORIGINAL STRING WITH ALL CHARACTERS CONVERTED TO LOWERCASE
C: FUNCTION DOES NOT EXPECT NUMERICAL VALUES OR A STRING WITH NO UPPERCASE CHARACTERS
E: N/A
*/

function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

    // Use .toLowerCase() to convert all characters in the string to lowercase
    return string.toLowerCase();



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

/*
I: FUNCTION INPUTS A STRING WITH ANY VALUE
O: FUNCTION OUTPUTS THE ORIGINAL STRING WITH ALL CHARACTERS CONVERTED TO UPPERCASE
C: FUNCTION DOES NOT EXPECT NUMERICAL VALUES OR A STRING WITH NO LOWERCASE CHARACTERS
E: N/A
*/

function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    
    // Use .toUpperCase() to convert all characters in the string to uppercase
    return string.toUpperCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */


/* 
I: FUNCTION INPUTS A STRING
O: FUNCTION OUTPUTS THE STRING WITH ALL CHARACTERS CONVERTED TO LOWER CASE AND SPACES REPLACED WITH DASHES
C: FUNCTION EXPECTS TO RECEIVE A STRING WITH EMPTY SPACE CHARACTERS
E: N/A
*/

function toDashCase(string) {
    // YOUR CODE BELOW HERE //

    // Convert string toLowerCase() 
    let lowerCase = string.toLowerCase();

    // Use .replace and replace empty spaces with dashes
    let dashCase = lowerCase.replace(/ /g, '-');

    // return the string
    return dashCase;



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/*
I: FUNCTION INPUTS TWO PARAMETERS (STRING, CHAR)
O: FUNCTION OUTPUTS A BOOLEAN VALUE. TRUE IF THE STRING BEGINS WITH THE CHAR, FALSE OTHERWISE. 
C: FUNCTION EXPECTS THE FIRST PARAMETER TO BE A STRING AND THE SECOND PARAMETER TO BE A SINGLE CHARACTER STRING
E: N/A
*/


function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

    // Convert string and char toLowerCase()
    string = string.toLowerCase()
    char = char.toLowerCase();

    // Check if zero index / first character of the string absolutely equals char and return a boolean value
    return string[0] === char;

    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/*
I: FUNCTION INPUTS TWO PARAMETERS: STRING AND A SINGLE CHARACTER
O: FUNCTION RETURNS A BOOLEAN VALUE. TRUE IF THE STRING ENDS WITH THE GIVEN CHARACTER, OTHERWISE FALSE. 
C: FUNCTION EXPECTS THE FIRST PARAMETER TO BE A STRING AND THE SECOND PARAMETER TO BE A SINGLE CHARACTER STRING
E: N/A
*/


function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

    // Convert string and char toLowerCase()
    string = string.toLowerCase();
    char = char.toLowerCase();

    // Check if last character of string absolutely equals the value in char and return a boolean value
    return string[string.length - 1] === char;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */

/*
I: FUNCTION INPUTS TWO PARAMETERS - BOTH STRINGS
O: FUNCTION OUTPUTS ONE VARIABLE THAT INCLUDES BOTH PARAMETERS CONCATENATED
C: FUNCTION EXPECTS TO RECEIVE TWO STRINGS
E: N/A
*/


function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // Initialize new variable with the concatenated strings
    let concatString = stringOne + stringTwo;

    // return the new variable
    return concatString;



    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */

/*
I: FUNCTION INPUTS ANY NUMBER OF STRINGS
O: FUNCTION RETURNS ALL STRINGS JOINED TOGETHER
C: FUNCTION EXPECTS TO RECEIVE STRINGS IN PARAMETERS
E: N/A
*/


function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    // Use .join('') to join the string and return 
    return args.join('');


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */

/*
I: FUNCTION INPUTS TWO PARAMETERS - BOTH ARE STRINGS
O: FUNCTION OUTPUTS THE LONGEST OF THE TWO STRINGS
C: FUNCTION EXPECTS TO RECEIVE TWO STRINGS OF DIFFERENT LENGTHS
E: N/A
*/


function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // use an if else statement to compare the lengths of the strings and return the longer string
    if (stringOne.length > stringTwo.length) {
        return stringOne;
    } else {
        return stringTwo;
    }



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/*
I: 
O: 
C: 
E: 
*/


function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //




    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}