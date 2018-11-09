/******************************************************************************
 *  Compilation:  node StockAccount.js
 *  
 *  Purpose:  Program to read in Stock Names, Number of Share, Share Price. 
 *            Showing a Stock Report with total value of each Stock and the total 
 *            value of Stock.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   01-11-2018
 *
 ******************************************************************************/

// Implementing the File System module in this application.
var fs = require("fs");

// Implementing the Radline module in this application.
var rl = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var r = rl.createInterface(process.stdin, process.stdout);

var ll = require('../DataStructurePrograms/LinkedList');

var st = require('../DataStructurePrograms/Stack');

var q = require('../DataStructurePrograms/Queue');

class CompanyShares {

    constructor(name, symbol, price) {
        this.name = name;
        this.symbol = symbol;
        this.price = price;
    }
}

class StockAccount {

    constructor(name) {
        this.name = name;
    }

    valueOf() {
        var re = readFromJson('u');
        var sum = 0;
        for (var i = 0; i < re.user.length; i++) {
            if (re.user[i].name == this.name) {
                sum += re.user[i].amount;
            }
        }
        console.log("Total value of the account is: $" + sum);
        return;
    }

    buy(amount, symbol) {
        var com = readFromJson('c');
        var i = 0;
        var temp = com.head;
        for (i = 0; i < j.company.length; i++) {
            if (temp.data.symbol == symbol) {
                break;
            }
            temp = temp.next;
        }
        if (temp.data.symbol == symbol) {
            var sharesBought = amount / temp.data.price;
            var user = {
                name: this.name,
                amount: amount,
                symbol: symbol,
                bought: sharesBought,
                time: new Date().toLocaleString()
            }
            writeInJson(user, 'u');
        } else {
            console.log("Invalid Input! Symbol not matched! Try Again.");
            purposeUser(this.name);
        }
    }

    sell(amount, symbol) {
        var j = readFromJson('u');
        var i = 0;
        for (i = 0; i < j.user.length; i++) {
            if (j.user[i].name == this.name && j.user[i].symbol == symbol) {
                break;
            }
        }
        if (i == j.user.length) {
            console.log("\nINVALID! No such entry found! Please enter again!\n");
            purposeUser(this.name);
        } else {
            if (amount > j.user[i].amount) {
                console.log("Invalid! Enter amount is greater than you've bought!");
                purposeUser(this.name);
            } else {
                var share = j.user[i].amount / j.user[i].bought;
                j.user[i].amount -= amount;
                j.user[i].bought = j.user[i].amount / share;
                j.user[i].time = new Date().toLocaleString();
                fs.writeFileSync('./JsonFiles/UserShares.json', JSON.stringify(j));
                console.log("JSON File Saved!");
            }
        }
    }

    printReport() {
        var re = readFromJson('u');
        var count = 0;
        for (var i = 0; i < re.user.length; i++) {
            if (re.user[i].name == this.name) {
                console.log(re.user[i]);
                count++;
            }
        }
        if (count == 0) {
            console.log("No transaction realted to \'" + this.name + "\' exists!");
            process.exit();
        }
        this.valueOf();
        process.exit();
    }
}

function displayCompanies() {
    var com = readFromJson('c');
    console.log(com.getList());
}

function readFromJson(s) {
    var data;
    if (s == 'c') {
        data = fs.readFileSync('./JsonFiles/CompanyShares.json');
        var j = JSON.parse(data);
        var l = new ll.LinkedList();
        var temp = j.head;
        for (var i = 0; i < j.size; i++) {
            l.addAppend(temp.data);
            temp = temp.next;
        }
        return l;
    } else {
        var data = fs.readFileSync('./JsonFiles/UserShares.json');
        var j = JSON.parse(data);
        return j;
    }
}

/**
 * This method helps to convert any object or data passed into
 * JSON format and write that JSON string to a file.
 * 
 * @param {any} str  It is the data passed by the caller.
 */
function writeInJson(str, s) {

    if (s == "c") {
        var jsonArr = readFromJson(s);
        jsonArr.addAppend(str);

        // jsonArr.company.push(str);

        fs.writeFileSync('./JsonFiles/CompanyShares.json', JSON.stringify(jsonArr));
        console.log("JSON File Saved!");
        r.close();
    } else {
        jsonArr = readFromJson(s);
        jsonArr.user.push(str);
        fs.writeFileSync('./JsonFiles/UserShares.json', JSON.stringify(jsonArr));
        console.log("JSON File Saved!");
        r.close();
    }
}

