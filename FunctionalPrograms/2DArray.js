/******************************************************************************
 *  Compilation:  node 2DArray.js
 *  
 *  Purpose: To take user input for a 2D array elements, 
 *           then create a 2D array in the memory and print it.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   16-10-2018
 *
 ******************************************************************************/

// Implementing the Readline module in this application.
var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

// initializing variables row and column of 2D Array
var row = 0,
    column = 0;


// Taking user input for no of rows to be created
rl.question("Enter number of rows: ", function(ans1) {

    // Taking user input for no of columns to be created
    rl.question("Enter number of columns: ", function(ans2) {

        // converting user input to Number data type and storing it into row & column variable
        row = Number(ans1);
        column = Number(ans2);

        // checking if user input for row and column are greater than zero or not
        if (row > 0 && column > 0) {

            // asking user to enter all the values of the array
            console.log("Enter " + row * column + " values: ");

            // calling getInput() function to take user input
            getInput();

            // if row or column is negative, exit the program
        } else {
            console.log("Invalid Input!");
            rl.close();
        }
    });
});

// initialize the array for row input
var arr = [];

// initialize the array for column input for each row;
var arr1 = [];

// initializing the index of row & column for the array;
var i = 0,
    j = 0;

/**
 * Function to take input for 2D array based on number of row and columns.
 */
function getInput() {

    /* if condition to check if 'j' (column index) has reached the value of 'column', 
     * i.e. array for index 'j' is full, so move to next row.
     */
    if (j == column) {

        // push arr1 to arr in the next index
        arr.push(arr1);

        // again initialize arr1 to an empty array as well as it's index to 0
        arr1 = [];
        j = 0;

        // increment the row index
        i++;

        /* function to check if 'i' (row index) is equal to number of rows
         * i.e. the array is full, so calling show2DArray method
         */
        if (i == row) {

            // call the method to print the array
            show2DArray();
        }
    }

    // asking user to input values
    rl.question("", function(ans) {

        // pushing the input value to arr1 (column array).
        arr1.push(Number(ans));

        // incrementing the column array index
        j++;

        // calling this same method by recursion until the array is full.
        getInput();
    });
}

/**
 * function to print the 2D array
 */
function show2DArray() {

    // taking an empty string to print the column array for each row.
    var str = "";

    // loop running to print values for each row
    for (var i = 0; i < row; i++) {

        // loop running to print value of each column 
        for (var j = 0; j < column; j++) {

            // concatenating the string with each value of the column
            str = str + arr[i][j] + " ";
        }

        // printing the value of the string and initializing it again to empty string
        console.log("{ " + str + "}");
        str = "";
    }

    // exiting the process & terminating the program
    process.exit();
    rl.close();
}