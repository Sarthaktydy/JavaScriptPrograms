/******************************************************************************
 *  Compilation:  node Regex.js
 *  
 *  Purpose: Program to Read in the following message: "Hello <<name>>, We have 
 *           your full name as <<full name>> in our system. your contact number 
 *           is 91-xxxxxxxxxx. Please,let us know in case of any clarification 
 *           Thank you BridgeLabz 01/01/2016". Using Regex to replace name, full 
 *           name, Mobile#, and Date with proper value.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   01-11-2018
 *
 ******************************************************************************/

// Implementing the Radline module in this application.
var rl = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var r = rl.createInterface(process.stdin, process.stdout);

// String to be replaced with the user input.
var str = "Hello <<name>>,\nWe have your full name as <<full name>> in our system.\n" +
    "Your contact number is 91-xxxxxxxxxx.\nPlease, let us know in case of any" +
    " clarification.\n\nThank you,\nBridgeLabz 01/01/2016."

/**
 * Function to take input from the user.
 */
function takeInput() {

    // Asking the user for his full name.
    r.question("Enter your full name:\n", function(ans1) {

        // Askinbg the user for his mobile number.
        r.question("Enter your Mobile Number:\n", function(ans2) {

            // Storing the inputs in 'name' & 'mob' variables.
            var name = String(ans1.trim());
            var mob = Number(ans2.trim());

            // Calling replaceString method to replace the String with inputs.
            replaceString(name, mob);
        });
    });
}

/**
 * Function to replace string with name, full name, mobile number & date
 * using Regex.
 * 
 * @param {String} name  Full Name of the user.
 * @param {Number} mob   Mobile Number of the user.
 */
function replaceString(name, mob) {

    // Storing the First Name using split() fucntion on 'name'.
    var firstName = name.split(/\s/);

    // Storing the current date using Date.toLocaleDateString() function.
    var date = new Date().toLocaleDateString();

    // Replacing the first name.
    str = str.replace(/\<+\w{4}\>+/g, firstName[0]);

    // Replacing the full name.
    str = str.replace(/\<+\w{4}\s{1}\w{4}\>+/g, name);

    // Replcing the mobile number.
    str = str.replace(/x{10}/, mob);

    // Replacing the date.
    str = str.replace(/\d{2}\/\d{2}\/\d{4}/g, date);

    console.log(str);
    r.close();
}

// Calling takeInput() function to start taking input.
takeInput();