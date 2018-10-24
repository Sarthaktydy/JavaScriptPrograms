/******************************************************************************
 *  Compilation:  node LeapYear.js
 *  
 *  Purpose: Program to check if the given year is a leap year or not.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   16-10-2018
 *
 ******************************************************************************/

// Implementing the Readline module in this application.
var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

// Asking the user to input the year to check.
rl.question("Enter the year: ", function(answer) {

    // Storing the input in 'year' variable in Number type.
    var year = Number(answer);

    /* Validating if the year input is between 1000 & 10000 or not, 
     * as this program can only check leap year for 4 digit years.
     */
    if (year < 1000 || year > 9999) {
        console.log("Please enter a 4-digit year!");
        process.exit();
    }

    /* Validate if the year is a leap year or not by following condition.
     * It should be divisible by 4 & 400, but should not be divisible by 100.
     */
    if (year % 4 == 0 || year % 400 == 0 && year % 100 != 0) {

        // If true, then it is a leap year.
        console.log("It is a leap year");
        process.exit();
    } else {

        // If false, then it is not a leap year.
        console.log("It is NOT a leap year");
        process.exit();
    }
});