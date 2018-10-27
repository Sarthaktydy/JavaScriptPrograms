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
            displayCalendar(mm, yy);
        } else {
            console.log("Invalid Input!\nDate can't be negative!");
            rl.close();
        }
    });
});

var cal = new Array(6);
for (var i = 0; i < 6; i++) {
    cal[i] = new Array(7);
}

function displayCalendar(m, y) {
    var limit = 0;

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

    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];
    console.log(month[m - 1] + " " + y);

    var day = d.dayOfWeek(1, m, y);
    var date = 1;
    console.log(" S  M  T  W Th  F  S");

    for (var i = 0; i < cal.length; i++) {

        for (var j = 0; j < cal[i].length; j++) {
            if (date > limit) {
                break;
            }
            if (i == 0 && j < day) {
                cal[i][j] = " ";
            } else {
                cal[i][j] = date++;
            }
        }
    }

    var str = "";
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