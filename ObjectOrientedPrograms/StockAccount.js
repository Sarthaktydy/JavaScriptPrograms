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
        //     this.uname = uname;
        //     this.pass = pass;
    }
}

class StockAccount {

    constructor(name) {
        this.name = name;
    }

    valueOf() {

    }

    buy(amount, symbol) {
        var j = readFromJson('c');
        var i = 0;
        for (i = 0; i < j.company.length; i++) {
            if (j.company[i].symbol == symbol) {
                break;
            }
        }
        if (j.company[i].symbol == symbol) {
            var sharesBought = amount / j.company[i].price;
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

    save(fileName) {

    }

    printReport() {

    }
}

class CompanyAccount {

}

function readFromJson(s) {
    var data;
    if (s == 'c') {
        data = fs.readFileSync('./JsonFiles/CompanyShares.json');
        var j = JSON.parse(data);
        return j;
        //function(err, data) {
        //     if (err) {
        //         throw err;
        //     } else {
        //         console.log(data);

        //         j = JSON.parse(data);
        //         console.log(j);

        //     }
        // });

    } else {
        var data = fs.readFileSync('./JsonFiles/UserShares.json')
        var j = JSON.parse(data);
        return j;
        // , function(err, data) {
        //     if (err) {
        //         throw err;
        //     } else {
        //         j = JSON.parse(data);
        //         console.log(j);
        //     }
        // });
        // return data;
    }

    //return j;
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
        jsonArr.company.push(str);

        // Writing 'j' into Inventory.json file.
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
                registerCompany();
                // r.question("Enter 1. to Log-In or 2. to Sign-Up: ", function(ans1) {
                //     if (!isNaN(ans1)) {
                //         if (Number(ans1.trim()) == 1) {
                //             loginCompany();
                //         } else if (Number(ans1.trim()) == 2) {
                //             registerCompany();
                //         } else {
                //             console.log('Invalid Input!!');
                //             registration();
                //         }
                //     } else {
                //         console.log('Invalid Input!!');
                //         registration();
                //     }
                // });
            } else if (ans.trim() == 2) {
                registerUser();
                // r.question("Enter 1. to Log-In or 2. to Sign-Up: ", function(ans1) {
                //     if (!isNaN(ans1)) {
                //         if (Number(ans1.trim()) == 1) {
                //             loginUser();
                //         } else if (Number(ans1.trim()) == 2) {
                //             registerUser();
                //         } else {
                //             console.log('Invalid Input!!');
                //             registration();
                //         }
                //     } else {
                //         console.log('Invalid Input!!');
                //         registration();
                //     }
                // })
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

// function loginCompany() {
//     console.log("--------------------LOGIN---------------------");
//     r.question("Enter username: ", function(ans2) {
//         r.question("Enter password: ", function(ans3) {
//             var uname = ans2.trim();
//             var pass = ans3.trim();
//             if (validateCompany(uname, pass) == 'n') {
//                 console.log("LOGIN Succesfull");
//                 purposeCompany(validateCompany(uname, pass));
//             } else {
//                 console.log("Wrong Credentials! Please try again!");
//                 loginCompany();
//             }
//         });
//     });
// }

// function purposeCompany(name) {
//     r.question("Hello " + name + "! What do you want to do today?" +
//         "\n1.Change Price Per Share. 2.Change Symbol. 3.Change login Password.",
//         function(ans1) {
//             if (!isNaN(ans1)) {

//             }
//         });

// }

function purposeUser(name) {
    r.question("Hello " + name + "! What do you want to do today?" +
        "\n1.Buy shares\n2.Sell Shares\n3.Get account details\n",
        function(ans) {
            if (!isNaN(ans)) {
                var stock = new StockAccount(name);
                var c = JSON.stringify(readFromJson('c'));
                if (Number(ans) == 1) {
                    r.question("Enter symbol of the company whose shares you\'d" +
                        " like to buy:\n" + c + "\n",
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
                        " like to buy:\n" + c + "\n",
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
                    log("Here's your account details:\n");
                    stock.valueOf(name);
                } else {
                    console.log("INVALID INPUT! Please enter again! ");
                    purposeUser(name);
                }
            }
        });
}

// function loginUser() {
//     console.log("--------------------LOGIN---------------------");
//     r.question("Enter username: ", function(ans2) {
//         r.question("Enter password: ", function(ans3) {
//             var uname = String(ans2.trim());
//             var pass = String(ans3.trim());
//             if (validateUser(uname, pass) == 'n') {
//                 console.log("Login Succesfull");
//                 purposeUser(validateUser(uname, pass));
//             } else {
//                 console.log("Wrong Credentials! Please try again, or Sign-up!");
//                 loginUser();
//             }
//         });
//     });
// }

function registerCompany() {
    r.question("Enter your company's full Name: ", function(ans1) {
        r.question("Enter a symbol/nickname for the company: ", function(ans2) {
            r.question("Enter what's your price per share: ", function(ans3) {
                if (!isNaN(ans3)) {
                    // r.question("Enter a username: ", function(ans4) {
                    //     r.question("Enter a password: ", function(ans5) {
                    var name = ans1.trim();
                    var symbol = ans2.trim();
                    var price = Number(ans3.trim());
                    // var uname = ans4.trim();
                    // var pass = ans5.trim();
                    var t = new CompanyShares(name, symbol, price);
                    writeInJson(t, "c");
                    loginCompany();
                    //     });
                    // });
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

// function validateCompany(uname, pass) {
//     var f = fs.readFileSync('./JsonFiles/CompanyShares.json');
//     var j = JSON.parse(f);
//     for (var i = 0; i < j.length; i++) {
//         if (j[i].uname == uname && j[i].pass == pass) {
//             return j[i].name;
//         }
//     }
//     return 'n';
// }

// function validateUser(uname, pass) {
//     var f = fs.readFileSync('./JsonFiles/UserShares.json');
//     var j = JSON.parse(f);
//     for (var i = 0; i < j.length; i++) {
//         if (j[i].uname == uname && j[i].pass == pass) {
//             return j[i].name;
//         }
//     }
//     return 'n';
// }


function main() {

}

registration();