/******************************************************************************
 *  Compilation:  node HashingFunction.js
 *  
 *  Purpose: Program to Create a Slot of 10 to store Chain of Numbers that 
 *           belong to each Slot to efficiently search a number from a given 
 *           set of number.
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

// Implementing the File System module in this application.
var fs = require('fs');

/**
 * Using 'fs.readFileSync()' to read file at the given path, 
 * and storing it's String value in 'text' variable using 'toString()' function.
 */
var text = fs.readFileSync('../../TextFilesForTest/NumbersInput.txt').toString();

// Storing the text in str array by splitting the text by ' ' a space.
var str = text.split(/\s/g);

// Initializing an array having 11 element.
var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

takeInput();

function takeInput() {

    // For loop will run till length of 'str' array.
    for (var i = 0; i < str.length; i++) {

        // Storing the remainder of the element at 'i' in 'str' after dividing by 11.
        var s = str[i] % 11;

        // If the 's' index of arr array has 0, create a new LinkedList and then add by order.
        if (arr[s] == 0) {
            arr[s] = new l.LinkedList();
            arr[s].addByOrder(str[i]);
        }

        // Else add by order in the LinkedList present at 's' index of arr array.
        else {
            arr[s].addByOrder(str[i]);
        }
    }

    // Asking the user to input the number.
    rl.question("Enter the number to search: ", function(ans) {

        // Taki input if it is a number, else invalid input.

        var key = Number(ans);

        // Calling the search() function to search for the key.
        searchNum(key);
    });

}
/**
 * Function to search for a number in the array of Linked Lists.
 * If found, remove it. Else add it at appropiate position.
 * 
 * @param {Number} key  It is the number to be searched
 */
function searchNum(key) {

    // Dividing the input by 11 to find the remainder which will be index in 'arr'
    var k = key % 11;

    if (arr[k] == 0) {
        console.log("\n" + key + " is not found, so added to the list\n");
        arr[k] = new l.LinkedList();
        arr[k].addByOrder(key);
    }

    // If the input is found in 'k' index's List, remove it, else add it by order.
    else if (arr[k].search(key)) {
        console.log("\n" + key + " is found and removed from the list!!\n");
        arr[k].remove(key);
    } else {
        console.log("\n" + key + " is not found, so added to the list\n");
        arr[k].addByOrder(key);
    }
    storeData(arr);
}

function storeData(arr) {
    // Reinitializing str to an empty string.
    str = "";

    // For loop to store the array in 'str' in String format.
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            str = str + i + " | " + arr[i].getList() + " |\n";
        } else {
            str = str + i + " |~|\n";
        }
    }

    console.log(str);

    // Calling writeFileSync() function to store 'str' into a file.
    fs.writeFileSync('/home/bridgelabz/NishPrograms/TextFilesForTest/HashingFunction.txt', str);

    rl.close();
}