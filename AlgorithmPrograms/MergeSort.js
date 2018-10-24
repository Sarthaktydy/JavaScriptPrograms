/******************************************************************************
 *  Compilation:  node MergeSort.js
 *  
 *  Purpose: Program to sort a given array using Divide & Conquer Algorithm called
 *           Merge Sort.
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

// Initializing the index 'i' for taking input in the array.
var i = 0;

// Asking the user to enter the size of the array.
rl.question("Enter the size of the array: ", function(ans1) {

    // Taking input and storing it in 'size' array in Number type.
    size = Number(ans1);

    // Validating if the 'size' is positive or not
    if (size >= 0) {

        // If yes, then create a new array of size 'size'.
        var arr = new Array(size);

        // Ask the user to enter 'size' elements & calling 'getInput()' function.
        console.log("Enter " + size + " elements");
        getInput(arr);
    } else {

        // If no, then it's an invalid input.
        console.log("Invalid size! It can't be negative.");
        rl.close();
    }
});

/**
 * Function to get input from the user to put in the array.
 * 
 * @param {Array} arr It is the array in which the elments will be stored.
 */
function getInput(arr) {

    // Validating if 'i' is equal to array's length.
    if (i == arr.length) {

        /** 
         * If yes, then calling the mergeSort() function by passing the array.
         * And storing the returned array in res.
         */
        var res = mergeSort(arr);

        // Printing the array to the console & closing the readline module.
        console.log("\n{ " + res + " }\n");
        rl.close();
    }

    // Validating if 'i' is less than the array length.
    if (i < arr.length) {

        // If yes, then ask the user to input i'th element of the array.
        rl.question(i + 1 + ": ", function(ans1) {

            // Storing the input's String value at i'th index or arr array.
            arr[i] = String(ans1);

            // Incrementing the index.
            i++;

            // Calling getInput() method recursively to take input untill the array is full.
            getInput(arr);
        });
    }
}

/**
 * Function to sort elements present in an Array using Merge Sort Algorithm. 
 * It is used to divide the given array into further small arrays.
 * 
 * @param {Array} arr  It is the given array to be sorted.
 * @returns {Array} It returns a sorted array.
 */
function mergeSort(arr) {

    /**
     * If length of the array is 0 or 1, then return the same array itself as it's
     * already sorted.
     */
    if (arr.length < 2) {
        return arr;
    }

    // Storing the middle index of the array in 'mid' variable.
    var mid = Math.floor(arr.length / 2);

    // Storing the left sub-array in the 'left' variable.
    var left = arr.slice(0, mid);

    // Storing the right sub-array in the 'right' variable.
    var right = arr.slice(mid);

    // Calling merge() function by passing mergeSort(left) & mergeSort(right) as arguments.
    return merge(mergeSort(left), mergeSort(right));
}

/**
 * Function to sort and merge two sub-arrays and return the merged sorted array.
 * 
 * @param {Array} left  It is the left sub-array.
 * @param {Array} right It is the right sub-array.
 */
function merge(left, right) {

    // Creating an auxiliary array to store the merged array.
    var res = []

    // Initializing the index of left & right sub-array to '0'.
    var iLeft = 0
    var iRight = 0

    /**
     * This loop will run till iLeft & iRight is less than length of the left sub-array
     * and the right sub-array.
     */
    while (iLeft < left.length && iRight < right.length) {

        /**
         * If element of present at 'iLeft' of 'left' sub-array is less than element present
         * at 'iRight' index of 'right' sub-array, then push the element present at 'iLeft' 
         * index of 'left' sub-array into 'res' merged array.
         */
        if (left[iLeft] < right[iRight]) {
            res.push(left[iLeft]);

            // Increment the index of left sub-array.
            iLeft++;
        }

        /** 
         * If not, then push the element present at 'iRight' index of 'right' sub-array 
         * into 'res' merged array.
         */
        else {
            res.push(right[iRight]);

            // Increment the index of left sub-array.
            iRight++;
        }
    }

    /**
     * Return 'res' merged array with adding the remaining elements of left sub-array 
     * or right sub-array.
     */
    return res.concat(left.slice(iLeft)).concat(right.slice(iRight));
}