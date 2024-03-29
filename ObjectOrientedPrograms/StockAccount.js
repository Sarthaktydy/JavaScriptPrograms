/******************************************************************************
 *  Compilation:  node StockAccount.js
 *  
 *  Purpose:  Program to keep track of different Companies, their price per
 *            share & User Account to keep track of shares bought or sold.
 *            Implementation of Linked List, Stack & Queue is also used.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   01-11-2018
 *
 ******************************************************************************/

// Implementing the File System module in this application.
var fs = require("fs");

// Implementing the Readline Module in this application.
var rl = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var r = rl.createInterface(process.stdin, process.stdout);

// Implementing the LinkedList module in this application.
var ll = require('../DataStructurePrograms/LinkedList');

// Implementing the Stack module in this application.
var st = require('../DataStructurePrograms/Stack');

// Implementing the Queue module in this application.
var q = require('../DataStructurePrograms/Queue');

class CompanyShares {

    /**
     * Constructor to create an Object of CompanyShares.
     * 
     * @param {String} name    It is the name of the Company.
     * @param {String} symbol  It is the symbol used to recognize the Company.
     * @param {Number} price   It is the price per share of the Company.
     */
    constructor(name, symbol, price) {
        this.name = name;
        this.symbol = symbol;
        this.price = price;
    }
}

class StockAccount {

    /**
     * Constructor to create an object of StockAccount.
     * 
     * @param {String} name  It is the name of the person whose new account will be opened,
     */
    constructor(name) {
        this.name = name;
    }

    /**
     * Function to find the total value of each shares purchased by a user.
     */
    valueOf() {

        // Calling readFromJson() function to read user data.
        var re = readFromJson('u');
        var sum = 0;

        // Loop for Searching the user by name in the file.
        for (var i = 0; i < re.user.length; i++) {

            if (re.user[i].name == this.name) {

                // If name is found, adding it's amount into sum everytime.
                sum += re.user[i].amount;
            }
        }

        // Printing the value of account.
        console.log("Total value of the account is: $" + sum);
        return;
    }

    /**
     * Function to buy shares from a company.
     * 
     * @param {Number} amount  It is the amount of which shares will be bought.
     * @param {String} symbol  It is the symbol of the company whose shares is to be bought.
     */
    buy(amount, symbol) {

        // Calling readFromJson() function to read Company data.
        var com = readFromJson('c');
        var i = 0;

        // Storing the head node in temp variable.
        var temp = com.head;

        // For loop to find the symbol in the company file.
        for (i = 0; i < com.size; i++) {

            // When the symbol is found, break the loop, so temp points to that company.
            if (temp.data.symbol == symbol) {
                break;
            }
            temp = temp.next;
        }

        // Validating if temp's symbol is the symbol passed by the caller.
        if (temp.data.symbol == symbol) {

            // Calculating total shares bought according to the amount.
            var sharesBought = amount / temp.data.price;

            // Creating a user object having different properties.
            var user = {
                name: this.name,
                amount: amount,
                symbol: symbol,
                bought: sharesBought,
                time: new Date().toLocaleString()
            }

            // Writing user object into the user details file.
            writeInJson(user, 'u');

            // Writing symbol of the company into symbol transaction file.
            writeInJson(user.symbol, 's');

            // Writing Date & Time of the transaction into time transaction file.
            writeInJson(user.time, 't');
        } else {

            // If not, then the symbol is incorrect. So promting the user again.
            console.log("Invalid Input! Symbol not matched! Try Again.");
            purposeUser(this.name);
        }
    }

    /**
     * Function to sell shares of a user.
     * 
     * @param {Number} amount  It is the amount of which shares will be bought.
     * @param {String} symbol  It is the symbol of the company whose shares has to be sold.
     */
    sell(amount, symbol) {

        // Calling readFromJson() function to read User data.
        var j = readFromJson('u');
        var i = 0;

        // For loop to check the symbol & name matching arguments passed.
        for (i = 0; i < j.user.length; i++) {

            if (j.user[i].name == this.name && j.user[i].symbol == symbol) {

                // If yes, then break the loop, so temp points to that account.
                break;
            }
        }

        // Validating if no such symbol realted to that name found. 
        if (i == j.user.length) {
            console.log("\nINVALID! No such entry found! Please enter again!\n");
            purposeUser(this.name);
        } else {

            // Validating if user has input an amount which is greater than he have bought.
            if (amount > j.user[i].amount) {

                // If yes, then it's not possible to sell those many shares.
                console.log("Invalid! Enter amount is greater than you've bought!");
                purposeUser(this.name);
            } else {

                //If no, then storing price per share value in share.
                var share = j.user[i].amount / j.user[i].bought;

                // Decrementing user amount by the amount passed in argument.
                j.user[i].amount -= amount;

                // Updating the shares bought & Time of the transaction.
                j.user[i].bought = j.user[i].amount / share;
                j.user[i].time = new Date().toLocaleString();

                // Writing symbol of the company into symbol transaction file.
                writeInJson(symbol, 's');

                // Writing Date & Time of the transaction into time transaction file.
                writeInJson(j.user[i].time, 't');

                // Writing the file with updated data in UserShares file.
                fs.writeFileSync('./JsonFiles/UserShares.json', JSON.stringify(j));
                console.log("JSON File Saved!");
            }
        }
    }

