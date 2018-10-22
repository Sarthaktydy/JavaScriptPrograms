/******************************************************************************
 *  Compilation:  node PrimeAnagram&Palindrome.js
 *  
 *  Purpose: Program to find the prime numbers that are Anagram and Palindrome.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   16-10-2018
 *
 ******************************************************************************/

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
 * Funtion to check if the number is a palindrome or not.
 * 
 * @param {Number} num It is the number that is to be checked for Palindrome.
 * @returns {Boolean} It returns true/false based on if the number is a Palindrome or not.
 */
function isPalindrome(num) {

    // 'temp' is used to store the value of a, as it will be modified further
    var temp = num,
        r = 0,
        sum = 0;

    if (num > 9) {
        // Loop wil run till 'num' is greater than '0'
        while (temp > 0) {

            // 'r' stores the remainder when a is divided by 10.
            r = temp % 10;

            // 'sum' stores the reversed number
            sum = sum * 10 + r;

            /* 'num' is divided by 10 & loop runs again. 
             * Math.floor() function is used to take integer value after division.
             */
            temp = Math.floor(temp / 10);
        }
    }

    /* If 'temp' is equal to the 'sum', i.e if original number is equal to the reversed
     * number, then it is a Palindrome. So return true or false accordingly.
     */
    if (num == sum)
        return true;
    else
        return false;
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

/**
 * Function to find the Prime numbers that are Anagram and Palindrome.
 */
function check() {

    // Calling the getPrimes() function and storing result in 'primeArr'.
    var primeArr = getPrimes(1000);

    //console.log("Palindromic primes are: ");
    // for (var i = 0; i < primeArr.length; i++) {
    //     if (isPalindrome(primeArr[i])) {
    //         console.log(primeArr[i]);
    //     }
    // }

    // console.log("Anagram primes are: ");
    // for (var i = 0; i < primeArr.length - 1; i++) {
    //     for (var j = i + 1; j < primeArr.length; j++) {
    //         if (checkAnagram(primeArr[i], primeArr[j])) {
    //             console.log(primeArr[i] + " " + primeArr[j]);
    //         }
    //     }
    // }

    console.log("Prime Numbers that are Palindromes & Have an Anagram are: ");

    // This loop stores first value and compares it with all the other values.
    for (var i = 0; i < primeArr.length - 1; i++) {

        // This loop stores values after 'i' to compare them with 'i'.
        for (var j = i + 1; j < primeArr.length; j++) {

            /* Validates if value at 'i' & 'j' in 'primeArr' are an Anagram.
             * And value at 'i' in 'primeArr' is a Palindrome. 
             */
            if (checkAnagram(primeArr[i], primeArr[j]) && isPalindrome(primeArr[i])) {

                // If both condition are true, then print values at 'i' & 'j'.
                console.log(primeArr[i] + " " + primeArr[j]);
            }

            /* Validates if value at 'i' & 'j' in 'primeArr' are an Anagram.
             * And value at 'j' in 'primeArr' is a Palindrome. 
             */
            if (checkAnagram(primeArr[i], primeArr[j]) && isPalindrome(primeArr[j])) {

                // If both condition are true, then print values at 'i' & 'j'.                
                console.log(primeArr[j] + " " + primeArr[i]);
            }
        }
    }
}

// Calls check() method.
check();