// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // Declare an object
    var obj = {};
    // Create key value pairs for the object
    obj.id = id; 
    obj.nameFirst = nameFirst;
    obj.nameLast = nameLast;
    // Return the object
    return obj; 
} 

// TESTING
console.log(makeContact(1, 'Colton', 'Gray')); // Success


// {id: 1, nameFirst: 'colton', nameLast: 'gray'} for above
// imagine there is an array somewhere called contacts and every function created is doing something to that array
// first thing is creating a method addContact

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts= [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        }, 
        addContact: function(contact) {
            contacts.push(contact);
        }, 
        findContact: function(fullName) {
            // loop through the contacts array
            for (var i = 0; i < contacts.length; i++) {
                // create a variable initialized with the first name and last name of i concatenated
                var contactFullName = contacts[i].nameFirst + ' ' + contacts[i].nameLast;
                // check to see if the contactFullName is equal to the fullName param value
                if (contactFullName === fullName) {
                    return contacts[i];
                }
            }
            // return undefined otherwise
            return undefined;

        },
        removeContact: function(contact) {
            // loop through the array
            for (var i = 0; i < contacts.length; i++) {
                // find the index where (contact) param value is
                if (contacts[i] === contact) {
                    // if found, remove that index from the array
                    contacts.splice(i ,1);
                    // exit the loop when complete
                    break; 
                }
            }

        },
        printAllContactNames: function() { // COME BACK TO THIS

            // create a variable to store all the concatenated firstNames and lastNames
            var allNames = '';
            // loop through the contacts array
            for (var i = 0; i < contacts.length; i++) {
                // create variable for concatenating each first and last name per loop
                var contactFullName = contacts[i].nameFirst +  ' ' + contacts[i].nameLast;
                // add it to allNames variable per loop
                allNames += contactFullName;
                // add a line break after each loop, except for the last name
                if (i < contacts.length -1) {
                    allNames += '\n';
                }
                // return allNames
            } return allNames;

            
            }
        }
    }






// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}