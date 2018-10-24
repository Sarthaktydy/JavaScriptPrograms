/******************************************************************************
 *  Compilation:  node SquareRoot.js
 *  
 *  Purpose: Program which determines the square root of a non-negative number
 *           given in the input Newton's method.
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

// Asking the user to input the number to find its square root.
rl.question("Enter number to find it's square root:   ", function(ans1) {

    // Storing the input in 'c' variable in Number type.
    var c = Number(ans1);

    // Validating if the number is non-negative or not.
    if (c > 0) {

        // If yes, call 'sqrt()' method.
        sqrt(c);
    } else {

        // If not, input is invalid.
        console.log("Please enter a positive number!");

    }
});

/**
 * Function to determine square root of a number given in the input using
 * Newton's method.
 * 
 * @param c It is the number whose square root is to be determined.
 */
function sqrt(c) {
    var t = c;
    var epsilon = 1e-15;

    // loop runs till the desired accuracy is reached using condition
    while (Math.abs(t - c / t) > epsilon * t) {
        t = (c / t + t) / 2;
    }
    console.log("Square root of " + c + " is " + t);
    rl.close();
}