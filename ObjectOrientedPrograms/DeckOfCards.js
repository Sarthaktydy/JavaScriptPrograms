/******************************************************************************
 *  Compilation:  node DeckOfCards.js
 *  
 *  Purpose:  Program to initialize deck of cards having Suit ("Clubs", 
 *            "Diamonds", "Hearts", "Spades") & Rank ("2", "3", "4", "5", "6", 
 *            "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"). Shuffling 
 *            the cards using Random function and then distributing 9 Cards to 
 *            4 Players and Printing the Cards received by the 4 Players using 
 *            2D Array.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   01-11-2018
 *
 ******************************************************************************/

/**
 * Function that will run the program.
 */
function main() {

    // Creating a 2D array to store the cards of each player (4 X 9).
    var card = new Array(4);

    // For loop to add array to each row of size 9.
    for (var i = 0; i < card.length; i++) {
        card[i] = new Array(9);
    }

    // Suit array to store the type of card.
    var suit = ["Clubs", "Diamonds", "Hearts", "Spades"];

    // Symbol array to store the symbol of type of card.
    var symbol = ["♣", "♦", "♥", "♠"];

    // Rank array to declare 13 cards of the each type.
    var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];

    // User array to store used random number generated everytime. 'u' is the initial index.
    var used = [],
        u = 0;

    // Variables to store the random number generated everytime for rows & columns.
    var rowRandom = 0,
        columnRandom = 0;

    // For loop will run till the row of the 'card' array.
    for (var i = 0; i < card.length; i++) {

        // For loop will run till the column of the 'card' array.
        for (var j = 0; j < card[i].length; j++) {

            // Generating random number for row & column.
            rowRandom = Math.floor(Math.random() * symbol.length);
            columnRandom = Math.floor(Math.random() * rank.length);

            // Checking if random numbers generated are unique or not.
            if (!used.includes(rowRandom + " " + columnRandom)) {

                // If yes, then adding those to card array.
                card[i][j] = rank[columnRandom] + " " + symbol[rowRandom];

                // Storing unique numbers in used array, incrementing 'u'.
                used[u++] = rowRandom + " " + columnRandom;
            } else {

                // If no, then decremeting 'j' & running the loop again.
                j--;
            }
        }
    }

    var str = "";
    var aa, bb;

    // For loop will run till row of 'card' array to print the array
    for (var i = 0; i < card.length; i++) {

        // Sorting the 'card' array using sort() function.
        card[i].sort(

            // Creating a funciton on basis of which the array will be sorted.
            function(a, b) {

                // Splitting the element in each column & storing them in 'aa' & 'bb' array.
                aa = a.split(" ");
                bb = b.split(" ");

                // Validating if 1st element of 'aa' is less than of 'bb'.
                if (Number(aa[0]) < Number(bb[0])) {

                    // If yes, returning -1.
                    return -1;
                } else {

                    // If yes, returning 1.
                    return 1;
                }
            });
        str += "Player " + (i + 1) + ": ";

        // For loop will run till columns of 'card' array to print the array
        for (var j = 0; j < card[i].length; j++) {

            /**
             * Validating & Replacing card present at 'i' & 'j' index of 'card'.
             * 11 with 'Jack', 12 with 'Queen', 13 with 'King' & 14 with 'Ace'.
             */
            if (card[i][j].split(' ')[0] == 11) {
                card[i][j] = card[i][j].replace(/11/g, 'Jack');
            } else if (card[i][j].split(' ')[0] == 12) {
                card[i][j] = card[i][j].replace(/12/g, '👸  Queen');
            } else if (card[i][j].split(' ')[0] == 13) {
                card[i][j] = card[i][j].replace(/13/g, '👑  King');
            } else if (card[i][j].split(' ')[0] == 14) {
                card[i][j] = card[i][j].replace(/14/g, 'Ace');
            }

            // Adding each element of a row in str String.
            str += card[i][j] + ", ";
        }

        // Printing the string & re-initializing it to empty string.
        console.log(str);
        str = "";
    }
}

// Calling main method to start the program.
main();