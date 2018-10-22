/******************************************************************************
 *  Compilation:  node BubbleSort.js
 *  
 *  Purpose: Program to sort a given array using Bubble Sort Algorithm.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   16-10-2018
 *
 ******************************************************************************/

// Array which will be sorted.
var arr = ["nishant", "akshansh", "chiraag", "sarthak", "deepankan"];

/**
 * Function to sort a given array using Bubble Sort Algorithm.
 * 
 * @param a It is the array to be sorted.
 */
function sort(a) {
    var len = a.length,
        temp;

    // Outer loop will run from 0 till len-1.
    for (var i = 0; i < len - 1; i++) {

        // Inner loop will run from 0 till len-i-1.
        for (var j = 0; j < len - i - 1; j++) {

            /* If the element present at j is greater than the element present at it's 
             * right index, they will be swapped.
             */
            if (a[j] > a[j + 1]) {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
}

// Calling 'sort()' method to start sorting the elements.
sort(arr);

// Printing the array after sorting.
console.log(arr);