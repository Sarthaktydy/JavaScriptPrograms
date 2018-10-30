/******************************************************************************
 *  Compilation:  node BalancedParentheses.js
 *  
 *  Purpose: Program to Take an Arithmetic Expression such as,
 *           "(5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)"
 *           where parentheses are used to order the performance of operations. 
 *           Ensure parentheses must appear in a balanced fashion.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   23-10-2018
 *
 ******************************************************************************/

// Importing the Stack module in this application.
var l = require("./Stack");

// Implementing the Readline module in this application.
var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

// Asking user to enter the equation containing parentheses.
rl.question("Enter data: ", function(ans1) {

    var key = String(ans1); // Stpring the input in 'key' variable.

    // Calling checkIfBalanced() function.
    checkIfBalanced(key);
});

/**
 * Function to check if the enter equation have balanced parentheses or not.
 * 
 * @param {String} key  It contains the equation containing parentheses.
 */
function checkIfBalanced(key) {

    // Converting the input into 'str' array by splitting each character.
    var str = key.split('');

    // Creating a new object of Stack Module.
    var s = new l.Stack();

    // This loop will run throughout the array.
    for (var i = 0; i < str.length; i++) {

        // If '(' is found, push it in the Stack 's'.
        if (str[i] == '(') {
            s.push(str[i]);
        }

        // If ')' is found, pop the last element the Stack 's'.
        else if (str[i] == ')') {

            // If the stack is empty & input is ')', i.e Parentheses is not balanced.
            if (s.isEmpty()) {
                console.log("The entered data does not have Balanced Parentheses!");
                process.exit();
            }

            // Pop from the stack.
            s.pop();
        }
    }

    /**
     * At last, if the Stack is empty, that means it is a Balanced Parentheses,
     * else not.
     */
    if (s.isEmpty()) {
        console.log("The entered data have Balanced Parentheses!");
    } else {
        console.log("The entered data does not have Balanced Parentheses!");
    }
    rl.close();
}