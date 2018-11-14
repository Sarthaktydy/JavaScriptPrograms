/******************************************************************************
 *  Compilation:  node AddressBook.js
 *  
 *  Purpose:  Program which is used to maintain an address book. An address 
 *            book holds a collection of entries, each recording a person's 
 *            first and last names, address, city, state, zip, and phone no.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   01-11-2018
 *
 ******************************************************************************/

// Implementing the File System module in this application.
var fs = require("fs");

// Implementing the Radline module in this application.
var rl = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var r = rl.createInterface(process.stdin, process.stdout);

/**
 * Function to start the program & register User.
 */
function registration() {

    // Asking if user is new or existing.
    r.question("Enter 1 if you're new, or 2 if you're existing: ", function(ans1) {

        // If 1, then register the user.
        if (ans1.trim() == 1) {
            registerUser();
        }

        // Else existing, so ask for his purpose.
        else {

            r.question("Enter your name: ", function(ans2) {
                var name = ans2.trim();
                purposeUser(name);
            });

        }
    });
}

/**
 * This method helps to convert any object or data passed into
 * JSON format and write that JSON string to a file.
 * 
 * @param {any} str  It is the data passed by the caller.
 */
function writeInJson(str) {

    // Converting  into string.
    var j = JSON.parse(fs.readFileSync('./JsonFiles/AddressBook.json'));

    // Adding 'str' into the array.
    j.address.push(str);

    // Writing the 'str' in the AddressBook file.
    fs.writeFileSync('./JsonFiles/AddressBook.json', JSON.stringify(j));
    console.log("JSON File Saved!");
    r.close();
}

/**
 * Function to register a user.
 */
function registerUser() {

    // Asking the user it's full name.
    r.question("Enter your full Name: ", function(ans1) {

        // Asking user to enter it's address
        r.question("Enter your address: ", function(ans2) {

            // Asking the user to enter name of the city.
            r.question("Enter city: ", function(ans3) {

                // Asking the user to enter name of the state.
                r.question("Enter state: ", function(ans4) {

                    // Asking the user to enter zip/pin code.
                    r.question("Enter PIN/ZIP code: ", function(ans5) {

                        // Asking the user to enter mobile number.
                        r.question("Enter mobile number: ", function(ans6) {
                            var name = ans1.trim().split(' ');

                            var data = {
                                firstName = name[0],
                                lastName = name[0],
                                address = ans2.trim(),
                                city = ans3.trim(),
                                state = ans4.trim(),
                                zip = ans5.trim(),
                                mobile = ans6.trim()
                            }

                            writeInJson(data);
                        })
                    })
                })
            })
        })
    });
}