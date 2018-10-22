/******************************************************************************
 *  Compilation:  node Stopwatch.js
 *  
 *  Purpose: Program to simulate a "Stopwatch". 
 *           i.e. measuring the time elapsed between the start and end input.
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

// Initialization of 'currTime' variable to store the current time of the system.
var currTime = new Date().getTime();

/*
 * Asking the user to input 1 or 2.
 * 1 to Start the stopwatch, 2 to Stop the stopwatch.
 */
console.log("Enter\n'1' to start the stopwatch\n'2' to Stop the stopwatch\n" +
    "'0' to terminate the program.\n ");
rl.on('line', function(saying) {

    // Asking the user to input till he/she stops the stopwatch.
    rl.prompt();

    // Check if the input is 2.
    if (Number(saying) === 2) {

        // If the input is 2, call the getDIff() function.
        getDiff();
    }

    // Check if the input is 1.
    else if (Number(saying) === 1) {

        // Call the start() method to start the stopwatch.
        start();
    }

    // If the input is 0, terminate the program.
    else if (Number(saying) == 0) {
        rl.close();
    }

    // If the input is something else than 1 or 2, It's an invalid input.
    else {
        console.log("Invalid Input! Enter again");
    }
});

/**
 * Function to start the stopwatch.
 */
function start() {

    /* Initialization of 'currTime' variable to store the current time of the 
     * system everytime user calls it.
     */
    currTime = new Date().getTime();
    return;
}

/**
 * Function to Stop the stopwatch and find the difference b/w start and stop times.
 */
function getDiff() {

    // Store the current time in 'newTime' variable.
    newTime = new Date().getTime();

    // store the difference of 'newTime' and 'currTime'.
    var diff = newTime - currTime;

    /* Print 'diff/1000' in the console as the 'Date().getTime()' function provides 
     * the time in milliseconds, so 'diff' will also be in milliseconds. 
     * But we have to provide the outpot in seconds, so 'diff/1000'.
     */
    console.log(diff / 1000 + " seconds elapsed");
}