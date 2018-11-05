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
    constructor(fileName) {

    }

    valueOf() {

    }

    buy(amount, symbol) {
        var cs = new CompanyShares();

    }

    sell(amount, symbol) {

    }

    save(fileName) {

    }

    printReport() {

    }


}

var jsonArr = [];

function readFromJson() {
    var j;
    var f = fs.readFile('./JsonFiles/CompanyShares.json', function(err, data) {
        if (err) {
            throw err;
        } else {
            j = JSON.parse(data);
            console.log(j);
        }
    });
    return j;
}

/**
 * This method helps to convert any object or data passed into
 * JSON format and write that JSON string to a file.
 * 
 * @param {any} str  It is the data passed by the caller.
 */
function writeInJson(str) {

    jsonArr.push(str);
    // Converting data passed into JSON format.
    var j = JSON.stringify(jsonArr);

    // Writing 'j' into Inventory.json file.
    fs.writeFile('./JsonFiles/CompanyShares.json', j, function(err) {
        if (err) {
            throw err;
        } else {
            console.log("JSON File Saved!");
            r.close();
        }
    });
}

// var uname = "";

// function registration() {
//     r.question("Enter 1 if you're a Company, 2 if you're a Customer: ", function(ans) {
//         if (!isNaN(ans.trim())) {
//             if (ans.trim() == 1) {
//                 r.question("Enter 1. to Log-In or 2. to Sign-Up: ", function(ans1) {
//                     if (!isNaN(ans1)) {
//                         if (Number(ans1.trim()) == 1) {
//                             loginCompany();
//                         } else if (Number(ans1.trim()) == 2) {
//                             registerCompany();
//                         } else {
//                             console.log('Invalid Input!!');
//                             registration();
//                         }
//                     } else {
//                         console.log('Invalid Input!!');
//                         registration();
//                     }
//                 })
//             } else if (ans.trim() == 2) {
//                 r.question("Enter 1. to Log-In or 2. to Sign-Up: ", function(ans1) {
//                     if (!isNaN(ans1)) {
//                         if (Number(ans1.trim()) == 1) {
//                             loginUser();
//                         } else if (Number(ans1.trim()) == 2) {
//                             registerUser();
//                         } else {
//                             console.log('Invalid Input!!');
//                             registration();
//                         }
//                     } else {
//                         console.log('Invalid Input!!');
//                         registration();
//                     }
//                 })
//             } else {
//                 console.log('Invalid Input!!');
//                 registration();
//             }
//         } else {
//             console.log('Invalid Input!!');
//             registration();
//         }
//     })
// }

// function loginCompany() {

// }

// function loginUser() {

// }

// function registerCompany() {
//     r.question("Enter your company's full Name: ", function(ans1) {
//         r.question("Enter a symbol/nickname for the company: ", function(ans2) {
//             r.question("Enter what's your price per share: ", function(ans3) {
//                 if (!isNaN(ans3)) {
//                     var name = ans1.trim();
//                     var symbol = ans2.trim();
//                     var price = Number(ans3.trim());
//                     var t = new CompanyShares(name, symbol, price);
//                     writeInJson(t);
//                 }
//             })
//         })
//     })
// }

function registerUser() {
    r.question("Enter your full Name: ", function(ans1) {
        r.question("Enter symbol of the company: ", function(ans2) {
            r.question("Enter how many shares you want to buy? ", function(ans3) {
                if (!isNaN(ans3)) {
                    var name = ans1.trim();
                    var symbol = ans2.trim();
                    var price = Number(ans3.trim());
                    var t = new CompanyShares(name, symbol, price);
                    writeInJson(t);
                }
            });
        });
    });
}

// function validateCompany(nm) {
//     var bool = false;
//     var f = fs.readFile('./JsonFiles/CompanyShares.json', function(err, data) {
//         if (err) {
//             throw err;
//         } else {
//             j = JSON.parse(data);
//             for (var i = 0; i < j.length; i++) {
//                 if (j[i].uname == nm) {
//                     bool = true;
//                 }
//             }
//         }
//     });
//     return bool;
// }

function validateUser() {

}

function main() {

}

registration();