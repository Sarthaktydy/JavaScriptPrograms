var deq = require("./Deque");

var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Enter the String to check for Palindrome: ", function(ans1) {
    var str = String(ans1);
    checkForPalindrome(str);
});

var d = new deq.Deque();

function checkForPalindrome(str) {
    for (var i = 0; i < str.length; i++) {
        d.addRear(str.charAt(i));
    }
    var size = Math.floor(d.size / 2);
    var bool = true;
    for (var i = 0; i < size; i++) {
        if (d.removeFront() != d.removeRear()) {
            bool = false;
            break;
        }
    }
    if (bool) {
        console.log("This is a palindrome!");

    } else {
        console.log("This is NOT a palindrome!");
    }
    rl.close();
}