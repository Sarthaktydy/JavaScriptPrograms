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
class Inventory {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }

    writeInJson(str) {
        var j = JSON.stringify(str);
        fs.writeFile('./Inventory.json', j, function(arr) {
            if (err) {
                throw err;
            } else {
                console.log("JSON File Saved!");
            }
        });
    }

    takeInput() {
        var readline = require('readline');
        var r = readline.createInterface(process.stdin, process.stdout);
        r.question("Enter name of the ");
    }
}