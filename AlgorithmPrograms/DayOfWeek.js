/******************************************************************************
 *  Compilation:  node DayOfWeek.js
 *  
 *  Purpose: Program that takes a date as input and prints the day of the week
 *           that date falls on.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   16-10-2018
 *
 ******************************************************************************/

function takeInput() {
    // Implementing the Readline module in this application.
    var readline = require('readline');

    // Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
    var rl = readline.createInterface(process.stdin, process.stdout);

    // asking the user to input day
    rl.question("Enter day:   ", function(ans1) {

        // asking the user to input month
        rl.question("Enter month: ", function(ans2) {

            // asking the user to input year
            rl.question("Enter year:  ", function(ans3) {

                // Storing inputs in 'dd', 'mm' & 'yy' variables as Number type.
                var dd = Number(ans1);
                var mm = Number(ans2);
                var yy = Number(ans3);

                // Validating if ddm mm === e9
                if (dd > 0 && mm > 0 && yy > 0) {
                    dayOfWeek(dd, mm, yy);
                } else {
                    console.log("Invalid Input!\nDate can't be negative!");
                    rl.close();
                }
            });
        });
    });
}
/**
 * Static method to determine the Day of the Week for the given date using
 * formulas for Gregorian calendar.
 * 
 * @param dd is the day of the month (1-31).
 * @param mm is the month of the year(1-12).
 * @param yy is the year.
 */
function dayOfWeek(dd, mm, yy) {
    if (dd > 31 || dd < 1 || mm > 12 || mm < 1) {
        System.err.println("Invalid date!");
        rl.close();
    }

    // Formulas for Gregorian calendar to determine the day of the week
    var y = yy - Math.floor((14 - mm) / 12);
    var x = (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400));
    var m = mm + 12 * Math.floor((14 - mm) / 12) - 2;
    var d = (dd + x + Math.floor(31 * m / 12)) % 7;

    //Array to store the names of days of the week.
    // var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // console.log("The day on " + dd + "/" + mm + "/" + yy + " is: " + d + " (" + days[d] + ")");
    return d;
    rl.close();
}
//takeInput();

module.exports = { dayOfWeek };