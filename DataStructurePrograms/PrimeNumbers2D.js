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

var arr = new Array(10);

for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array();
}

function print2DPrimes() {
    var a = getPrimes(1000);
    var low = 0;
    var high = 100;
    var i = 0,
        j = 0;
    while (j < arr.length && i < a.length) {
        while (a[i] > low && a[i] < high) {
            arr[j].push(a[i]);
            i++;
        }
        j++;
        low += 100;
        high += 100;
    }
    show2DArray();
}

/**
 * function to print the 2D array
 */

function show2DArray() {

    // taking an empty string to print the column array for each row.
    var str = "";

    // loop running to print values for each row
    for (var i = 0; i < arr.length; i++) {

        // loop running to print value of each column 
        for (var j = 0; j < arr[i].length; j++) {

            // concatenating the string with each value of the column
            str = str + arr[i][j] + ", ";
        }

        // printing the value of the string and initializing it again to empty string
        console.log("{ " + str + "}");
        str = "";
    }

    // exiting the process & terminating the program
    process.exit();
}

print2DPrimes();