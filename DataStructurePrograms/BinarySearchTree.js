/******************************************************************************
 *  Compilation:  node BinarySearchTree.js
 *  
 *  Purpose: Program to find how many Binary Search Trees are possible for 
 *           given N nodes, each having unique value ranging from [1, N].
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   23-10-2018
 *
 ******************************************************************************/

// Implementing the Readline module in this application.
var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

// Asking the user to enter the no of test cases.
rl.question("Enter number of test cases: ", function(ans1) {
    var n = Number(ans1);
    var arr = new Array(n);
    takeInput(n, arr);
});

var i = 0;

/**
 * Function to take 'n' number of inputs & store it in an array 'arr'.
 * 
 * @param {Number} n  It is the number of inputs to be taken
 * @param {Array} arr It is the array in which the inputs will be stored.
 */
function takeInput(n, arr) {

    // If 'i' is equal to n, call findBST() function passing the array.
    if (i == n) {
        findBST(arr);
        rl.close();
    } else {

        // Take the input from the user for 'n' times using recursion & store them in array.
        rl.question("Enter: ", function(ans) {
            arr[i] = Number(ans);
            i++;
            takeInput(n, arr);
        });
    }
}

/**
 * Function to find the Catalan Number of certain input. This returns number
 * of Binary Search Trees possible for 'n' number of nodes.
 * 
 * @param {Number} n  It is the number whom Catalan number is to be found.
 * 
 * @returns {Number}  It returns Catalan Number of the passed argument.
 */
function catalanNumber(n) {

    var fact = 1;
    var n1 = n + 1;

    // This loop will run from i to n & will find and store the Catalan Number in 'fact'.
    for (var i = 1; i <= n; i++) {
        fact *= n1;
        fact /= (i + 1);
        n1++;
    }
    return fact;
}

/**
 * Function to find possible number of Binary Search Trees for a given number
 * of nodes.
 * 
 * @param {Array} arr  It is an array of numbers.
 */
function findBST(arr) {

    // For loop to run throughout the array & print catalanNumber for each input.
    for (var i = 0; i < arr.length; i++) {
        console.log(catalanNumber(arr[i]));
    }
    rl.close();
}