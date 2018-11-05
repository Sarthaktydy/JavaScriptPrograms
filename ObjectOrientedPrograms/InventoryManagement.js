/******************************************************************************
 *  Compilation:  node InventoryManagement.js
 *  
 *  Purpose: Program to manage the Inventory of Rice, Pulses & Wheat with their
 *           properties name, weight, price per Kg. All the inputs are taken
 *           from the user. And finally the output is stored in a JSON file in 
 *           JSON format.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   01-11-2018
 *
 ******************************************************************************/

// Implementing the File System module in this application.
var fs = require("fs");

// Implementing the Readline module in this application.
var rl = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var r = rl.createInterface(process.stdin, process.stdout);

// Declaring price for Rice, Pulses & wheat in price array at 0,1 & 2 index.
var price = [25, 60, 35];

// Creating an empty array to store Inventory objects.
var arr = [];

class Inventory {

    /**
     * It creates an object of Inventory class by passing name, weight & price per Kg.
     * 
     * @param {String} name    Name of the item to be added.
     * @param {Number} weight  Weight of the item.
     * @param {Number} price   Price per Kg of the item.
     */
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
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
    fs.writeFile('../JsonFiles/Inventory.json', j, function(err) {
        if (err) {
            throw err;
        } else {
            console.log("JSON File Saved!");
        }
    });
}

/**
 * Function to calculate individual costs of the products & total 
 * price of the Inventory.
 */
function calculate() {

    console.log("\nYour final bill is:\n");
    var total = 0;

    // For loop will run throughout 'arr' array.
    for (var i = 0; i < arr.length; i++) {

        // Printing the name of the product & total price according to weight.
        console.log(arr[i].name + ": Rs." + arr[i].weight * arr[i].price);

        // Adding the price into total price.
        total += arr[i].weight * arr[i].price;
    }

    console.log("\nTotal: Rs." + total);

    // Calling writeInJson() function to write 'arr' in the JSON file.
    writeInJson(arr);
    r.close();
}

/**
 * Function to take the input from the user to be filled in Inventory.
 */
function takeInput() {

    // Asking the user to choose the item.
    r.question("What do you want?\n1.Rice 2.Pulses 3.Wheat\n", function(ans1) {

        // Validating if ans1 is a Number
        if (!isNaN(ans1)) {

            // If yes, then asking how much KG of that item.
            r.question(`How much Kg ${ans1} do you want? `, function(ans2) {

                // Validating if ans2 is a Number.
                if (!isNaN(ans2)) {

                    // Storing item number in 'item'.
                    var item = Number(ans1.trim());
                    var itemName = "";

                    /** 
                     * Switch case to set 'itemName' value according to 'item' entered.
                     * "Rice" for 1, "Pulses" for 2 & "Wheat" for 3.
                     */
                    switch (item) {

                        case 1:
                            itemName = "Rice";
                            break;
                        case 2:
                            itemName = "Pulses";
                            break;
                        case 3:
                            itemName = "Wheat";
                            break;
                    }

                    // Storing the weight in 'qty'.
                    var qty = Number(ans2.trim());

                    // Creating a new object of Inventory.
                    var inv = new Inventory(itemName, qty, price[ans1 - 1]);

                    // Pushing that object into arr array.
                    arr.push(inv);

                    // Asking the user about anything else.
                    r.question("Do you want anything else?\n1.Yes 2.No\n", function(ans3) {

                        // Validating if ans3 is a Number.
                        if (!isNaN(ans3)) {

                            // Validating if ans3 is 1
                            if (ans3 == 1) {

                                //If yes, call takeInput() function again to take the input.
                                takeInput();
                            } else {

                                // If no, then call calculate() function.
                                calculate();
                            }
                        } else {

                            // If input is not a number, then INVALID INPUT!
                            console.log("Invalid Input! Please enter a number.");
                            takeInput();
                        }
                    });
                } else {

                    // If input is not a number, then INVALID INPUT!
                    console.log("Invalid Input! Please enter a number.");
                    takeInput();
                }
            });
        } else {

            // If input is not a number, then INVALID INPUT!
            console.log("Invalid Input! Please enter a number.");
            takeInput();
        }
    });
}

// Calling takeInput() function to start taking input from the user.
takeInput();