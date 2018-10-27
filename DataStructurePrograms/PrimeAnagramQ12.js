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

/**
 * Function to check whether two Numbers are an anagram or not.
 * i.e. characters in one Number is either exactly same or not as the second Number.
 * 
 * @param {Number} num1 It is the first Number to check for anagram.
 * @param {Number} num2 It is the second Number to check for anagram.
 * 
 * @returns {Boolean} It returns true/false after checking for anagram.
 */
function checkAnagram(num1, num2) {

    // Converting 'num1' & 'num2' to String for better Anagram Comparision.
    var str1 = num1.toString();
    var str2 = num2.toString();

    // checking if length of two Numbers are not equal. If true, they can't be an Anagram.
    if (str1.length != str2.length) {
        return false;
    }

    // Converting Numbers into character array.
    var arr1 = str1.split('');
    var arr2 = str2.split('');

    // sorting the two character arrays.
    arr1.sort();
    arr2.sort();

    // initializing the count variable to check if each value of the two arrays are equal or not.
    var count = 0;

    // loop to check for equality of values at each index of the two arrays.
    for (var i = 0; i < str1.length; i++) {

        // condition to check if values at a specific index is equal or not for arr1 & arr2
        if (arr1[i] == arr2[i]) {

            // incrementing the count if condition is true.
            count++;
        }
    }

    /* Check if count is equal to length of the string. 
     * If yes, that means all values are equal, Hence they are an Anagram.
     */
    if (count == str1.length) {
        return true;
    }

    // If no, that means they are not an Anagram.
    else {
        return false;
    }
}

var arr = [new Array(), new Array()];

function getArray() {
    var prime = getPrimes(1000);
    for (var i = 0; i < prime.length - 1; i++) {
        for (var j = i + 1; j < prime.length; j++) {
            if (checkAnagram(prime[i], prime[j])) {
                arr[0].push("{" + prime[i] + "," + prime[j] + "}");
            }
        }
    }
    var bool = true;
    for (var i = 0; i < prime.length - 1; i++) {
        for (var j = i + 1; j < prime.length; j++) {
            if (checkAnagram(prime[i], prime[j])) {
                bool = false;
            }
        }
        if (bool) {
            arr[1].push(prime[i]);
        }
        bool = true;
    }
    console.log(arr);
}

getArray();