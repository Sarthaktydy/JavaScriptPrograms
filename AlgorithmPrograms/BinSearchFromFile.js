/******************************************************************************
 *  Compilation:  node BinSearchFromFile.js
 *  
 *  Purpose: Program to search for a Word in a list of words present on a Text 
 *           File. Ask the user to enter a word to search, and then use Binary 
 *           Search Algorithm to find the word.
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

// Implementing the File System module in this application.
var fs = require('fs');

/* Using 'fs.readFileSync()' to read file at the given path, 
 * and storing it's String value in 'text' variable using 'toString()' function.
 */
var text = fs.readFileSync('/home/bridgelabz/NishPrograms/TextFilesForTest/String.txt').toString();

// Converting 'text' String to 'str' String Array by ' ' spaces using 'split()' function.
var str = text.split(' ');

// Printing the array for reference.
console.log(str);

//Asking the user to enter word to search.
rl.question("Enter the element you want to search: ", function(ans1) {

    // Storing the input in 'str' variable as String type.
    key = String(ans1);

    // Sorting the array of words. As the array should be sorted for Binary Search.
    str.sort();

    // Calling binSearch() function to search for the word.
    binSearch(str, key, 0, str.length);
});

/**
 * Function to search for the word 'key' in a given array.
 * 
 * @param {String} key  It is the word which is to be searched.
 * @param {Number} low  It is lower index of the array.
 * @param {Number} high It is higher index of the array.
 */
function binSearch(str, key, low, high) {

    // Condition to check if 'low' is less than or equal to 'high' or not.
    if (low <= high) {
        var mid = Math.floor((low + high) / 2);

        /* If 'key' is equal to the element at the middle index, then print the element
         * and close the readline module.
         */
        if (str[mid] == key) {
            console.log(key + " is present at index " + mid);
            rl.close();
        }

        /* If 'key' is less than the element at the middle index, then call 'binSearch()'
         * function, passing 'mid-1' as the higher index.
         */
        else if (key < str[mid]) {
            binSearch(str, key, low, mid - 1);
        }

        /* If 'key' is greater than the element at the middle index, then call 'binSearch()'
         * function, passing 'mid+1' as the lower index.
         */
        else {
            binSearch(str, key, mid + 1, high);
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