/******************************************************************************
 *  Compilation:  node UnorderedList.js
 *  
 *  Purpose: Read the Text from a file, split it into words and arrange it as 
 *           Linked List. Take a user input to search a Word in the List. If the 
 *           Word is not found then add it to the list, and if it found then 
 *           remove the word from the List. In the end save the list into a file.
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

// Asking the user to enter String to search
rl.question("Enter the String you want to search: ", function(ans1) {

    var key = String(ans1); // Storing the input in 'key'.

    // Calling searchAndEdit() function.
    searchAndEdit(key);
});

/**
 * Function to Read the Text from a file, split it into words and arrange 
 * it as Linked List. Take a word as parameter to search in the List.
 * If the Word is not found then add it to the list, and if it found then 
 * remove the word from the List. In the end save the list into a file.
 * 
 * @param {String} key  It is the user input String to search in the file.
 */
function searchAndEdit(key) {

    // Implementing the File System module in this application.
    var fs = require('fs');

    /** 
     * Using 'fs.readFileSync()' to read file at the given path, and storing 
     * it's String value in 'text' variable using 'toString()' function.
     */
    var text = fs.readFileSync('/home/bridgelabz/NishPrograms/TextFilesForTest/String.txt').toString();

    // Storing the text in str array by splitting the text by ' ' a space.
    var str = text.split(' ');

    // Creating an object of LinkedList() to use it's functions.
    var ll = new l.LinkedList();

    // For loop to add all the strings of the str array into the Linked List.
    for (var i = 0; i < str.length; i++) {

        // Calling the addAppend() function.
        ll.addAppend(str[i]);
    }

    // Condition to search for the desired word in the list using search() method.
    if (ll.search(key)) {

        // If found, removed from the list.s
        console.log("\n" + key + " is found and removed from the list!!\n");
        ll.remove(key);
        ll.show();
    } else {

        // If not found, added to the list.
        console.log("\n" + key + " is not found, so added to the list\n");
        ll.addAppend(key);
        ll.show();
    }

    // Calling getList() function to get the list in a String format.
    var st = ll.getList();

    // Calling writeFileSync() function to write 'st' to the file.
    fs.writeFileSync('/home/bridgelabz/NishPrograms/TextFilesForTest/String.txt', st);

    rl.close();
}