/******************************************************************************
 *  Compilation:  node CalendarQueue.js
 *  
 *  Purpose: Program that takes the month and year as command-line arguments 
 *           and prints the Calendar of the month using Queue Data Structure.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   23-10-2018
 *
 ******************************************************************************/

// Importing the Queue module in this application.
var q = require("./Queue");


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

        // Validating if ddm mm === e9
        if (mm > 0 && yy > 0 && mm <= 12) {
            getCalendar(mm, yy);
        } else {
            console.log("Invalid Input!\nDate can't be negative!");
            rl.close();
        }
    });
});

// Creating Queue Objects to store the day, dates & month of the calendar.
var day = new q.Queue();
var date = new q.Queue();
var weekDay = new q.Queue();

/**
 * Function to display the calender using Queue Data Structure.
 * 
 * @param {Number} m  It is the month of the year
 * @param {Number} y  It is the year
 */
function getCalendar(m, y) {

    // Array to store all the weekday names.
    var dayArr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    // Enqueuing all the elements of dayArr Array into day Queue.
    for (var i = 0; i < dayArr.length; i++) {
        day.enqueue(dayArr[i]);
    }

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

    // Enqueuing all the dates till the limit in date Queue.
    for (var i = 1; i <= limit; i++) {
        date.enqueue(i);
    }

    // Pushing day Queue into weekDay Queue firstly.
    weekDay.enqueue(day);

    // Determining first day of week by calling dayOfWeek function.
    var dow = d.dayOfWeek(1, m, y);

    // For loop to store the dates respective to the month in weekDay Queue.
    for (var i = 1; i < dayArr.length; i++) {
        var k = new q.Queue();
        for (var j = 0; j < dayArr.length; j++) {
            if (i == 1 && j < dow) {
                k.enqueue(" ");
            } else if (!date.isEmpty()) {
                k.enqueue(date.dequeue());
            } else {
                k.enqueue(" ");
            }
        }
        weekDay.enqueue(k);
    }
    console.log("");

    var w, str = "";
    for (var i = 0; i < 7; i++) {
        w = weekDay.dequeue();
        for (var r = 0; r < 7; r++) {
            if (w.peek() < 10) {
                str = str + " " + w.dequeue() + " ";
            } else if (w.peek() == null) {
                str = str + "  ";
            } else {
                str = str + w.dequeue() + " ";
            }
        }
        console.log(str);
        str = "";
    }
    rl.close();
}