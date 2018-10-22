/******************************************************************************
 *  Compilation:  node Gambler.js
 *  
 *  Purpose: Simulates a gambler who start with $stake and place fair $1 bets 
 *           until he/she goes broke (i.e. has no money) or reach $goal. 
 *           Keeps track of the number of times he/she wins and the number of bets 
 *           he/she makes. The experiment is run N times, finding the average of
 *           results, and prints them out.
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

// Asking the user to enter his/her $Stake
rl.question("What is your $Stake? ", function(ans1) {

    // Asking the user to enter his/her $Goal
    rl.question("What is your $Goal? ", function(ans2) {

        // Asking the user to enter how many times he wants to run this experiment.
        rl.question("How many time you want to run the experiment? ", function(ans3) {

            /* Storing all the inputs as stake, goal & n in Number data type,
             * as well as initializing the win, loss & temp counting variables.
             */
            var stake = Number(ans1),
                goal = Number(ans2),
                n = Number(ans3),
                win = 0,
                loss = 0,
                temp;

            // This loop is for running the experiment n times.
            for (var i = 0; i < n; i++) {

                // 'temp' is initialized to 'stake' for every experiment.
                temp = stake;

                /* This loop will run until temp is equal to goal or equal to zero.
                 * i.e until he/she wins or he/she goes broke, the loop will run.
                 */
                while (temp <= goal && temp >= 0) {

                    // Condition to check if he wins the bet or not.
                    if (Math.random() > 0.5) {

                        // if he wins the bet, increase the amount.
                        temp++;

                        /* if the amount is equal to goal, then increase the win count
                         * and break the loop.
                         */
                        if (temp == goal) {
                            win++;
                            break;
                        }
                    } else {

                        // if he loses the bet, decrease the amount.
                        temp--;

                        /* if the amount is equal to 0, then increase the loss count
                         * and break the loop.
                         */
                        if (temp == 0) {
                            loss++;
                            break;
                        }
                    }
                }
            }

            // Print the number of wins.
            console.log("Number of Wins: " + win);

            // Print win percentage & loss percentage.
            console.log("Win %: " + (win / n) * 100 + "\nLoss %: " + (loss / n) * 100);

            process.exit();
        });
    });
});