    /**
     * Function to print all the details in a report related to the name.
     */
    printReport() {

        // Calling readFromJson() function to read User data.
        var re = readFromJson('u');
        var count = 0;

        // For loop to search for the name passed in the object.
        for (var i = 0; i < re.user.length; i++) {
            if (re.user[i].name == this.name) {

                // If found, printing the details.
                console.log(re.user[i]);
                count++;
            }
        }

        // If count is still zero, i.e. no transactions are found for that specific user.
        if (count == 0) {
            console.log("No transaction realted to \'" + this.name + "\' exists!");
            process.exit();
        }

        // Also printing the total value of the account.
        this.valueOf();
        process.exit();
    }
}

/**
 * Function to display company details for each company.
 */
function displayCompanies() {

    // Calling readFromJson() function to read Company data.
    var com = readFromJson('c');

    // Pointing temp to the head of the linked list.
    var temp = com.head;

    // For loop to print data of each node.
    for (var i = 0; i < com.size; i++) {
        console.log(temp.data);
        temp = temp.next;
    }
}

/**
 * Function to read from the JSON file and return it to the caller in a specific
 * format based on the string passed.
 * 
 * @param {String} s  It is the indication by the caller to which file to extract data from.
 * 
 * @returns {any}  It is the list/stack/queue/string which is returned back to the caller.s
 */
function readFromJson(s) {
    var data;

    // Checking if the passed string is either 'c' or 's' or 't'.
    if (s == 'c' || s == 's' || s == 't') {

        // If it's 'c', i.e. extract Company details.
        if (s == 'c') {

            // Reading the data from CompanyShares.json
            data = fs.readFileSync('./JsonFiles/CompanyShares.json');

            // Converting it into string.
            var j = JSON.parse(data);

            // Creating a new object of Linked List.
            var l = new ll.LinkedList();
            var temp = j.head;

            // For loop to store all the data of the file into the LinkedList 'l'.
            for (var i = 0; i < j.size; i++) {
                l.addAppend(temp.data);
                temp = temp.next;
            }

            // Returning the linked list.
            return l;
        }

        // If it's 's', i.e. extract Symbol transaction details.
        else if (s == 's') {

            // Reading the data from SymbolTransaction.json
            data = fs.readFileSync('./JsonFiles/SymbolTransaction.json');

            // Converting it into string.
            var j = JSON.parse(data);

            // Creating a new object of Stack.
            var ss = new st.Stack();
            var temp = j.head;

            // For loop to store all the data of the file into the Stack 'ss'.
            for (var i = 0; i < j.size; i++) {
                ss.push(temp.data);
                temp = temp.next;
            }

            // Returning the Stack.
            return ss;
        }

        // If it's 't', i.e. extract Date & Time transaction details.
        else {

            // Reading the data from DateTimeOfTransaction.json
            data = fs.readFileSync('./JsonFiles/DateTimeOfTransaction.json');

            // Converting it into string.
            var j = JSON.parse(data);

            // Creating a new object of Queue.
            var qq = new q.Queue();
            var temp = j.head;

            // For loop to store all the data of the file into the Queue 'qq'.
            for (var i = 0; i < j.size; i++) {
                qq.enqueue(temp.data);
                temp = temp.next;
            }

            // Returning the Queue.
            return qq;
        }
    }

    // If it's 'u', i.e. extract User Details.
    else if (s == 'u') {

        // Reading the data from UserShares.json
        var data = fs.readFileSync('./JsonFiles/UserShares.json');

        // Converting it into string.
        var j = JSON.parse(data);

        // Returning the string.
        return j;
    }
}

/**
 * This function helps to convert any object or data passed into
 * JSON format and write that JSON string to a file.
 * 
 * @param {any} str  It is the data passed by the caller.
 */
