/******************************************************************************
 *  Compilation:  node Calendar.js
 *  
 *  Purpose: Program that takes the month and year as command-line arguments 
 *           and prints the Calendar of the month.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   23-10-2018
 *
 ******************************************************************************/

// Importing the DayOfWeek module in this application.
var d = require("/home/bridgelabz/NishPrograms/JavaScriptPrograms/AlgorithmPrograms/DayOfWeek.js");

// Implementing the Readline module in this application.
var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

// asking the user to input month
rl.question("Enter month: ", function(ans2) {

    // asking the user to input year
    rl.question("Enter year:  ", function(ans3) {

        // Storing inputs in 'dd', 'mm' & 'yy' variables as Number type.
        var mm = Number(ans2);
        var yy = Number(ans3);

        // Validating if dd & mm are valid or not.
        if (mm > 0 && yy > 0 && mm <= 12) {

            // If yes, then calling displayCalendar() function passing 'mm' & 'yy'.
            displayCalendar(mm, yy);
        } else {
            console.log("Invalid Input!\nDate can't be negative!");
            rl.close();
        }
    });
});

// Creating a 2D Array to store the calender, of size 6 X 7.
var cal = new Array(6);
for (var i = 0; i < 6; i++) {
    cal[i] = new Array(7);
}

/**
 * Function to display the calender using 2D Array. The first dimension contains
 * the week of the month and the second dimension stores the day of the week.
 * 
 * @param {Number} m  It is the month of the year
 * @param {Number} y  It is the year
 */
function displayCalendar(m, y) {

    // Variable which will set how many maximum days are in a month
    var limit = 0;

    // Validating the month & setting the limit accordingly.
    if (m == 4 || m == 6 || m == 9 || m == 11) {
        limit = 30;
    } else if (m == 2) {
        if (y % 4 == 0 || y % 400 == 0 && y % 100 != 0)
            limit = 29;
        else
            limit = 28;
    } else {
        limit = 31;
    }

    // Array storing each month Name.
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];

    console.log(month[m - 1] + " " + y);

    // Calling dayOfWeek() function to get the day of the first day of the m & y.
    var day = d.dayOfWeek(1, m, y);
    var date = 1;
    console.log("Su Mo Tu We Th Fr Sa");

    // For loop will run till length of the 'cal' array.
    for (var i = 0; i < cal.length; i++) {

        // For loop will run till length of 'cal[i]' array.
        for (var j = 0; j < cal[i].length; j++) {

            // Checking if date has reached the limit, if yes then break the loop.
            if (date > limit) {
                break;
            }

            // Adding empty spaces before the starting day of the month.
            if (i == 0 && j < day) {
                cal[i][j] = " ";
            }

            // Adding each date in the Calender.
            else {
                cal[i][j] = date++;
            }
        }
    }

    // String to print a row of the 'cal' array.
    var str = "";

    // For loop which will print the 2D Array Calender.
    for (var i = 0; i < cal.length; i++) {

        for (var j = 0; j < cal[i].length; j++) {

            if (cal[i][j] < 10) {
                str = str + " " + cal[i][j] + " ";
            } else if (cal[i][j] == undefined) {
                str = str + "  ";
            } else {
                str = str + cal[i][j] + " ";
            }
        }

        console.log(str);
        str = "";
    }

    rl.close();
}