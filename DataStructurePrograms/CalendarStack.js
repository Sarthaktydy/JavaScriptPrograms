var s = require("./Stack");
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

var day = new s.Stack();
var date = new s.Stack();
var weekDay = new s.Stack();

function reverseStack(stk, size) {
    var r = new s.Stack();
    for (var i = 0; i < size; i++) {
        r.push(stk.pop());
    }
    //r.show();
    return r;
}

function getCalendar(m, y) {
    var dayArr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    var dateArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    for (var i = 0; i < dayArr.length; i++) {
        day.push(dayArr[i]);
    }
    weekDay.push(day);
    var dow = d.dayOfWeek(1, m, y);

    var limit = dateArr.length;
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
        date.push(i);
    }

    var da = reverseStack(date, date.size);

    for (var i = 1; i < dayArr.length; i++) {
        var k = new s.Stack();
        for (var j = 0; j < dayArr.length; j++) {
            if (i == 1 && j < dow) {
                k.push(" ");
            } else if (!da.isEmpty()) {
                k.push(da.pop());
            } else {
                k.push(" ");
            }
        }
        weekDay.push(k);
    }

    console.log("");

    var w, v, str = "";
    var wd = reverseStack(weekDay, weekDay.size);
    for (var i = 0; i < 7; i++) {
        w = wd.pop();
        v = reverseStack(w, w.size);
        //v.show();
        for (var r = 0; r < 7; r++) {
            if (v.peek() < 9) {
                str = str + " " + v.pop() + " ";
            } else if (v.peek() == null) {
                str = str + "  ";
            } else {
                str = str + v.pop() + " ";
            }
        }
        console.log(str);
        str = "";
    }
    rl.close();
}