var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

// Asking the user to enter Principle amount
rl.question("Enter number of test cases: ", function(ans1) {
    var n = Number(ans1);
    var arr = new Array(n);
    takeInput(n, arr);
});
var i = 0;

function takeInput(n, arr) {
    if (i == n) {
        findBST(arr);
        rl.close();
    } else {
        rl.question("Enter: ", function(ans) {
            arr[i] = Number(ans);
            i++;
            takeInput(n, arr);
        });
    }
}

function catalanNumber(n) {
    var fact = 1;
    var n1 = n + 1;
    for (var i = 1; i <= n; i++) {
        fact *= n1;
        fact /= (i + 1);
        n1++;
    }
    return fact;
}

function findBST(arr) {
    var b = 0;
    for (var i = 0; i < arr.length; i++) {
        console.log(catalanNumber(arr[i]));
    }
    rl.close();
}