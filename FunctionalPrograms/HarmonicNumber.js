/******************************************************************************
 *  Compilation:  node HarmonicNumber.js
 *  
 *  Purpose: Program to print the Nth harmonic number from the formula: 
 *           " Nth Harmonic Number = 1/1 + 1/2 + ... + 1/N ".
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

// Ask the user to enter value of N to find Nth Harmonic Number.
rl.question("Enter value of N: ", function(answer) {

    // Store the input in 'no' as Number type.
    var no = Number(answer);

    // Validate if 'no' is equal to '0'. If yes, than invalid number & terminate the program.
    if (no == 0) {
        console.log("Invalid number!");
        process.exit();
    }

    // Initialize the 'sum' variable to 0 for storing the sum of the series.
    var sum = 0;

    // Loop to run 'no' times to find the Nth Harmonic Number.
    for (var i = 1; i < no; i++) {
        sum += 1 / i;
    }

    // Print the Nth Harmonic Number to the console.
    console.log(`${no}th harmonic number is: ${sum}`);
    process.exit();
});