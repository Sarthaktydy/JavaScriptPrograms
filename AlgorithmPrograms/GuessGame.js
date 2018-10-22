/******************************************************************************
 *  Compilation:  node GuessGame.js
 *  
 *  Purpose: Program to sort a given array using Bubble Sort Algorithm.
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

// Initializing all the required variables to guess the number.
var low = 0,
    high = 1023,
    mid = 0;

// Asking the user to guess a number b/w 'low' & 'high'.
console.log("Think about a number between " + low + " and " + high + "\n" +
    "Reply with 'yes' or 'no'\n");

/**
 * Function to guess/find your number with O(log(N)) time complexity. 
 * 
 * @param {Number} low  It is the lower limit in which the number is to be guessed.
 * @param {Number} high It is the higher limit in which the number is to be guessed.
 */
function guess(low, high) {

    // Finding the middle element and storing it in 'mid' variable.
    mid = Math.floor((low + high) / 2);

    // Asking the user if the number is in range of 'low' & 'mid' or not.
    rl.question("Is that number b/w " + low + " and " + mid + "?? ", function(ans) {

        // If the answer is 'yes', setting the higher index as 'mid'.
        if (ans == "yes") {
            high = mid;

            // Again calling the 'guess()' by passing the new values of 'low' & 'high'.
            guess(low, high);
        }

        // If the answer is 'no', setting the lower index as 'mid+1'.
        else if (ans == "no") {
            low = mid + 1;

            // Again calling the 'guess()' by passing the new values of 'low' & 'high'.
            guess(low, high);
        }

        // If the answer is anything else, Invalid input.
        else {
            console.log("Invalid input! Please enter 'yes' or 'no' !");

            // Again asking the user for correct input by calling 'guess()' method again.
            guess(low, high);
        }
    });

    // When 'low' gets equal to 'high', we've found the number!
    if (low == high) {

        // Printing the number and closing the readline module.
        console.log("Your number is " + low + "!!");
        rl.close();
    }
}

// Calling the guess method to start guessing the number.
guess(low, high);