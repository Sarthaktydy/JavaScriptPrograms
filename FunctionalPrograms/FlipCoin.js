/******************************************************************************
 *  Compilation:  node FlipCoin.js
 *  
 *  Purpose: Flipping a coin 'N' number of times and check number of occurence
 *           Heads & Tails and print it. 'N' is the input taken by user.
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

// Asking user to enter how many times he/she wants to flip the coin.
rl.question("How many times you want to flip the coin? ", function(answer) {

    var noOfTimes = Number(answer);

    // Condition to check if entered value is positive or not.
    if (noOfTimes < 0) {
        console.log("Please enter a positive value");
        process.exit();
    }

    // Initializing the count of number of Heads & Tails.
    var heads = 0,
        tails = 0;

    // Loop to generate heads or tails 'noOfTimes' number of times.
    for (var i = 0; i < noOfTimes; i++) {

        /* Condition to check if the random number generated is greater than 0.5 or not.
         *  If yes, increment the Heads. If no, increment the Tails.
         */
        if (Math.random() > 0.5) {
            heads++;
        } else {
            tails++;
        }
    }

    // Print number of heads & tails encountered. Also percentage of heads & tails.
    console.log(`No of heads: ${heads} & Percentage: ${(heads/noOfTimes)*100}%\n` +
        `No of tails: ${tails} & Percentage: ${(tails/noOfTimes)*100}%\n`);
    rl.close();
});