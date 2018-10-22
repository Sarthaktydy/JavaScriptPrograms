/******************************************************************************
 *  Compilation:  node CoupounNumbers.js
 *  
 *  Purpose: To Check how many random numbers are required for generating a
 *           specific number of unique coupouns.
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

// Asking user to enter how many distinct coupouns is required to generate.
rl.question("Enter value of N: ", function(answer) {

    // taking input and converting it into Number type
    var n = Number(answer),
        coupouns = [],
        distinct = 0,
        no = 0,
        count = 0,
        j;

    // Loop will run till 'n' distinct coupouns are generated.
    while (distinct < n) {

        // Generating a random number within the range of 0 to n*5.
        no = Math.floor(Math.random() * n * 5);

        // Incrementing the count as number of times the loop will run.
        count++;

        // initializing 'j' to count if the generated random is unique or not.
        j = 0;

        // Loop will run from 'i' to 'distinct' 
        for (var i = 0; i < distinct; i++) {

            /* Condition to check if number generated is equal to any number 
             * present in the array of distinct coupoun numbers.
             */
            if (no != coupouns[i]) {
                j++;
            }
        }

        // Condition to check if j is equal to distinct or not.
        if (distinct == j) {

            // If yes than adding the number 'no' in 'coupouns' array and incrementing 'distinct';
            coupouns[distinct] = no;
            distinct++;
        }
    }

    /* After exiting the loop printing the value of count as how many times the loop ran, 
     * i.e. how many random numbers were generated to find 'n' distinct coupouns.
     */
    console.log("Total random numbers needed to find " + n +
        " distinct coupoun numbers is: " + count + "\n");
    process.exit();
});