function registration() {
    r.question("Enter 1 if you're a Company, 2 if you're a Customer: ", function(ans) {
        if (!isNaN(ans.trim())) {
            if (ans.trim() == 1) {
                r.question("Enter 1 if you're new, or 2 if you're existing: ", function(ans1) {
                    if (ans1.trim() == 1) {
                        registerCompany();
                    } else {
                        purposeCompany();
                    }
                });
            } else if (ans.trim() == 2) {
                registerUser();

            } else {
                console.log('Invalid Input!! Please enter 1 or 2!');
                registration();
            }
        } else {
            console.log('Invalid Input!! Please enter a number!');
            registration();
        }
    })
}

function companyExists(name) {
    var com = readFromJson('c');
    var temp = com.head;
    for (var i = 0; i < com.size; i++) {
        if (temp.data.name == name) {
            return true;
        }
        temp = temp.next;
    }
    return false;
}

function purposeCompany() {
    r.question("Enter your Company name: ", function(ans1) {
        if (!companyExists(ans1.trim())) {
            console.log("INVALID! No such Company exists in our database! Try to register.");
            registration();
            c
        } else {
            r.question("Hello " + ans1.trim() + "! What would you like to do today?\n" +
                "1.Change Symbol\n2.Change Price Per share\n",
                function(ans2) {
                    if (!isNaN(ans2.trim())) {
                        var p = Number(ans2.trim());
                        var com = readFromJson('c');
                        var temp = com.head;
                        var i = 0;
                        for (i = 0; i < com.size; i++) {
                            if (temp.data.name == ans1.trim()) {
                                break;
                            }
                            temp = temp.next;
                        }
                        if (p == 1) {
                            console.log("Your previous symbol was: " + temp.data.symbol);
                            r.question("What would you like to change it to? ",
                                function(ans3) {
                                    temp.data.symbol = ans3.trim();
                                    fs.writeFileSync('./JsonFiles/CompanyShares.json', JSON.stringify(com));
                                    console.log("Succesfully Changed!");
                                    process.exit();
                                });
                        } else {
                            console.log("Your previous price per share was: " +
                                temp.data.price);
                            r.question("What would you like to change it to? ",
                                function(ans3) {
                                    if (!isNaN(ans3.trim())) {
                                        temp.data.price = ans3.trim();
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

function purposeUser(name) {
    r.question("Hello " + name + "! What do you want to do today?" +
        "\n1.Buy shares\n2.Sell Shares\n3.Get account details\n",
        function(ans) {
            if (!isNaN(ans)) {
                var stock = new StockAccount(name);
                var c = JSON.stringify(readFromJson('c'));
                if (Number(ans) == 1) {
                    r.question("Enter symbol of the company whose shares you\'d" +
                        " like to buy:\n" + displayCompanies() + "\n",
                        function(ans1) {
                            r.question("Enter the amount: ", function(ans4) {
                                if (!isNaN(ans4)) {
                                    var sym = ans1.trim();
                                    var amt = Number(ans4.trim());
                                    stock.buy(amt, sym);
                                } else {
                                    console.log("Invalid Input! Please enter again!");
                                    purposeUser();
                                }
                            });
                        });
                } else if (Number(ans) == 2) {
                    r.question("Enter symbol of the company whose shares you\'d" +
                        " like to buy:\n" + displayCompanies() + "\n",
                        function(ans1) {
                            r.question("Enter the amount to sell: ", function(ans4) {
                                if (!isNaN(ans4)) {
                                    var sym = ans1.trim();
                                    var amt = Number(ans4.trim());
                                    stock.sell(amt, sym);
                                } else {
                                    console.log("Invalid Input! Please enter again!");
                                    purposeUser();
                                }
                            });
                        });
                } else if (Number(ans) == 3) {
                    stock.printReport();
                } else {
                    console.log("INVALID INPUT! Please enter again! ");
                    purposeUser(name);
                }
            }
        });
}

function registerCompany() {
    r.question("Enter your company's full Name: ", function(ans1) {
        r.question("Enter a symbol/nickname for the company: ", function(ans2) {
            r.question("Enter what's your price per share: ", function(ans3) {
                if (!isNaN(ans3)) {
                    var name = ans1.trim();
                    var symbol = ans2.trim();
                    var price = Number(ans3.trim());
                    var t = new CompanyShares(name, symbol, price);
                    writeInJson(t, "c");
                } else {
                    console.log("Invalid Input!");
                    registerCompany();
                }
            });
        });
    });
}

function registerUser() {
    r.question("Enter your full Name: ", function(ans1) {
        var name = ans1.trim();
        purposeUser(name);
    });
}

registration();