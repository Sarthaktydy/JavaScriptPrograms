var l = require("./Stack");

var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Enter data: ", function(ans1) {
    var key = String(ans1);
    checkIfBalanced(key);
});

function checkIfBalanced(key) {

    var str = key.split('');
    console.log(str);
    var val = true;
    var s = new l.Stack();
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '(') {
            s.push(str[i]);
        } else if (str[i] == ')') {
            if (s.isEmpty()) {
                console.log("The entered data does not have Balanced Parentheses!");
                process.exit();
            }
            s.pop();
        }
    }
    if (s.isEmpty()) {
        console.log("The entered data have Balanced Parentheses!");
    } else {
        console.log("The entered data does not have Balanced Parentheses!");
    }
    rl.close();
}