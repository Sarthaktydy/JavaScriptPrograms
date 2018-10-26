var q = require("./Queue");
var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

function startQueue() {
    console.log("\nWelcome to the Bank!!\n");
    rl.question("Enter how many people are in the queue: ", function(ans1) {
        if (isNaN(ans1)) {
            console.log("Please enter a number!");
            startQueue();
        } else {
            var len = Number(ans1);
            cashCounter(len);
        }
    });
}

var qName = new q.Queue();
var qPurpose = new q.Queue();
var qAmount = new q.Queue();
var count = 0;
var name, purpose, amount;
var bank = 100000;
var temp = bank;

function cashCounter(len) {
    if (count == len) {
        rl.question("Are there any more person in the queue?\nEnter 1 for Yes, 2 for No: ", function(ans) {
            var a = Number(ans);
            if (a == 1) {
                count = 0;
                rl.question("Enter how many people are in the queue: ", function(ans1) {
                    var l = Number(ans1);
                    cashCounter(l);
                });
            } else if (a == 2) {
                displayData();
            } else {
                console.log("Invalid Input! Enter 1 for Yes or 2 for No");
                cashCounter(len);
            }
        });
    } else {
        rl.question("\nEnter Name " + (count + 1) + ": ", function(ans1) {
            rl.question(ans1 + ", you're here for?\n1.Deposit or\n2.Withdrawl: ", function(ans2) {
                rl.question("Enter the amount: ", function(ans3) {
                    name = String(ans1);
                    purpose = Number(ans2);
                    amount = Number(ans3);

                    if (purpose == 1) {
                        qName.enqueue(name);
                        qPurpose.enqueue("Deposited");
                        bank += amount;
                        qAmount.enqueue(amount);
                        count++;
                        cashCounter(len);
                    } else if (purpose == 2) {
                        if (amount > bank) {
                            console.log("Sorry, The bank is unable to provide Rs." + amount +
                                "/-\nPlease enter a lesser amount: ");
                        } else {
                            qName.enqueue(name);
                            qPurpose.enqueue("Withdrew");
                            bank -= amount;
                            qAmount.enqueue(amount);
                            count++;
                        }
                        cashCounter(len);
                    } else {
                        console.log("Invalid Purpose! Enter 1 for Deposit or 2 for Withdrawl");
                        cashCounter(len);
                    }
                });
            });
        });
    }
}

function displayData() {
    console.log("Today's transaction are:\n");
    for (var i = 0; i <= qName.getSize(); i++) {
        console.log((qName.dequeue()).toUpperCase() + " " + qPurpose.dequeue() +
            " " + qAmount.dequeue() + "/-");
    }
    console.log("At the starting of the day, Bank Balance was: Rs." + temp);
    console.log("At the end of the day, Bank Balance is: Rs." + bank + "\n");
    process.exit();
}

startQueue();