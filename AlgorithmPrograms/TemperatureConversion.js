/******************************************************************************
 *  Compilation:  node TemperatureConversion.js
 *  
 *  Purpose: Program that takes input of temperature & its unit and converts its
 *           unit based on the input. i.e Fahrenheit to Celsius or Celsius to 
 *           Fahrenheit accordingly.
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

// asking the user to input day
rl.question("Enter the Temperature: ", function(ans1) {

    // asking the user to input month
    rl.question("Enter the Unit: ", function(ans2) {
        var temp = Number(ans1);
        var unit = String(ans2);
        temperatureConversion(temp, unit);
    });
});


/**
 * Function to convert temperature based on its unit. i.e. Celsius to Farenheit &
 * Farenheit to Celsius.
 * 
 * @param {Number} temp It is the temperature's degree you've entered in number
 * @param {String} unit It is the unit of the temperature.
 */
function temperatureConversion(temp, unit) {

    // Check if unit entered is Farenheit.
    if (unit.startsWith("F") || unit.startsWith("f")) {
        console.log(temp + " F in Celsius is " + ((temp - 32) * 5 / 9) + " C");
        rl.close();
    }

    // Check if unit entered is Celsius.
    else if (unit.startsWith("C") || unit.startsWith("c")) {
        console.log(temp + " C in Farenheit is " + ((temp * 9 / 5) + 32) + " F");
        rl.close();
    }

    // Else the unit is invalid.
    else {
        console.log("Invalid Unit! Please enter in Fahrenheit or Celsius.");
        rl.close();
    }
}