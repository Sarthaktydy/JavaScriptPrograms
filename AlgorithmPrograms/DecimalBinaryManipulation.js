/********************************************************************************
 *  Compilation:  node DecimalBinaryManipulation.js
 *  
 *  Purpose: This Program contains different methods to manipulate between Decimal
 *           and Binary numbers. i.e Conversion b/w these two, swapping nibbles, etc.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   16-10-2018
 *
 ********************************************************************************/

// Implementing the Readline module in this application.
var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

// Asking the user to input a Decimal Number.
rl.question("\nEnter decimal number to convert into binary:   ", function(ans1) {

    // Storing the input in 'num' variable as Number Type.
    var num = Number(ans1);

    // Validating if the input is greater than '0' or not.
    if (num > 0) {

        // If yes, then call 'swapNibbles()' function passing 'num' as the argument.
        swapNibbles(num);
    } else {

        // Else invalid number.
        console.log("Invalid number! Can't convert negative number to binary!");

    }
});

/**
 * Function used to convert decimal number into its binary form. Necessary 
 * padding is done so that it represents the binary form in 4-byte String.
 * 
 * @param   {Number} num  It is the number to be converted.
 * @returns {String} bin  It is the string which stores the binary form of 'num'
 */
function toBinary(num) {
    var temp = num,
        n;
    var bin = "";

    // Loop runs till temp is positive. Then number is converted into binary format.
    while (temp > 0) {
        n = temp % 2;
        bin = n + bin;
        temp = Math.floor(temp / 2);
    }

    /** 
     * Check if length of bin is between 4 & 8, then adds zeroes before the numbers
     * to represent them into 4-Byte String format.
     */
    if (bin.length < 8 && bin.length > 4) {
        while (bin.length <= 7) {
            bin = 0 + bin;
        }
    }

    /** 
     * Check if length of bin is between 8 & 12, then adds zeroes before the numbers
     * to represent them into 4-Byte String format.
     */
    if (bin.length < 12 && bin.length > 8) {
        while (bin.length <= 11) {
            bin = 0 + bin;
        }
    }

    /** 
     * Check if length of bin is between 12 & 16, then adds zeroes before the numbers
     * to represent them into 4-Byte String format.
     */
    if (bin.length < 16 && bin.length > 12) {
        while (bin.length <= 15) {
            bin = 0 + bin;
        }
    }

    // Print the binary form of the number.
    console.log("Binary of " + num + " is " + bin);

    // Return the binary value.
    return bin;
}

/**
 * Function to convert Binary to Decimal number.
 * 
 * @param {String} st  It is binary form of the number to be converted.
 */
function toDecimal(st) {

    // Converting String 'st' into an array & storing it into 'ch' array.
    var ch = st.split('');

    // Initializing the 'sum' variable which'll store the Decimal value as '0'.
    var sum = 0,
        j = ch.length - 1;
    var temp;

    /**
     * This loop will run from 0 to half of the length of array. This loop will
     * swap the values of the array and reverse it.
     */
    for (var i = 0; i < (ch.length) / 2; i++) {
        temp = ch[i];
        ch[i] = ch[j];
        ch[j] = temp;
        j--;
    }

    // This loop will determine the sum i.e the Decimal value of the Binary number passed.
    for (var i = 0; i < ch.length; i++) {
        if (ch[i] == '1') {
            sum += Math.pow(2, i);
        }
    }

    // Returning the Decimal value to the caller.
    return sum;
}

/**
 * Function user to swap the nibbles of a Binary Number, i.e swapping of the
 * 4-bit padding of binary number.
 * @param {Numbers} num 
 */
function swapNibbles(num) {

    // Validating if the number is more than 2047 or not.
    if (num > 2047) {
        System.out.println("Please enter number b/w 0 & 2047 to swap nibbles");
    }

    // Calling toBinary() function and storing it in 'bin' variable
    var bin = toBinary(num);

    // Converting 'bin' into array and storing it into 'ch' variable.
    var ch = bin.split('');
    var temp = '';

    // Initializing the Middle index of the array to swap nibbles.
    var j = (ch.length) / 2;

    // Loop to swap nibbles.
    for (var i = 0; i < (ch.length - 1) / 2; i++) {
        temp = ch[i];
        ch[i] = ch[j];
        ch[j] = temp;
        j++;
    }

    // Calling toDecimal() function and storing it into 'n' variable.
    var n = toDecimal(ch.join(''));

    // Printing the values.
    console.log("After swapping nibbles: " + ch.join(''));
    console.log("After conversion: " + n);

    // Calling isPowerOf2() function.
    isPowerOf2(n);
    rl.close();
}

/**
 * Function to check if a given number is power of 2 or not.
 * 
 * @param {Number} n It is the number to be checked for being power of 2.
 */
function isPowerOf2(n) {

    // 'temp' variable is to be compared with 'n' for being power of 2.
    var temp = 1,
        count = 1;

    // This loop will run till temp is less than or equal to n.
    while (temp <= n) {

        // multiplying temp by 2 everytime, i.e. finding count'th power of 2.
        temp = temp * 2;

        // Increasing the count variable to find which power of 2 is 'n'.
        count++;

        // if temp gets equal to 'n' that means it is a power of 2.
        if (temp == n) {
            console.log("It is a Power Of 2!!\n2^" + count + " = " + n + "\n");
            return;
        }
    }

    // If not then it is not a power of 2.
    console.log("It is not a power of 2\n");
}