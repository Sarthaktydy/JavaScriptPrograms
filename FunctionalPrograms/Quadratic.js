/******************************************************************************
 *  Compilation:  node Quadratic.js
 *  
 *  Purpose: Program to find the roots of a Quadratic equation where all the 
 *           numerical values of the equation is provided by the user.
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

// Printing the default Quadratic equation to help the user provide a better input.
console.log("(a)x^2 + (b)x + (c)");

// Asking the user to provide the value of 'a'.
rl.question("Put the value of 'a' : ", function(ans1) {

    // Asking the user to provide the value of 'b'.
    rl.question("Put the value of 'b' : ", function(ans2) {

        // Asking the user to provide the value of 'c'.
        rl.question("Put the value of 'c' : ", function(ans3) {

            // Storing the inputs in 'a', 'b' & 'c' variables respectively.
            var a = Number(ans1),
                b = Number(ans2),
                c = Number(ans3);

            // Calling findRoots() method to find the roots for the equation.
            findRoots(a, b, c);
        });
    });
});

/**
 * Function to find the roots of a Quadratic equation by providing all the numerical values.
 * 
 * @param {Number} a It is the numerical coefficient of 'x^2' in the Quadratic equation.
 * @param {Number} b It is the numerical coefficient of 'x' in the Quadratic equation.
 * @param {Number} c It is the constant of the Quadratic equation.
 */
function findRoots(a, b, c) {

    // Formulas to determine the roots of the Quadratic Equation.
    var delta = Math.abs(b * b - 4 * a * c);
    var root1 = ((0 - b) + Math.sqrt(delta)) / (2 * a);
    var root2 = ((0 - b) - Math.sqrt(delta)) / (2 * a);

    // Printing the 2 roots of the equation.
    console.log("\n1st Root = " + root1);
    console.log("2nd Root = " + root1);
    rl.close();
}