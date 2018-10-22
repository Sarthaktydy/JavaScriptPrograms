/******************************************************************************
 *  Compilation:  node SumOfThreeAddsToZero.js
 *  
 *  Purpose: Program to find & print all possible triplets in a given array
 *           whose sum can be rqual to zero.
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

// Asking the user to enter the size of the array to be created.
rl.question("Enter size of the array: ", function(ans1) {

    // Storing the input in 'size' variable in Number type.
    var size = Number(ans1);

    // Calling createArray() function to create the array.
    createArray(size);
});

/**
 * Function to create an Array of provided 'size'.
 * 
 * @param {Number} size 
 */
function createArray(size) {

    // Creating an empty array.
    var arr = [];

    // Asking the user for values of the array.
    console.log("Enter " + size + " values: ");

    // Initializing the index 'i' of the array 'arr' to '0'.
    var i = 0;

    // Calling getInput() function to take input for the given array.
    getInput(arr, size, i);
}

/**
 * Functio to take 'size' number of inputs and store it in a given 'arr' array.
 * 
 * @param {Array}  arr  It is the array to store the input.
 * @param {Number} size It is the size of the array.
 * @param {Number} i    It is the index on which the value will be stored.
 */
function getInput(arr, size, i) {

    // Check if the size if decremented to 0.
    if (size == 0) {

        // If yes, call the findNum() function to find all possible triples summing to 0.
        findNum(arr);
    }

    // asking the user to input the values to store in the array.
    rl.question("", function(ans) {

        // Putting the value in Number type at 'i' index of the 'arr' array.
        arr[i] = Number(ans);

        // Incrementing the index of the array.
        i++;

        // Decrementing the size of the array.
        size--;

        // Calling this same method recursively with updated values.
        getInput(arr, size, i);
    });
}

/**
 * Function to find all possible triplets whose sum will be equal to zero and print it.
 * 
 * @param {Array} arr  It is the array on which we'll check for triplets.
 */
function findNum(arr) {
    console.log("Triplets whose sum is equal to zero:\n");

    // This for loop will hold the first value to be compared.
    for (var i = 0; i < arr.length; i++) {

        // This for loop will hold the first value to be compared.
        for (var j = i + 1; j < arr.length; j++) {

            // This for loop will hold the first value to be compared.
            for (var k = j + 1; k < arr.length; k++) {

                // Check if all the three values sum up to '0' or not.
                if (arr[i] + arr[j] + arr[k] == 0) {

                    // If yes, print the triplets.
                    console.log("{ " + arr[i] + ", " + arr[j] + ", " + arr[k] + " }");
                }
            }
        }
    }
}