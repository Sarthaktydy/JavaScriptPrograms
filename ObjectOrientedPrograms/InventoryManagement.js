/******************************************************************************
 *  Compilation:  node InventoryManagement.js
 *  
 *  Purpose: This is a helper class which has all the function which can be used
 *           to manipulate with a Linked List based on Linked List Data Structure.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   23-10-2018
 *
 ******************************************************************************/

var fs = require("fs");
var rl = require('readline');
var r = rl.createInterface(process.stdin, process.stdout);
var price = [25, 60, 35];

var arr = [];
class Inventory {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
}

function writeInJson(str) {
    var j = JSON.stringify(str);
    fs.writeFile('./Inventory.json', j, function(err) {
        if (err) {
            throw err;
        } else {
            console.log("JSON File Saved!");
        }
    });
}


function takeInput() {

    r.question("What do you want?\n1.Rice 2.Pulses 3.Wheat\n", function(ans1) {
        if (!isNaN(ans1)) {
            r.question(`How much Kg ${ans1} do you want? `, function(ans2) {
                if (!isNaN(ans2) && ans2 != ) {
                    var item = Number(ans1.trim());
                    var itemName = "";
                    switch (item) {
                        case 1:
                            console.log("RINWIN");
                            itemName = "Rice";
                            break;
                        case 2:
                            itemName = "Pulses";
                            break;
                        case 3:
                            itemName = "Wheat";
                            break;
                    }
                    var qty = Number(ans2.trim());
                    var inv = new Inventory(itemName, qty, price[ans1 - 1]);
                    arr.push(inv);
                    r.question("Do you want anything else?\n1.Yes 2.No\n", function(ans3) {
                        if (!isNaN(ans3)) {
                            if (ans3 == 1) {
                                takeInput();
                            } else {
                                calculate();
                            }
                        } else {
                            console.log("Invalid Input! Please enter a number.");
                            takeInput();
                        }
                    });
                } else {
                    console.log("Invalid Input! Please enter a number.");
                    takeInput();
                }
            });
        } else {
            console.log("Invalid Input! Please enter a number.");
            takeInput();
        }
    });
}

function calculate() {
    var finalPrice = 0;
    console.log("\nYour final bill is:\n");
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].name + ": Rs." + arr[i].weight * arr[i].price);
        total += arr[i].weight * arr[i].price;
    }
    console.log("\nTotal: Rs." + total);
    writeInJson(arr);
    r.close();
}

takeInput();