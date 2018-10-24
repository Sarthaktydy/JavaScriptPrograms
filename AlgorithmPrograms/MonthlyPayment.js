/******************************************************************************
 *  Compilation:  node MonthlyPayment.js
 *  
 *  Purpose: Program which determines how much monthly payment one have make as
 *           EMI based on Principle amount, rate of compound interest & years to
 *           pay within.
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

// Asking the user to enter Principle amount
rl.question("Enter the Principal User Amount: ", function(ans1) {

    // Asking the user to enter ROI.
    rl.question("Enter rate of interest: ", function(ans2) {

        // Asking the user to input year.
        rl.question("Enter years to pay within: ", function(ans3) {

            // Storing all three inputs in 'p', 'r' & 'y' variables as Number Type.
            var p = Number(ans1);
            var r = Number(ans2);
            var y = Number(ans3);

            // Validating if all the inputs are positive or not.
            if (p > 0 && r > 0 && y > 0) {

                // If yes, then call monthlyPayment() function.
                monthlyPayment(p, r, y);
            } else {

                // If no, then invalid input.
                console.log("Invalid Input!\nValues can't be negative!");
                rl.close();
            }
        });
    });
});



/**
 * Function used to determine amount you have to pay each month, if you've
 * bought something on loan. Simply, it determines how much EMI you'll have
 * to pay each month for a product.
 * 
 * @param {Number} p It is the principle loan amount of the product.
 * @param {Number} r It is the rate per cent interest compounded monthly.
 * @param {Number} y It is the years in which you have to pay.
 */
function monthlyPayment(p, r, y) {
    var payment = 0;
    var n = 12 * y;
    var r1 = r / (12 * 100);

    // Formula to determine monthly payment.
    payment = p * r1 / (1 - Math.pow(1 + r1, -n));
    console.log("Monthly Payments you will have to pay is Rs." + payment);
    rl.close();
}