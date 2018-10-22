/******************************************************************************
 *  Compilation:  node StringPermutations.js
 *  
 *  Purpose: Program to find & print all possible Permutations of a String.
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

// Asking the user to input a string to find it's different permutations.
rl.question("Enter the string: ", function(ans1) {

    // Storing the input in 'str' variable as String type.
    var str = String(ans1);

    // Converting the String 'str' to Array 'arr' to compute further.
    var arr = str.split('');

    // Initializing lower index of the array to '0'.
    var low = 0;

    // Initializing higher index of the array to 'str.length - 1'.
    var high = str.length - 1;

    // Calling findPermutations() method to find the permutations.
    findPermutations(arr, low, high);
});

/**
 * Function to find all possible permutation of the string.
 * 
 * @param {Array}  arr  It is the array on which we will compute.
 * @param {Number} low  It is the lower index of the array/sub-array.
 * @param {Number} high It is the higher index of the array/sub-array.
 */
function findPermutations(arr, low, high) {

    // Condition to check if lower index is equal to higher index
    if (low == high) {

        // If yes, then we have found a permutation, So just print it.
        console.log(arr.join(''));
    } else {

        // The loop will run till 'i' (low) is less than or equal to 'high'.
        for (var i = low; i <= high; i++) {

            // Calling the function swap() to swap the values of the sub array.
            arr = swap(arr, low, i);

            // Calling findPermutations() function recursively by incrementing the lower index.
            findPermutations(arr, low + 1, high);

            // Calling the function swap() to swap the values of the sub array back again.
            arr = swap(arr, low, i);
        }
    }
}

// Declaration of temp variable which will be used in swap() function.
var temp;

/**
 * Function to swap two values in an array according to the provided indices.
 * 
 * @param {Array}  arr  It is the array on which we will swap the values.
 * @param {Number} low  It is the lower index of the array/sub-array.
 * @param {Number} high It is the higher index of the array/sub-array. 
 * 
 * @returns {Array} arr It is returning the swapped array/sub-array.
 */
function swap(arr, low, high) {

    // And the classic way to swap two values using a temporary variable.
    temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
    return arr;
}