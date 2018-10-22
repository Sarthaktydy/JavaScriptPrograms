/******************************************************************************
 *  Compilation:  node WindChill.js
 *  
 *  Purpose: Program to compute Effective Temperature based on the Temperature 
 *           (in Fahrenheit) and Wind Speed (in Miles/Hour or Mph) according to
 *           the National Weather Service.
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

// Asking the user to enter the Temperature in Fahrenheit.
rl.question("Enter the temperature in Fahrenheit : ", function(ans1) {

    // Asking the user to enter the Wind Speed in Miles Per Hour
    rl.question("Enter wind speed in mph : ", function(ans2) {

        // Storing the inputs in 'temp' & 'velocity' variables in Number type.
        var temp = Number(ans1),
            velocity = Number(ans2);

        // Calling the effectiveTemp() method to calculate the effective temperature.
        effectiveTemp(temp, velocity);
    });
});

/**
 * Function to calculate Effective Temperature based on the Temperature & Wind Speed.
 * 
 * @param {Number} temp      It is the temperature in Fahrenheit.
 * @param {Number} velocity 
 */
function effectiveTemp(temp, velocity) {

    /* Validation to check that the temp should not be greater than 50`F &
     * Speed should be in the range of 3MPH to 120MPH. As this formula can calculate
     * effective temperature only if these conditions is fulfiled.
     */
    if (temp > 50 || velocity > 120 || velocity < 3) {

        // If yes, then can't compute, so close the readline module.
        System.err.println("Cannot Compute Effective Temperature for this data!");
        rl.close();
    }

    // Formula of National Weather Service to calculate Effective Temperature.
    var wc = 35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) * Math.pow(velocity, 0.16);

    // Print the Effective temperature.
    console.log("Effective temperature is: " + wc + " °F");
    rl.close();
}