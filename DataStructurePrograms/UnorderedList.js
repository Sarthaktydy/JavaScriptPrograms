var l = require("./LinkedList");

var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

// Asking the user to enter Principle amount
rl.question("Enter the String you want to search: ", function(ans1) {
    var key = String(ans1);
    searchAndEdit(key);
});

function searchAndEdit(key) {

    // Implementing the File System module in this application.
    var fs = require('fs');

    /* Using 'fs.readFileSync()' to read file at the given path, 
     * and storing it's String value in 'text' variable using 'toString()' function.
     */
    var text = fs.readFileSync('/home/bridgelabz/NishPrograms/TextFilesForTest/String.txt').toString();
    var str = text.split(' ');
    var ll = new l.LinkedList();
    for (var i = 0; i < str.length; i++) {
        ll.addAppend(str[i]);
    }
    ll.show();

    if (ll.search(key)) {
        console.log("\n" + key + " is found and removed from the list!!\n");
        ll.remove(key);
        ll.show();
    } else {
        console.log("\n" + key + " is not found, so added to the list\n");
        ll.addAppend(key);
        ll.show();
    }
    console.log();
    str = "";
    var size = ll.getSize();
    for (var i = 0; i < size; i++) {
        if (i < size - 1) {
            str = str.concat(ll.popAtPos(0)).concat(" ");
        }
        if (i == size - 1) {
            str = str.concat(ll.popAtPos(0))
        }
    }
    console.log(str)

    fs.writeFileSync('/home/bridgelabz/NishPrograms/TextFilesForTest/String.txt', str);

    rl.close();
}