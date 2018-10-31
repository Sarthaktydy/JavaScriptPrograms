/******************************************************************************
 *  Compilation:  node OrderedList.js
 *  
 *  Purpose: Read a List of Numbers from a file and arrange it ascending Order
 *           in a Linked List. Take user input for a number, if found then pop
 *           the number out of the list else insert the number in appropriate 
 *           position.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   23-10-2018
 *
 ******************************************************************************/

// Importing the LinkedList module in this application.
var l = require("./LinkedList");

// Implementing the Readline module in this application.
var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

// Asking the user to enter Number to search
rl.question("Enter the Number you want to search: ", function(ans1) {

    var key = Number(ans1); // Storing the input in 'key'.

    // Calling searchAndEdit() function.
    searchAndEdit(key);
});

/**
 * Read a List of Numbers from a file and arrange it ascending Order in a 
 * Linked List. Take user input for a number, if found then pop the number
 * out of the list else insert the number in appropriate position.
 * 
 * @param {String} key  It is the user input String to search in the file.
 */
function searchAndEdit(key) {

    // Implementing the File System module in this application.
    var fs = require('fs');

    /* Using 'fs.readFileSync()' to read file at the given path, 
     * and storing it's String value in 'text' variable using 'toString()' function.
     */
    var text = fs.readFileSync('../../TextFilesForTest/NumbersInput.txt').toString();

    // Storing the text in str array by splitting the text by ' ' a space.
    var str = text.split(' ');

    // Creating an object of LinkedList() to use it's functions.
    var ll = new l.LinkedList();

    // For loop to add all the strings of the str array into the Linked List.
    for (var i = 0; i < str.length; i++) {

        // Calling the addByOrder() function.
        ll.addByOrder(Number(str[i]));
    }

    // Condition to search for the desired word in the list using search() method.
    if (ll.search(key)) {

        // If found, removed from the list.s
        console.log("\n" + key + " is found and removed from the list!!\n");
        ll.remove(key);
    } else {

        // If not found, added to the list.
        console.log("\n" + key + " is not found, so added to the list\n");
        ll.addByOrder(key);
    }

    // Calling getList() function to get the list in a String format.
    var st = ll.getList();

    // Calling writeFileSync() function to write 'st' to the file.
    fs.writeFileSync('/home/bridgelabz/NishPrograms/TextFilesForTest/NumbersInput.txt', st);

    rl.close();
}