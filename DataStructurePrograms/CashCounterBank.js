/******************************************************************************
 *  Compilation:  node CashCounterBank.js
 *  
 *  Purpose: Program which creates Banking Cash Counter where people come in 
 *           to deposit Cash and withdraw Cash. This has an input panel to add 
 *           people to Queue to either deposit or withdraw money and dequeue 
 *           the people. Also the Cash Balance is maintained.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   23-10-2018
 *
 ******************************************************************************/

// Importing the Queue module in this application.
var q = require("./Queue");

// Implementing the Readline module in this application.
var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

/**
 * Function to start the Queue & take input for how many people are in the queue.
 */
function startQueue() {

    console.log("\nWelcome to the Bank!!\n");

    // Taking the user input.
    rl.question("Enter how many people are in the queue: ", function(ans1) {

        // If the input is not a number, call the method again.
        if (isNaN(ans1)) {
            console.log("Please enter a number!");
            startQueue();
        }

        // Else take the input and call cashCounter() function passing the input.
        else {
            var len = Number(ans1);
            cashCounter(len);
        }
    });
}

/**
 * @var qName     Queue to store names of the people standing in the queue.
 * @var qPurpose  Queue to store the purpose of the person.
 * @var qAmount   Queue to store the amount withdrawn/deposited.
 * @var count     To keep count of the people who're done with transaction.
 * @var name      To store the name of the person.
 * @var purpose   To store the purpose of the person.
 * @var amount    To store the amount of the transaction.
 * @var bank      Initial amount the bank has for the day.
 * @var temp      To compare the before and after day balance of the bank.
 */
var qName = new q.Queue();
var qPurpose = new q.Queue();
var qAmount = new q.Queue();
var count = 0;
var name, purpose, amount;
var bank = 100000;
var temp = bank;

/**
 * Function to simulate the cash counter of a bank. 
 * 
 * @param {Number} len  It stores the length of the Queue
 */
function cashCounter(len) {

    // Checking if the queue has ended.
    if (count == len) {

        // Prompting the user to enter if there are more people in the queue.
        rl.question("Are there any more person in the queue?\nEnter 1 for Yes, 2 for No: ", function(ans) {
            var a = Number(ans);

            // If answer is 1, then start the cashCounter again passing new length.
            if (a == 1) {
                count = 0;
                rl.question("Enter how many people are in the queue: ", function(ans1) {
                    var l = Number(ans1);
                    cashCounter(l);
                });
            }

            // If asnwer is 2, then call displayData() function to display the transactions.
            else if (a == 2) {
                displayData();
            }

            // If answer is anything else, invalid input.
            else {
                console.log("Invalid Input! Enter 1 for Yes or 2 for No");
                cashCounter(len);
            }
        });
    }

    // If the queue has more people in it.
    else {

        // Asking the user to input Name, Purpose & Amount of transaction.
        rl.question("\nEnter Name " + (count + 1) + ": ", function(ans1) {

            rl.question(ans1 + ", you're here for?\n1.Deposit or\n2.Withdrawl: ", function(ans2) {

                rl.question("Enter the amount in Rupees: Rs.", function(ans3) {

                    // Storing all the inputs in name, purpose & amount respectively.
                    name = String(ans1);
                    purpose = Number(ans2);
                    amount = Number(ans3);

                    // If the purpose is 1, i.e. Deposit.
                    if (purpose == 1) {

                        // Enqueue the data in their respective queues & maintain the bank balance.
                        qName.enqueue(name);
                        qPurpose.enqueue("Deposited");
                        bank += amount;
                        qAmount.enqueue(amount);
                        count++;
                        cashCounter(len);
                    }

                    // If the purpose is 2, i.e. Withdrawl.
                    else if (purpose == 2) {

                        // If entered amount is more than the bank balance, unable to withdraw money.
                        if (amount > bank) {
                            console.log("Sorry, The bank is unable to provide Rs." + amount +
                                "/-\nPlease enter a lesser amount: ");
                        }

                        // If not, then enqueue the data in respective queues & maintain the bank balance.
                        else {
                            qName.enqueue(name);
                            qPurpose.enqueue("Withdrew");
                            bank -= amount;
                            qAmount.enqueue(amount);
                            count++;
                        }
                        cashCounter(len);
                    }

                    // If the purpose is entered anything else, invalid input.
                    else {
                        console.log("Invalid Purpose! Enter 1 for Deposit or 2 for Withdrawl");
                        cashCounter(len);
                    }
                });
            });
        });
    }
}

/**
 * Function to display the daily transactions of the bank based on cash counter.
 */
function displayData() {
    console.log("Today's transaction are:\n");

    // This loop will run till the queue size & print by dequeuing the data & printing them.
    for (var i = 0; i <= qName.getSize(); i++) {
        console.log((qName.dequeue()).toUpperCase() + " " + qPurpose.dequeue() +
            " " + qAmount.dequeue() + "/-");
    }

    // Also displaying the bank balance.
    console.log("At the starting of the day, Bank Balance was: Rs." + temp);
    console.log("At the end of the day, Bank Balance is: Rs." + bank + "\n");
    process.exit();
}


// Calling startQueue() function to start the queue.
startQueue();