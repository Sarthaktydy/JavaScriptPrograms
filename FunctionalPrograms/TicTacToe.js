/******************************************************************************
 *  Compilation:  node TicTacToe.js
 *  
 *  Purpose: Program to play the "Tic-Tac-Toe" game.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   16-10-2018
 *
 ******************************************************************************/

// Initializing the 2D-Array for representing the Tic-Tac-Toe Board.
var arr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

// Implementing the Readline module in this application.
var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

console.log();

/**
 * Function to show the board of Tic-Tac-Toe.
 * 
 * @param {Array} arr It is the array input which will be displayed.
 */
function showBoard(arr) {
    for (var i = 0; i < 3; i++) {
        console.log(arr[i][0] + " | " + arr[i][1] + " | " + arr[i][2]);
        if (i < 2) {
            console.log("~~~~~~~~~");
        }
    }
    console.log();
}

/**
 * Function to put the user value in the Tic-Tac-Toe board according to the row & column.
 * 
 * @param {Number} row  It is the row on which the marker will be placed.
 * @param {Number} col  It is the column on which the marker will be placed.
 */
function putUser(row, col) {

    // Validation of row and column if they are b/w 1 & 3 or not.
    if (row >= 1 && row <= 3 && col >= 1 && col <= 3) {

        // If yes, then validate again if the given place to put the marker is empty or not.
        if (arr[row - 1][col - 1] === 0) {

            // If yes, then mark that place by putting '1' on that place in the array.
            arr[row - 1][col - 1] = 1;
            showBoard(arr);
            return;
        } else {

            // If not empty, return back to the calling function.
            console.log("Space already occupied, choose another place!");
            return;
        }
    } else {

        // If row & column is not b/w 1 & 3, return back to the calling function.
        console.log("Please enter row/column between 1 & 3!");
        return;
    }
}

/**
 * Function to choose the Computer value in the Tic-Tac-Toe board.
 */
function putComputer() {

    // Initializing the row & column value for the Computer.
    var row = 0,
        col = 0;

    // Taking a boolean value 'res', and initializing it by true.
    var res = true;

    // The loop will run till the value of 'res' is true.
    while (res) {

        // Taking two random values for row & column within the range of 3.
        row = Math.floor(Math.random() * 3);
        col = Math.floor(Math.random() * 3);

        // Validating if the given place according to row & column is empty or not.
        if (arr[row][col] == 0) {

            // If yes, then mark that place by putting '2' on that place in the array.
            arr[row][col] = 2;

            // Set value of 'res' as false to get out of the loop.
            res = false;
        } else {

            // If not empty, set value of 'res' as true to run the loop again.
            res = true;
        }
    }

    // Print what computer chose.
    console.log("Computer chose: " + (row + 1) + ", " + (col + 1));
    showBoard(arr);
}

/**
 * Function to check if the user has won the game or not.
 * 
 * @returns {Boolean} It returns true or false as if user has won or not.
 */
function checkWinForUser() {

    /*
     * Validating if the multiplication of the values present at all possible 
     * straight lines in a '3 X 3' 2D Arary is equal to 1 or not. 
     * i.e. 1 * 1 * 1 = 1, so if it is true, then User wins!
     */
    if (arr[0][0] * arr[0][1] * arr[0][2] == 1 || arr[1][0] * arr[1][1] * arr[1][2] == 1 ||
        arr[2][0] * arr[2][1] * arr[2][2] == 1 || arr[0][0] * arr[1][0] * arr[2][0] == 1 ||
        arr[0][1] * arr[1][1] * arr[2][1] == 1 || arr[0][2] * arr[1][2] * arr[2][2] == 1 ||
        arr[0][0] * arr[1][1] * arr[2][2] == 1 || arr[2][0] * arr[1][1] * arr[0][2] == 1) {

        // If yes, then Print User wins and return true.
        console.log("User Wins!!!!");
        rl.close();
        return true;
    } else {

        // If no, then return false.
        return false;
    }
}

/**
 * Function to check if the Computer has won the game or not.
 * 
 * @returns {Boolean} It returns true or false as if Computer has won or not.
 */
function checkWinForComputer() {

    /*
     * Validating if the multiplication of the values present at all possible 
     * straight lines in a '3 X 3' 2D Arary is equal to 8 or not. 
     * i.e. 2 * 2 * 2 = 8, so if it is true, then User wins!
     */
    if (arr[0][0] * arr[0][1] * arr[0][2] == 8 || arr[1][0] * arr[1][1] * arr[1][2] == 8 ||
        arr[2][0] * arr[2][1] * arr[2][2] == 8 || arr[0][0] * arr[1][0] * arr[2][0] == 8 ||
        arr[0][1] * arr[1][1] * arr[2][1] == 8 || arr[0][2] * arr[1][2] * arr[2][2] == 8 ||
        arr[0][0] * arr[1][1] * arr[2][2] == 8 || arr[2][0] * arr[1][1] * arr[0][2] == 8) {

        // If yes, then Print Computer wins and return true.
        console.log("Computer Wins!!!!");
        rl.close();
        return true;
    } else {

        // If no, then return false.
        return false;
    }

}

/**
 * Function to Start the game of Tic-Tac-Toe.
 */
function startGame() {
    console.log("Welcome to Tic-Tac-Toe\n");
    showBoard(arr);

    console.log("You can choose your position by entering row & column for each" +
        " position accordingly!\nYour position will be marked as 1 & Computer's" +
        " position will be marked as 2\n");

    // Initializing the count of number of inputs given 'i' to '0'.
    var i = 0;

    // Calling choose() method to choose for the positions until anyone wins or not.
    choose(i);
}

/**
 * Function to choose places by taking user input & validates if someone wins.
 * 
 * @param {Number} i It is the count of number of times it will place marker.
 */
function choose(i) {

    /* Validates if neither user nor computer has won.
     * i.e. checkWinForUser() is false AND checkWinForComputer() is false.
     */
    if (!checkWinForUser() && !checkWinForComputer()) {

        // Calling putComputer() method to put marker for computer.
        putComputer();

        // Calling checkWinForComputer() method to check if computer has won or not.
        checkWinForComputer();

        // incrementing the count of markers placed.
        i++;

        /* Validating if count has reached 9.
         * As a '3 X 3' matrix have 9 places, so max markers placed will be 9.
         */
        if (i == 9) {

            // If yes, then the match is a draw.
            console.log("Match Draw!!");
            process.exit();
            rl.close();
        }

        // Asking for user input to give row & column for marker placement.
        rl.question("Enter row: ", function(ans1) {
            rl.question("Enter col: ", function(ans2) {

                // Storing the input in 'row' & 'col' variables in Number type.
                var row = Number(ans1),
                    col = Number(ans2);

                // Calling putUser() method to put marker of user according to row & col.
                putUser(row, col);

                // incrementing the count of markers placed.
                i++;

                // Then calling this method recursively again by passing 'i'.
                choose(i);
            });
        });
    } else {

        //If nothing is true, close the readline module.
        rl.close();
    }
}

// Calling startGame() method to start the game.
startGame();