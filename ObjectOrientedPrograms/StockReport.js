/******************************************************************************
 *  Compilation:  node StockReport.js
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


class Stock {

    /**
     * Constructor to create an object of Stock.
     * 
     * @param {String} stockName      It is the name of the stock
     * @param {Number} share          It is the number of shares bought
     * @param {Number} pricePerShare  It is the price per share of that stock
     */
    constructor(stockName, share, pricePerShare) {
        this.stockName = stockName;
        this.share = share;
        this.pricePerShare = pricePerShare;
    }
}

class StockPortfolio {

    /**
     * Function to calculate value of each stock.
     * 
     * @param {Number} share  It is the number of shares bought of a particular stock.
     * @param {Number} price  It is the price per share of that stock.
     */
    calculateEach(share, price) {

        // Return the multiple of share & price of each share.
        return share * price;
    }

    /**
     * Function to calculate the total value of all the stocks purchased.
     * 
     * @param {Array} arr  It is the array of value of each stock.
     */
    calculateTotal(arr) {

        // Return addition of the whole array.
        return arr.reduce(function(a, b) { return a + b; }, 0);
    }
}

/**
 * This method helps to convert any object or data passed into
 * JSON format and write that JSON string to a file.
 * 
 * @param {any} str  It is the data passed by the caller.
 */
function writeInJson(str) {

    // Converting data passed into JSON format.
    var j = JSON.stringify(str);

    // Writing 'j' into Inventory.json file.
    fs.writeFile('./StockReport.json', j, function(err) {
        if (err) {
            throw err;
        } else {
            console.log("JSON File Saved!");
            r.close();
        }
    });
}


var i = 1;
var calEach = [];
var stockArr = [];
var stock, share, price;

/**
 * Function to take input for Stock details from the user for each stock
 * purchased.
 * 
 * @param {Number} n  It is the number of stocks purchased.
 */
function takeInput(n) {

    // Validating if total number of inputs has been reached.
    if (i == n + 1) {

        // Creating an Object of StockPortfolio to use it's functions.
        var st = new StockPortfolio();

        // Creating calEach array to store values of each stock.
        var calEach = [];

        console.log("---------------STOCK REPORT---------------");

        // For loop to find the value of each stock purchased & print it.
        for (var j = 0; j < stockArr.length; j++) {

            // Calling calculateEach() function to calculate value for each stock.
            calEach[j] = st.calculateEach(stockArr[j].share, stockArr[j].pricePerShare);
            console.log(stockArr[j].stockName + ": Rs." + calEach[j]);
        }

        // Calling calculateTotal() function to calculate total value of Stocks.
        var total = st.calculateTotal(calEach);
        console.log("Your total expenses: Rs." + total);

        console.log("-------------------------------------------");

        // Calling writeInJson() function to save a JSON file for 'stockArr' array.
        writeInJson(stockArr);
    } else {

        // Asking the user to enter name of the stock.
        r.question("Enter the name of the Stock " + i++ + ": ", function(ans1) {

            // Asking the user about number of shares purchased.
            r.question("How many shares of " + ans1 + " have you bought? ", function(ans2) {

                // Validating if ans1 is a Number
                if (!isNaN(ans2)) {

                    // If yes, then asking how much is the price of one share of that Stock.
                    r.question("Enter price per share of " + ans1 + ": ", function(ans3) {

                        // Validating if ans3 is a Number.
                        if (!isNaN(ans3)) {

                            // Storing stock name in 'stock'
                            stock = String(ans1.trim());

                            // Storing number of stocks in 'share'
                            share = Number(ans2.trim());

                            // Storing price of each share on 'price'
                            price = Number(ans3.trim());

                            // Pushing an object of Stock() in 'stockArr' array.
                            stockArr.push(new Stock(stock, share, price));

                            // Calling takeInput() function to take input again.
                            takeInput(n);
                        } else {

                            // If input is not a number, then INVALID INPUT!
                            console.log("Invalid Input! Please enter a number.");
                            i--;
                            takeInput(n);
                        }
                    });
                } else {

                    // If input is not a number, then INVALID INPUT!
                    console.log("Invalid Input! Please enter a number.");
                    i--;
                    takeInput(n);
                }
            });

        });
    }
}

/**
 * Main Function to start the program.
 */
function main() {

    // Asking user to enter how many stocks purchased.
    r.question("Enter how many stocks you've bought: ", function(ans) {

        // Validating if ans is a Number
        if (!isNaN(ans)) {

            //Storing answer in n.
            n = Number(ans);

            // Calling takeInput() function to take 'n' number of inputs for each stock.
            takeInput(n);

        } else {
            // If input is not a number, then INVALID INPUT!
            console.log("Invalid Input! Please enter a number.");
            takeInput();
        }
    });
}

// Calling main() function to start the program.
main();