var l = require("./LinkedList");
var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

// Implementing the File System module in this application.
var fs = require('fs');

/* Using 'fs.readFileSync()' to read file at the given path, 
 * and storing it's String value in 'text' variable using 'toString()' function.
 */
var text = fs.readFileSync('/home/bridgelabz/NishPrograms/TextFilesForTest/NumbersInput.txt').toString();
var str = text.split(' ');
var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (var i = 0; i < str.length; i++) {
    var s = str[i] % 11;

    if (arr[s] == 0) {
        arr[s] = new l.LinkedList();
        arr[s].addByOrder(str[i]);
    } else {
        arr[s].addByOrder(str[i]);
    }
}

rl.question("Enter the string to search: " + function(ans) {
    if (!isNaN(key)) {
        var key = Number(ans);
        search(key);
    }
});

function search(key) {
    var k = key % 11;
    console.log(arr[k].search(key));
    if (arr[k].search(key)) {
        console.log("\n" + key + " is found and removed from the list!!\n");
        arr[k].remove(key);
        arr[k].show();
    } else {
        console.log("\n" + key + " is not found, so added to the list\n");
        arr[k].addByOrder(key);
        arr[k].show();
    }
}

search(10);

// if (ll.search(key)) {
//     console.log("\n" + key + " is found and removed from the list!!\n");
//     ll.remove(key);
//     ll.show();
// } else {
//     console.log("\n" + key + " is not found, so added to the list\n");
//     ll.addByOrder(key);
//     ll.show();
// }
// console.log();
// str = "";
// var size = ll.getSize();
// for (var i = 0; i < size; i++) {
//     if (i < size - 1) {
//         str = str.concat(ll.popAtPos(0)).concat(" ");
//     }
//     if (i == size - 1) {
//         str = str.concat(ll.popAtPos(0))
//     }
// }
// console.log(str);

// fs.writeFileSync('/home/bridgelabz/NishPrograms/TextFilesForTest/NumbersInput.txt', str);

// rl.close();