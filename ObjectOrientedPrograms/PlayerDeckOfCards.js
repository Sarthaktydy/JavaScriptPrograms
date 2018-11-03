/*********************************************************************************
 *  Compilation:  node PlayerDeckOfCards.js
 *  
 *  Purpose:  Program to Extend the DeckOfCards program to create a Player Object 
 *            having Deck of Cards, and having ability to Sort by Rank and maintain
 *            the cards in a Queue implemented using Linked List. Do not use any 
 *            Collection Library. Further the Player are also arranged in Queue. 
 *            Finally Print the Player and the Cards received by each Player.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   01-11-2018
 *
 *********************************************************************************/

// Importing Queue module to use it's properties.
var q = require('../DataStructurePrograms/Queue');

class Player {

    /**
     * Function to sort an Array and return the elements in a Queue.
     * 
     * @param {Array} arr  It is the array to be sorted.
     * @returns {Queue}    It returns a sorted Queue.
     */
    sort(arr) {
        var qu = new q.Queue();
        var aa, bb;
        // Sorting the 'card' array using sort() function.
        arr.sort(

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
            }
        );

        // For loop will run till array length and store them in a queue.
        for (var i = 0; i < arr.length; i++) {

            /**
             * Validating & Replacing card present at 'i' & 'j' index of 'card'.
             * 11 with 'Jack', 12 with 'Queen', 13 with 'King' & 14 with 'Ace'.
             */
            if (arr[i].split(' ')[0] == 11) {
                arr[i] = arr[i].replace(/11/g, 'Jack');
            } else if (arr[i].split(' ')[0] == 12) {
                arr[i] = arr[i].replace(/12/g, '👸  Queen');
            } else if (arr[i].split(' ')[0] == 13) {
                arr[i] = arr[i].replace(/13/g, '👑  King');
            } else if (arr[i].split(' ')[0] == 14) {
                arr[i] = arr[i].replace(/14/g, 'Ace');
            }

            // Calling enqueue() function of Queue to add elements to the Queue.
            qu.enqueue(arr[i]);
        }

        // Returning the Queue.
        return qu;
    }

    /**
     * Function to Shuffle & Distribute cards to the players.
     */
    shuffle() {

        // Creating a 2D array to store the cards of each player (4 X 9).
        var card = new Array(4);

        // For loop to add array to each row of size 9.
        for (var i = 0; i < card.length; i++) {
            card[i] = new Array(9);
        }

        // Creating a playerQueue to store each player's cards.
        var playerQueue = new q.Queue();

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

            // Enqueuing each player's cards in 'playerQueue' Queue
            playerQueue.enqueue(this.sort(card[i]));

        }

        // Returning the Queue.
        return playerQueue;
    }
}

/**
 * Function to start the program.
 */
function main() {

    // Creating a new Player object.
    var p = new Player();

    // Calling shuffle() function and storing the output in qq.
    var qq = p.shuffle();
    var size = qq.size;

    // For loop to print the elements of the 'qq' Queue.
    for (var i = 0; i < size; i++) {
        console.log(qq.dequeue().getQueue());

    }
}

// Calling main() function to start the program.
main();