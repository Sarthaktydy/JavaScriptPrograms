/******************************************************************************
 *  Compilation:  node PrimesWithin1000.js
 *  
 *  Purpose: Program to print all the Prime Numbers from 0 to 1000.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   16-10-2018
 *
 ******************************************************************************/

// Initializing the 'res' variable which will validate for prime numbers.
var res = true;
console.log("Prime numbers within 1000 are:");

/**
 * Function to get all primes numbers from '0' to 'n'.
 * 
 * @param {Number} n  It is the range in which the function will get the Prime Numbers.
 * 
 * @returns {Array} arr  It is the array of Prime Numbers which is returned.
 */
function getPrimes(n) {
    var arr = [];

    /* Loop to check each number for being prime from 2 to 1000.
     * 'i' is initialized as 2, as 2 is the lowest prime number.
     */
    for (var i = 2; i < n; i++) {

        // Declaring res as true for each number 'i'
        res = true;

        /* Inner loop which will run from 2 to 'i/2'. As, least factor for any number
         * will be 2 (other than 1), so loop will run till 'i/2'.
         */
        for (var j = 2; j < i / 2; j++) {

            /* Check if 'i' is perfectly divisible by any number within 'i/2'.
             * if yes, then it is not a prime number, so declare res as false
             */
            if (i % j == 0) {
                res = false;
                break;
            }
        }

        // If res is still true, then it is a prime number, so print it.
        if (res) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(getPrimes(1000));