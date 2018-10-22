/******************************************************************************
 *  Execution:  node PrimeFactor.js
 *  
 *  Purpose: Program to find prime factors of a number provided by the user
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

// Asking the user to input the number whose prime factors we have to find.
rl.question("Enter the number: ", function(answer) {
    console.log("Prime factors of " + answer + " are:");

    // Storing the input in 'fact' variable in Number type.
    var fact = Number(answer);

    /**
     * As 2 is the smallest prime factor possible for each number. So we will divide
     * the number by 2 till it gives remainder as 0.
     */
    while (fact % 2 == 0) {
        console.log(2);
        fact /= 2;
    }

    /**
     * As 2 is the only even prime number. So all the rest prime number are an odd number.
     * Lowest odd prime number is 3, so we start checking from 3 and increment it by 2 values.
     * And the loop will run till 'fact'. As in case if 'fact' itself is a prime number.
     */
    for (var i = 3; i < fact; i += 2) {
        while (fact % i == 0) {
            console.log(i);
            fact /= i;
        }
    }
    process.exit();
});