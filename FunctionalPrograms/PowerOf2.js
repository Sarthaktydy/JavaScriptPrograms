/******************************************************************************
 *  Compilation:  node PowerOf2.js
 *  
 *  Purpose: Program to print 2^1 to 2^N, where N is provided by the user.
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

// Asking the user to provide value of 'N'.
rl.question("Enter value of N: ", function(answer) {

    // Storing the input in 'n' variable as Number type.
    var n = Number(answer);

    // initializing the initial power 'i' to 1.
    var i = 1;

    // Loop will run till value of 'i' is equal to 'n'
    while (i <= n) {

        // Print '2^i' to console.
        console.log("2^" + i + " = " + Math.pow(2, i));

        // Increment the value of 'i'.
        i++;
    }

    process.exit();
});