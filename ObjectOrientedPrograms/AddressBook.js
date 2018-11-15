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
            purposeUser();
        }
    });
}

/**
 * This method helps to convert any object or data passed into
 * JSON format and write that JSON string to a file.
 * 
 * @param {any} data  It is the array of addresses passed by the caller.
 */
function writeInJson(data) {

    // Converting  into string.
    var j = JSON.parse(fs.readFileSync('./JsonFiles/AddressBook.json'));

    // Concatenating 'j' & 'data' arrays and storing into 'arr'.
    var a = { "address": j.address.concat(data) };

    // Writing the 'data' in the AddressBook file.
    fs.writeFileSync('./JsonFiles/AddressBook.json', JSON.stringify(a));
    console.log("JSON File Saved!");
    r.close();
}

// Array to store address objects.
var addr = [];

/**
 * Function to register a user.
 */
function registerUser() {

    // Asking the user it's first name.
    r.question("Enter your First Name: ", function(ans) {

        // Asking the user it's Last name.
        r.question("Enter your Last Name: ", function(ans1) {

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

                                // Creating an object storing the properties of address book.
                                var data = {
                                    firstName: ans.trim(),
                                    lastName: ans1.trim(),
                                    address: ans2.trim(),
                                    city: ans3.trim(),
                                    state: ans4.trim(),
                                    zip: ans5.trim(),
                                    phone: ans6.trim()
                                }

                                // Pushing that data into 'addr' array.
                                addr.push(data);

                                // Asking the user if there's any more entry.
                                r.question("\nIs there anyone else? ", function(ans7) {

                                    // If yes, then calling registerUser() function.
                                    if (ans7.startsWith('y')) {
                                        console.log();
                                        registerUser();
                                    }

                                    // If no, then writing the addr into JSON file.
                                    else {
                                        writeInJson(addr);
                                        console.log("Address Book Updated!");
                                        r.close();
                                    }
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

/**
 * Function to check for purpose of the user.
 */
function purposeUser() {

    // Asking the user to enter his mobile number for verification.
    r.question("Enter your mobile number: ", function(ans1) {

        // Checking if the mobile number is present or not.
        if (checkUser(Number(ans1.trim()))) {

            // Askint user if he want to delete or edit the data.
            r.question("Do you want to 'delete'/'edit' your data? ", function(ans2) {

                // If user has entered delete, call deleteUser() function.
                if (ans2.trim().startsWith('d')) {
                    deleteUser(Number(ans1.trim()));
                }

                // If user has entered edit, call editUser() function.               
                else {
                    editUser(Number(ans1.trim()));
                }
            });
        } else {

            // If number is not present, ask the user to enter again.
            console.log("Sorry, number is not found in the AddressBook. Try again! ");
            purposeUser();
        }
    });
}

/**
 * Function to check if a number passed is prsenet in the address book or not.
 * 
 * @param {String} number  It contains the phone number to check.
 * 
 * @returns {Boolean}  It returns true/false based on if number is present.
 */
function checkUser(number) {

    // Reading from JSON file.
    var j = JSON.parse(fs.readFileSync('./JsonFiles/AddressBook.json'));

    // For loop to run till the number is found.
    for (var i = 0; i < j.address.length; i++) {

        // If the number is found, return true;
        if (j.address[i].phone == number) {
            return true;
        }
    }

    // If the number is not found, return false.
    return false;
}

/**
 * Function to delete an entire entry of the user based on phone number.
 * 
 * @param {String} number  It contains the phone number to delete.
 */
function deleteUser(number) {

    // Reading from JSON file.
    var j = JSON.parse(fs.readFileSync('./JsonFiles/AddressBook.json'));
    var i = 0;

    // For loop to run till the number is found.
    for (i = 0; i < j.address.length; i++) {

        // If the number is found, break the loop.
        if (j.address[i].phone == number) {
            break;
        }
    }

    // Confirmint the user if he wants to delete his entry.
    r.question(JSON.stringify(j.address[i], " ", 2) + "\nDo you want to delete this entry? ",
        function(ans1) {

            // Checking if user has entered yes.
            if (ans1.trim().startsWith('y')) {

                // If yes, then remove entry present at 'i' index.
                j.address.splice(i, 1);

                // Write & Save the file in JSON.
                fs.writeFileSync('./JsonFiles/AddressBook.json', JSON.stringify(j));
                console.log("Deleted Successfully!");
                r.close();
            } else {

                // If no, then close the program.
                r.close();
            }
        });
}

/**
 * Function to edit the properties of the user.
 * 
 * @param {String} number  It is the phone number of the user.
 */
function editUser(number) {

    // Reading JSON file.
    var j = JSON.parse(fs.readFileSync('./JsonFiles/AddressBook.json'));
    var i = 0;

    // For loop will run till the Number is found.
    for (i = 0; i < j.address.length; i++) {

        // If the number is found, break the loop.
        if (j.address[i].phone == number) {
            break;
        }
    }

    // Asking the user to enter what he wants to change.
    r.question(JSON.stringify(j.address[i], " ", 2) + "\nEnter what you'd like to edit: ", function(ans1) {

        // Checking if the property name entered by user is present in that entry or not.
        if (ans1.trim() in j.address[i]) {

            // Asking user to enter a replaced string for that property's value.
            r.question(`What would you like to change ${ans1.trim()} to? `, function(ans2) {

                // Replacing that property's value with the new one.
                j.address[i][ans1.trim()] = ans2.trim();

                // Writing it into JSON file.
                fs.writeFileSync('./JsonFiles/AddressBook.json', JSON.stringify(j));
                console.log("Changed Successfully!");

                // Asking the user if he will change anything else.
                r.question("Would you like to change anything else? ", function(ans3) {

                    // If yes, then calling editUser() function again.
                    if (ans3.trim().startsWith('y')) {
                        editUser(number);
                    } else {

                        // Else closing the program.
                        r.close();
                    }
                });
            });
        } else {

            // If property is not present, callint this method again to take input again.
            console.log("No such property found!! Try again, write exact property name.");
            editUser(number);
        }
    });
}

// Calling registration method to start the program.
registration();