function writeInJson(str, s) {

    // Checking if the passed string is either 'c' or 's' or 't'.
    if (s == "c" || s == 's' || s == 't') {

        // Reading the file from JSON passing 's' String.
        var jsonArr = readFromJson(s);

        // If String is 'c', add the data & write it in the file.
        if (s == 'c') {
            jsonArr.addAppend(str);
            fs.writeFileSync('./JsonFiles/CompanyShares.json', JSON.stringify(jsonArr));
        }

        // If String is 's', add the data & write it in the file.
        else if (s == 's') {
            jsonArr.push(str);
            fs.writeFileSync('./JsonFiles/SymbolTransaction .json', JSON.stringify(jsonArr));
        }

        // If String is 't', add the data & write it in the file.
        else {
            jsonArr.enqueue(str);
            fs.writeFileSync('./JsonFiles/DateTimeOfTransaction.json', JSON.stringify(jsonArr));
        }
        console.log("JSON File Saved!");
        r.close();
    }

    // If String is 't', add the data & write it in the file.
    else {

        // Reading the file from JSON passing 's' String.
        jsonArr = readFromJson(s);

        // Adding 'str' into the array.
        jsonArr.user.push(str);

        // Writing the 'str' in the UserShares file.
        fs.writeFileSync('./JsonFiles/UserShares.json', JSON.stringify(jsonArr));
        console.log("JSON File Saved!");
        r.close();
    }
}

/**
 * Function to start the program & register User/Company.
 */
function registration() {

    // Asking the user if he's a Company/Customer.
    r.question("Enter 1 if you're a Company, 2 if you're a Customer: ", function(ans) {

        if (!isNaN(ans.trim())) {

            // If user entered 1, then it's a company
            if (ans.trim() == 1) {

                // Asking if he's new or existing.
                r.question("Enter 1 if you're new, or 2 if you're existing: ", function(ans1) {

                    // If 1, then register the company.
                    if (ans1.trim() == 1) {
                        registerCompany();
                    }

                    // Else existing, so ask for his purpose.
                    else {
                        purposeCompany();
                    }
                });
            }

            // If user entered 2, then it's a Customer, so register him.
            else if (ans.trim() == 2) {
                registerUser();

            }

            // Else Invalid input.
            else {
                console.log('Invalid Input!! Please enter 1 or 2!');
                registration();
            }
        }

        // Else Invalid input.
        else {
            console.log('Invalid Input!! Please enter a number!');
            registration();
        }
    })
}

/**
 * Function to check if the company exists in the database or not.
 * 
 * @param {String} name  It is the company name to be searched.
 * 
 * @returns {Boolean}  It returns true/false based on company found or not.
 */
function companyExists(name) {

    // Taking Company data
    var com = readFromJson('c');
    var temp = com.head;

    // For loop to run till the end of the Company list to find the company.
    for (var i = 0; i < com.size; i++) {

        // If the name is found, then return true.
        if (temp.data.name == name) {
            return true;
        }
        temp = temp.next;
    }

    // If not found, then return false.
    return false;
}


/**
 * Function to check the purpose of the company.
 */
function purposeCompany() {

    // Asking company to enter it's name.
    r.question("Enter your Company name: ", function(ans1) {

        // If company does't exist, go for registration again!
        if (!companyExists(ans1.trim())) {
            console.log("INVALID! No such Company exists in our database! Try to register.");
            registration();
        }

        // If the company exists, Ask for his purpose.
        else {

            // Asking the user to enter his purpose.
            r.question("Hello " + ans1.trim() + "! What would you like to do today?\n" +
                "1.Change Symbol\n2.Change Price Per share\n",
                function(ans2) {

                    if (!isNaN(ans2.trim())) {

                        // Storing the answer in p
                        var p = Number(ans2.trim());

                        // Reading Company file.
                        var com = readFromJson('c');
                        var temp = com.head;
                        var i = 0;

                        // For loop to run till it finds the company
                        for (i = 0; i < com.size; i++) {

                            // When company name is found, break the loop.
                            if (temp.data.name == ans1.trim()) {
                                break;
                            }
                            temp = temp.next;
                        }

                        // If input is 1, Change Symbol
                        if (p == 1) {

                            // Printing it's previous symbol & asking to enter new one.
                            console.log("Your previous symbol was: " + temp.data.symbol);
                            r.question("What would you like to change it to? ",
                                function(ans3) {

                                    // Overwriting the symbol with new one.
                                    temp.data.symbol = ans3.trim();

                                    // Writing the data in file.
                                    fs.writeFileSync('./JsonFiles/CompanyShares.json', JSON.stringify(com));
                                    console.log("Succesfully Changed!");
                                    process.exit();
                                });
                        }

                        // If input is 2, Change price per share.
                        else {

                            // Printing it's previous price & asking to enter new one.
                            console.log("Your previous price per share was: " +
                                temp.data.price);
                            r.question("What would you like to change it to? ",
                                function(ans3) {

                                    if (!isNaN(ans3.trim())) {

                                        // Overwriting the price with new one.
                                        temp.data.price = ans3.trim();

                                        // Write the data in file.
                                        fs.writeFileSync('./JsonFiles/CompanyShares.json', JSON.stringify(com));
                                        console.log("Succesfully Changed!");
                                        process.exit();

                                    } else {
                                        console.log("INVALID! Price should be a number!");
                                        purposeCompany();
                                    }
                                });
                        }

                    } else {
                        console.log("Invalid Input! Please enter again!");
                        purposeCompany();
                    }
                });
        }
    });
}

