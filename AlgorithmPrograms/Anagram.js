// Implementing the Readline module in this application.
var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

// initializing two strigs to take input
var str1 = "",
    str2 = "";

// asking the user to input first string
rl.question("Enter first string: ", function(ans1) {

    // asking the user to input second string
    rl.question("Enter second string: ", function(ans2) {

        // storing String values of two inputs provided by user
        str1 = String(ans1);
        str2 = String(ans2);

        // calling checkAnagram method to check for Anagram
        checkAnagram(str1, str2);
    });
});

/**
 * Function to check whether two string are an anagram or not.
 * i.e. characters in one string is either exactly same or not as the second string.
 * 
 * @param {String} str1 It is the first string to check for anagram.
 * @param {String} str2 It is the second string to check for anagram.
 */
function checkAnagram(str1, str2) {

    // checking if length of two string are not equal. If true, they can't be an Anagram.
    if (str1.length != str2.length) {
        console.log("Strings are NOT an Anagram");
        rl.close();
    }

    // Converting strings into character array.
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
        console.log("Strings are an Anagram");
        rl.close();

    }

    // If no, that means they are not an Anagram.
    else {
        console.log("Strings are NOT an Anagram");
        rl.close();
    }
}