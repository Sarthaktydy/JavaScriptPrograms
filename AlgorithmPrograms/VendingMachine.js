/******************************************************************************
 *  Compilation:  node VendingMachine.js
 *  
 *  Purpose: Program to calculate the minimum number of Notes as well as the
 *           Notes to be returned by the Vending Machine as a Change.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   16-10-2018
 *
 ******************************************************************************/

// This array contains all the notes required by the Vending Machine to give output.
var notes = [1000, 500, 100, 50, 10, 5, 2, 1];

// It is the index for 'notes' array, initialized as '0'.
var i = 0;

// It is to take count of minimum number of notes required.
var sum = 0;

// Implementing the Readline module in this application.
var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

// Asking the user to input the amount.
rl.question("Enter the amount: ", function(answer) {

    // Storing the input in 'amt' variable in Number type.
    var amt = Number(answer);

    // Validate if the amount is positive or not.
    if (amt > 0) {

        // If yes, then call 'vendingMachine()' function.
        vendingMachine(amt);
    } else {
        console.log("Invalid Amount!");
    }
});

/**
 * Function to take amount as an input and print how many number of each note
 * you'll get. e.g. 1000,500,100,etc.
 * 
 * @param amt It is the amount entered in the machine.
 */
function vendingMachine(amt) {

    /** 
     * Will check if 'amt' is greater than amount present at 'i' index in 'notes' array.
     * If yes, then it will print no. of notes for that particular amount.
     */
    if (amt > notes[i]) {
        sum += Math.floor(amt / notes[i]);
        console.log(Math.floor(amt / notes[i]) + " Rs." + notes[i] + " Notes");
        amt = amt % notes[i];
    }

    // Incrementing the index of 'notes' array.
    i++;

    /** 
     * When amt reaches zero, then it will print minimum number of notes required by the
     * Vending Machine.
     */
    if (amt == 0) {
        console.log("Minimum number of notes required: " + sum);
        rl.close();
    }

    // calling vendingMachine() method recursively
    vendingMachine(amt);
}