/**
 * Function to check the purpose of the user.
 * 
 * @param {String} name  It is the name of the customer.
 */
function purposeUser(name) {

    // Asking the user about it's purpose.
    r.question("Hello " + name + "! What do you want to do today?" +
        "\n1.Buy shares\n2.Sell Shares\n3.Get account details\n",
        function(ans) {

            // Checking if it's a number or not.
            if (!isNaN(ans)) {

                // Creating a new object of StockAccount passing the name.
                var stock = new StockAccount(name);

                // If user entered 1, Buy shares.
                if (Number(ans) == 1) {

                    // Asking user to enter the symbol of company.
                    r.question("Enter symbol of the company whose shares you\'d" +
                        " like to buy:\n" + displayCompanies() + "\n",
                        function(ans1) {

                            // Asking user to enter amount of shares to be bought.
                            r.question("Enter the amount: ", function(ans4) {

                                if (!isNaN(ans4)) {

                                    var sym = ans1.trim();
                                    var amt = Number(ans4.trim());

                                    // Calling buy() function to buy 'amt' shares of 'sym'.
                                    stock.buy(amt, sym);

                                } else {
                                    console.log("Invalid Input! Please enter again!");
                                    purposeUser();
                                }
                            });
                        });
                }

                // If user entered 2, Sell shares.
                else if (Number(ans) == 2) {

                    // Asking the user to enter the company symbol who he'll sell.
                    r.question("Enter symbol of the company whose shares you\'d" +
                        " like to sell:\n" + displayCompanies() + "\n",
                        function a(ans1) {

                            // Asking the user amount to sell.
                            r.question("Enter the amount to sell: ", function(ans4) {

                                if (!isNaN(ans4)) {

                                    var sym = ans1.trim();
                                    var amt = Number(ans4.trim());

                                    // Calling Sell() method to sell 'amt' shares of 'sym'.
                                    stock.sell(amt, sym);

                                } else {
                                    console.log("Invalid Input! Please enter again!");
                                    purposeUser();
                                }
                            });
                        });
                }

                // If user entered 3, Print the report.
                else if (Number(ans) == 3) {

                    // Calling printReport() function to print report of 'name' person's account.
                    stock.printReport();
                } else {
                    console.log("INVALID INPUT! Please enter again! ");
                    purposeUser(name);
                }
            } else {
                console.log("INVALID INPUT! Please enter again! ");
                purposeUser(name);
            }
        });
}

/**
 * Function to register a new company.
 */
function registerCompany() {

    // Asking the company's full name, a symbol, and price per share.
    r.question("Enter your company's full Name: ", function(ans1) {

        r.question("Enter a symbol/nickname for the company: ", function(ans2) {

            r.question("Enter what's your price per share: ", function(ans3) {

                if (!isNaN(ans3)) {

                    // Storing inputs in name, symbol & price variables.
                    var name = ans1.trim();
                    var symbol = ans2.trim();
                    var price = Number(ans3.trim());

                    // Creating an object of CompanyShares to store name, symbol & price.
                    var t = new CompanyShares(name, symbol, price);

                    // Passing that object in writeFileSync() function to store it into file.
                    writeInJson(t, "c");
                } else {
                    console.log("Invalid Input!");
                    registerCompany();
                }
            });
        });
    });
}

/**
 * Function to register a user.
 */
function registerUser() {

    // Asking the user it's full name.
    r.question("Enter your full Name: ", function(ans1) {
        var name = ans1.trim();

        // Calling purposeUser() function to find the user's purpose.
        purposeUser(name);
    });
}

// Calling registration() function to start the program.
registration();