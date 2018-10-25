var l = require("./Stack");

var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Enter data: ", function(ans1) {
    var key = String(ans1);
    checkIfBalanced(key);
});