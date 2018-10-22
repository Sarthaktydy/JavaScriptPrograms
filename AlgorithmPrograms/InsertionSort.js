/******************************************************************************
 *  Compilation:  node InsertionSort.js
 *  
 *  Purpose: Program to sort a given array using Insertion Sort Algorithm.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   16-10-2018
 *
 ******************************************************************************/

// Array which will be sorted.
var arr = ["nishant", "akshansh", "chiraag", "sarthak", "deepankan"];

/**
 * Function to sort a given array using Insertion Sort Algorithm.
 * 
 * @param a It is the array to be sorted.
 */
function sort(a) {
    var key, j;

    // Loop will run from '0' till 'a.length', 'i' is the index.
    for (var i = 0; i < a.length; ++i) {

        /* 'Key' is the number, present at 'i' index which will be compared with the
         * elements present to it's left. Left element's index is stored in 'j'.
         */
        key = a[i];
        j = i - 1;

        // Loop will run till j is positive & key is less than number present at j index.
        while (j >= 0 && key < a[j]) {

            // Moving each number to it's right index place till the condition satisfies.
            a[j + 1] = a[j];

            // Decrementing j until the condition satisfies.
            j--;
        }

        // After that, assiging 'key' to it's right position & again for loop runs.
        a[j + 1] = key;
    }
}

// Calling 'sort()' method to start sorting the elements.
sort(arr);

// Printing the array after sorting.
console.log(arr);