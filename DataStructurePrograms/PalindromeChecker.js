/******************************************************************************
 *  Compilation:  node PalindromeChecker.js
 *  
 *  Purpose: Program which take input a string of characters and check whether 
 *           it is a palindrome using Dqeue Data Structure.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   23-10-2018
 *
 ******************************************************************************/

// Importing the Deque module in this application.
var q = require("./Deque");

// Implementing the Readline module in this application.
var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

// Asking the user for input & calling checkForPalindrome() function passing the input.
rl.question("Enter the String to check for Palindrome: ", function(ans1) {
    var str = String(ans1);
    checkForPalindrome(str);
});

// Creating a new object of Deque Module.
var d = new deq.Deque();

/**
 * Function to check if the passed string is a palindrome or not using Deque.
 * 
 * @param {String} str 
 */
function checkForPalindrome(str) {

    // This loop will run till the length of the string
    for (var i = 0; i < str.length; i++) {

        // Adding the character at 'i' position in rear of the Deque.
        d.addRear(str.charAt(i));
    }

    var size = Math.floor(d.size / 2);
    var bool = true;

    // This loop will run till half size of the Deque.
    for (var i = 0; i < size; i++) {

        // Removing characters from front & rear, and checking if they are not equal.
        if (d.removeFront() != d.removeRear()) {

            // If not equal, declaring bool as false & breaking the loop.
            bool = false;
            break;
        }
    }

    // If bool is still true, i.e. String is palindrome else not a palindrome.
    if (bool) {
        console.log("This is a palindrome!");
    } else {
        console.log("This is NOT a palindrome!");
    }

    rl.close();
}