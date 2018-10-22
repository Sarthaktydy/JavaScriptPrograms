/******************************************************************************
 *  Compilation:  node BinarySearch.js
 *  
 *  Purpose: Program to print all the Prime Numbers from 0 to 1000.
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

// Array in which we will search for words.
var words = ["nishant", "akshansh", "chiraag", "sarthak", "deepankan"];

// Asking the user to enter word to search.
rl.question("Enter the element you want to search: ", function(ans1) {

    // Storing the input in 'str' variable as String type.
    str = String(ans1);

    // Sorting the array of words. As the array should be sorted for Binary Search.
    words.sort();

    // Calling binSearch() function to search for the word.
    binSearch(str, 0, words.length);
});

/**
 * Function to search for the word 'str' in a given array.
 * 
 * @param {String} str  It is the word which is to be searched.
 * @param {Number} low  It is lower index of the array.
 * @param {Number} high It is higher index of the array.
 */
function binSearch(str, low, high) {

    // Condition to check if 'low' is less than or equal to 'high' or not.
    if (low <= high) {
        var mid = Math.floor((low + high) / 2);

        /* If 'key' is equal to the element at the middle index, then print the element
         * and close the readline module.
         */
        if (words[mid] == str) {
            console.log(str + " is present at index " + mid);
            rl.close();
        }

        /* If 'key' is less than the element at the middle index, then call 'binSearch()'
         * function, passing 'mid-1' as the higher index.
         */
        else if (str < words[mid]) {
            binSearch(str, low, mid - 1);
        }

        /* If 'key' is greater than the element at the middle index, then call 'binSearch()'
         * function, passing 'mid+1' as the lower index.
         */
        else {
            binSearch(str, mid + 1, high);
        }
    }

    /* If none of the condition if satisfied, then the 'key' is not present in the
     * given array. So print "element not found" & close the readline module.
     */
    else {
        console.log("Element not found");
        rl.close();
    }
}