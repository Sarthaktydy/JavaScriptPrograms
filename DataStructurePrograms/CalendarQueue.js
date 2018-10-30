var q = require("./Queue");
var d = require("/home/bridgelabz/NishPrograms/JavaScriptPrograms/AlgorithmPrograms/DayOfWeek.js");
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

var day = new q.Queue();
var date = new q.Queue();
var weekDay = new q.Queue();

function getCalendar(m, y) {
    var dayArr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    for (var i = 0; i < dayArr.length; i++) {
        day.enqueue(dayArr[i]);
    }

    var limit;

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

    for (var i = 1; i <= limit; i++) {
        date.enqueue(i);
    }

    weekDay.enqueue(day);
    var dow = d.dayOfWeek(1, m, y);

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